const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
      'User', 
      {
         id: {
            type: DataTypes.UUID, // tipo de dato hexadecimal
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4 // generamos el hexadecimal
      },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true,
      }, 
         password: {
            type: DataTypes.STRING,
            allowNull: false,
      }
   }, { timestamps: false });
};
