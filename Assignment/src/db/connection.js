// Class from Sequelize.
const { Sequelize } = require("sequelize");

// New Sequelize URI from .env.
const SQLconnection = new Sequelize(process.env.MYSQL_URI);

try {
  
// Authenticate to database
  SQLconnection.authenticate();

// Show assigned message if successful.
  console.log("Successfully connected to Database");
} catch (error) {
  
// Show any errors when attempting connection.
  console.log(error);
}


module.exports = SQLconnection;
