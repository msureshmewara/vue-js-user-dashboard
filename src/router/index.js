import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import ("@/components/user/page-userlist.vue"),
    meta: { title: 'Github UserList' }
  },
  {
    path: "/:username",
    name: "UserDetail",
    component: () => import ("@/components/user/page-userdetail.vue"),
    meta: { title: 'Github UserDetails' }
  },
];

const router = new Router({
  mode: "history",
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
      document.title = to.meta.title;
  });
});

export default router;
