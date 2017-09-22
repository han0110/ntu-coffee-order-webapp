const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./lib/router');

const app = new Koa();
const port = 3000;

app.use(bodyParser());

app.use(serve('public'));
app.use(serve('dist'));

app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', (err) => {
  console.log(err);
});

app.listen(port, () => console.log('Koa server listening on port 3000'));
