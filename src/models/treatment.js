module.exports = (sequelize, DataTypes) => {
  const Treatment = sequelize.define('Treatment', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    medical_record_id: {
      type: DataTypes.BIGINT,
      references: { model: 'medical_records', key: 'id' },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'treatments',
    timestamps: false,
  });
  return Treatment;
}; 