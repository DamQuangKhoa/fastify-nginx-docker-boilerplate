// const Sequelize = require('sequelize');
const mongoose = require('mongoose');


const connectDatabase = (port, username, password, host) => {
    const mongoURI = `mongodb://${username}:${password}@${host}:${port}`
    mongoose.connect(mongoURI, { useNewUrlParser: true });

    mongoose.connection.on('error', (err) => {
        console.log(err);
        process.exit();
    });

};

module.exports = {
    connectDatabase,
};