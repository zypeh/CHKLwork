var http = require('http'),
    logger = require('koa-logger'),
    serve = require('koa-static'),
    route = require('koa-route'),
    routes = require('./routes/routes'),
    koa = require('koa'),
    app = koa();

app.use(serve('./public'));

// Route middleware
app.use(route.get('/', routes.home));

// HTTP Server
http.createServer(app.callback()).listen(3000);
console.log('CHKL|work is working as smooth as silk !');
console.log(' Server listening on port 3000');
