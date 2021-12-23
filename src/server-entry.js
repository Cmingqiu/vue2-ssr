import createApp from './app'

// 此方法是在服务端运行的,由render.renderToString调用
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url) //路由中有异步组件
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      //路由有对应页面
      if (matchedComponents.length) {
        // 等待所以asyncData执行完之后再返回页面
        Promise.all(
          matchedComponents.map(c => {
            if (c.asyncData) return c.asyncData(store) //返回promise
          })
        ).then(() => {
          context.state = store.state //将服务端state放到window上,vue-server-renderer实现的
          resolve(app) // 服务端渲染只需将渲染的实例导出即可
        }, reject)
      } else {
        reject({ code: 404 })
      }
    }, reject)
    // return app
  })
}
