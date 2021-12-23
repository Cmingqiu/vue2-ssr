const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const VueServerRenderer = require('vue-server-renderer')

const resolve = pathname => path.resolve(__dirname, pathname)
const app = new Koa()
const router = new Router()

// const serverBundle = fs.readFileSync(resolve('dist/server.bundle.js'), 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
// 服务端模板
const template = fs.readFileSync(resolve('public/index.ssr.html'), 'utf-8')
const render = VueServerRenderer.createBundleRenderer(serverBundle, {
  template,
  clientManifest //通过后端注入js脚本
})

router.get('/(.*)', async ctx => {
  try {
    console.log('try', ctx.url)
    ctx.body = await render.renderToString({ url: ctx.url })
    /* ctx.body = await new Promise((resolve, reject) => {
    render.renderToString((err, html) => {
      resolve(html) // 可以写成回调函数的方式
    })
  }) */
  } catch (error) {
    console.log('error: ', error)
    if (error.code === 404) ctx.body = 'page not found!'
  }
})

//必须先匹配静态资源，再匹配路由规则
app.use(static(resolve('dist'))) //静态资源服务
app.use(router.routes())
app.listen(3000, () => console.log('server is running on port 3000!'))
