const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

// Importar modelos
const UserType = require('./userType')(sequelize, DataTypes);
const Role = require('./role')(sequelize, DataTypes);
const Branch = require('./branch')(sequelize, DataTypes);
const User = require('./user')(sequelize, DataTypes);
const PersonalInfo = require('./personalInfo')(sequelize, DataTypes);
const Image = require('./image')(sequelize, DataTypes);
const Pet = require('./pet')(sequelize, DataTypes);
const MedicalRecord = require('./medicalRecord')(sequelize, DataTypes);
const Diagnosis = require('./diagnosis')(sequelize, DataTypes);
const Treatment = require('./treatment')(sequelize, DataTypes);

// Definir asociaciones aquí (se agregarán después de crear los modelos)

// User associations
User.hasOne(PersonalInfo, { foreignKey: 'user_id' });
User.belongsTo(UserType, { foreignKey: 'user_type_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });
User.belongsTo(Branch, { foreignKey: 'branch_id' });

PersonalInfo.belongsTo(User, { foreignKey: 'user_id' });

// Asociaciones
UserType.hasMany(User, { foreignKey: 'user_type_id' });
User.belongsTo(UserType, { foreignKey: 'user_type_id' });

Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

Branch.hasMany(User, { foreignKey: 'branch_id' });
User.belongsTo(Branch, { foreignKey: 'branch_id' });

User.hasMany(Image, { foreignKey: 'user_id' });
Image.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Pet, { foreignKey: 'owner_id' });
Pet.belongsTo(User, { foreignKey: 'owner_id' });

Pet.hasMany(MedicalRecord, { foreignKey: 'pet_id' });
MedicalRecord.belongsTo(Pet, { foreignKey: 'pet_id' });

Branch.hasMany(MedicalRecord, { foreignKey: 'branch_id' });
MedicalRecord.belongsTo(Branch, { foreignKey: 'branch_id' });

User.hasMany(MedicalRecord, { foreignKey: 'veterinarian_id' });
MedicalRecord.belongsTo(User, { foreignKey: 'veterinarian_id' });

MedicalRecord.hasMany(Diagnosis, { foreignKey: 'medical_record_id' });
Diagnosis.belongsTo(MedicalRecord, { foreignKey: 'medical_record_id' });

MedicalRecord.hasMany(Treatment, { foreignKey: 'medical_record_id' });
Treatment.belongsTo(MedicalRecord, { foreignKey: 'medical_record_id' });

module.exports = {
  sequelize,
  UserType,
  Role,
  Branch,
  User,
  PersonalInfo,
  Image,
  Pet,
  MedicalRecord,
  Diagnosis,
  Treatment,
}; 