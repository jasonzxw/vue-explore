/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-08-29 13:51:38
 * @FilePath: \vue-explore\src\router\router.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
import Main from "../components/routerComponent/Main.vue";
import Dynamic from "../components/routerComponent/Dynamice.vue";
import Content from "../components/routerComponent/Content.vue";
// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Content,
      },
      {
        path: "main",
        component: Main,
      },
    ],
  },
  { path: "/about", component: Main },
  { path: "/dynamic/:id", component: Dynamic },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
