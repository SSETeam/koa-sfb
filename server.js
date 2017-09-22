const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const demo = require('./routes/demo');

router.get('/api/demo', demo);

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);