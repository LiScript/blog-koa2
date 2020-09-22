const router = require('koa-router')()

router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
  const query = ctx.query
  const body = ctx.request.body
  ctx.body = {
    err: 0,
    query,
    body,
    data: []
  }
})

router.get('/session-test', async (ctx, next) => {
  if (ctx.session.viewCount === null) {
    ctx.session.viewCount = 0
  }
  ctx.session.viewCount++
  ctx.body = {
    errno: 0,
    viewCount: ctx.session.viewCount
  }
})

module.exports = router
