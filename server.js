const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const index = require('./routes/index');
const detail = require('./routes/detail');

router.get('/index', index);
router.get('/detail', detail);

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);