// api/routes/root.js
module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return { hello: "World" }
    })
}