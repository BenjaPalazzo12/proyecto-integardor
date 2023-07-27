require('dotenv').config();
const { Sequelize } = require('sequelize');
const defineModelUser = require('./models/User')
const defineModelCharacter = require('./models/Character')
// const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;



// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres://${"postgres"}:${"08252003"}@${"localhost"}/${"rickandmorty"}`,
   { logging: false, native: false }
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
