require("dotenv").config();
const { Sequelize } = require("sequelize");
const defineModelUser = require("./models/User");
const defineModelCharacter = require("./models/Character");

// Lee las variables de entorno del archivo .env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// console.log(DB_HOST);
// Construye la URL de conexión usando las variables de entorno
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
// async function testConnection(){
//   try {
//       await sequelize.authenticate()
//       console.log('Conexion a la DB ok :)');
//   } catch (error) {
//       console.log('No se pudo conectar a la DB :(');
//   } 
// }

// testConnection()


// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
defineModelUser(sequelize);
defineModelCharacter(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Character } = sequelize.models;

User.belongsToMany(Character, { through: "user_favorite",});
Character.belongsToMany(User, { through: "user_favorite",});

module.exports = {
   User,
   Character,
   conn: sequelize,
};
