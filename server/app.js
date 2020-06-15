const nconf = require('nconf');
const server = require('./server');
const keys = require('./keys');

const {connectDatabase} = require('./api/db/db');
const { loadSettings } = require('./config/configurationAdaptor');

const appSettingsPath = process.env.APP_SETTINGS_FILE_PATH;

loadSettings({ appSettingsPath })
    .then(() => {
        // TODO Connect to DB, if any. 'postgres://user:pass@example.com:5432/dbname'
        connectDatabase(keys.pgDatabase, keys.pgUser, keys.pgPassword, keys.pgHost);
        // Read the config property required for starting the server
        const serverOptions = {
            logSeverity: nconf.get('logSeverity'),
          };
        server.createServer(serverOptions);
        // TODO Start the server
    })
    .catch((err) => {
        console.log(err);
    })
