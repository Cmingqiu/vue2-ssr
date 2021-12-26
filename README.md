### vue2-ssr + vue-router + vuex + koa2

### 问题总结

1. 服务端代码打包加上 vue-server-renderer/server-plugin 后不能打包出 html 模板，可能和 webpack5 冲突。解决方案：从 public 目录下取文 index.ssr.html。
2. 配置文件放在了 build 文件夹下，入口文件路径是./ 而不是../ ; 使用 resolve() 表示以配置文件路径作为相对路径
3. 刚开始服务端状态替换客户端状态的逻辑写在 store.js,但是服务端报错 window is not defined。所以应该写在 client-entry.js 中

## 使用 npm run commit 提交

## npm run log 生成提交日志 CHANGELOG.md
