const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list',async function (ctx, next) {
  const query = ctx.query
  ctx.body = {
    err: 0,
    query,
    data: []
  }
})


module.exports = router
