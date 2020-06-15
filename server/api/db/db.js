const Sequelize = require('sequelize');

const connectDatabase = (database, username, password, host ) => {
    const sequelize = new Sequelize(database, username, password, {
        host: host,
        dialect: 'postgres'
    });
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
};

module.exports = {
    connectDatabase,
};