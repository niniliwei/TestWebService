'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
	port: 80
});

server.route({
	method: 'GET',
	path: '/',
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