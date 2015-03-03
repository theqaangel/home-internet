var restify = require('restify'),
    http = require("http"),
    main = require('./main.js'),
    url = require("url"),
    ip_addr = '0.0.0.0',
    path = require("path"),
    web_port = '8888';

//Rest Server 
var server = restify.createServer({
    name: "home-internet"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse());

server.get({
    path: '/api/temp',
    version: '0.0.1'
}, main.getTemp);


server.listen(web_port, ip_addr, function() {
    console.log('Rest Server %s listening at %s ', ip_addr, web_port);
});



