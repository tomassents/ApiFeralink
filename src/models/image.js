module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      references: { model: 'users', key: 'id' },
    },
    image_data: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  }, {
    tableName: 'images',
    timestamps: false,
  });
  return Image;
}; 