const Router = require('koa-router');
const Order = require('./models/Order');

const router = new Router({
  prefix: '/api',
});

router.get('/getOrder', async (ctx) => {
  const orders = await Order.find({});
  orders.sort((a, b) => a.number - b.number);

  ctx.body = { orders };
  ctx.status = 200;
});

router.post('/update', async (ctx) => {
  const orders = [];
  for (let i = 0; i < ctx.request.body.orders.length; i += 1) {
    orders.push(new Order({
      number: ctx.request.body.orders[i].number,
      name: ctx.request.body.orders[i].name,
      type: ctx.request.body.orders[i].type,
      time: Date.now(),
    }).save());
  }
  await Promise.all(orders);
  ctx.status = 200;
});

module.exports = router;
