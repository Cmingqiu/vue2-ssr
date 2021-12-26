import createApp from './app'

const { app, store } = createApp()

// 客户端会执行到这里 用服务端状态替换客户端状态
if (typeof window !== undefined && window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

app.$mount('#app')
