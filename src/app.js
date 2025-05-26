const express = require('express');
const app = express();
const { sequelize } = require('./models');
require('dotenv').config();
const userTypeRoutes = require('./routes/userTypeRoutes');
const roleRoutes = require('./routes/roleRoutes');
const branchRoutes = require('./routes/branchRoutes');
const userRoutes = require('./routes/userRoutes');
const personalInfoRoutes = require('./routes/personalInfoRoutes');
const imageRoutes = require('./routes/imageRoutes');
const petRoutes = require('./routes/petRoutes');
const medicalRecordRoutes = require('./routes/medicalRecordRoutes');
const diagnosisRoutes = require('./routes/diagnosisRoutes');
const treatmentRoutes = require('./routes/treatmentRoutes');

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rutas base (se agregarán más luego)
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando' });
});

// Importar rutas aquí después
app.use('/api/user-types', userTypeRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/users', userRoutes);
app.use('/api/personal-info', personalInfoRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/medical-records', medicalRecordRoutes);
app.use('/api/diagnoses', diagnosisRoutes);
app.use('/api/treatments', treatmentRoutes);

// Sincronizar modelos con la base de datos (solo para desarrollo, no usar force: true en producción)
sequelize.sync({ alter: false })
  .then(() => console.log('Modelos sincronizados'))
  .catch(err => console.error('Error al sincronizar modelos:', err));

module.exports = app; 