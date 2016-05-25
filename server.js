'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
	port: 9999
});

server.route({
	method: 'GET',
	path: '/test',
	handler: (req, reply) => {
		reply('test');
	}
});

server.start((err) => {
	if (err) {
		throw err;
	}

	console.log('Server running at ' + server.info.uri);
});