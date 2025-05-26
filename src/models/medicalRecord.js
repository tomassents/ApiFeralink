module.exports = (sequelize, DataTypes) => {
  const MedicalRecord = sequelize.define('MedicalRecord', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_id: {
      type: DataTypes.BIGINT,
      references: { model: 'pets', key: 'id' },
    },
    branch_id: {
      type: DataTypes.BIGINT,
      references: { model: 'branches', key: 'id' },
    },
    veterinarian_id: {
      type: DataTypes.BIGINT,
      references: { model: 'users', key: 'id' },
    },
    visit_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    tableName: 'medical_records',
    timestamps: false,
  });
  return MedicalRecord;
}; 