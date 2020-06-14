// import dependencies from npm
const Fastify = require('fastify');
const path = require('path');
const AutoLoad = require('fastify-autoload');
const { uuid } = require('uuidv4');

// create request ids
const createRequestId = () => uuid();

const createServer = (options) => {
    const { logSeverity } = options;
    // create the server
    const server = Fastify({
        ignoreTrailingSlash: true,
        logger: {
            genReqId: createRequestId,
            level: logSeverity
        }
    });

    /* the following line is going to removed in favor of
       simple multiple imports provided by 
       fastify-autoload 
    */

    server.register(AutoLoad, {
        dir: path.join(__dirname, 'api', 'routes')
    });

    // start the server
    server.listen(5000, '0.0.0.0', (err) => {
        if (err) {
            server.log.error(err);
            console.log(err);
            process.exit(1);
        }
        server.log.info('Server Started');
    });
}

module.exports = {
    createServer
}