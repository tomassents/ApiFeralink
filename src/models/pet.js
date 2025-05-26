module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    owner_id: {
      type: DataTypes.BIGINT,
      references: { model: 'users', key: 'id' },
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    species: DataTypes.TEXT,
    breed: DataTypes.TEXT,
    age: DataTypes.INTEGER,
  }, {
    tableName: 'pets',
    timestamps: false,
  });
  return Pet;
}; 