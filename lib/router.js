const Router = require('koa-router');

const router = new Router({
  prefix: '/api',
});

router.post('/update', async (ctx) => {
  ctx.status = 200;
});

module.exports = router;
