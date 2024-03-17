import TheHome from "../view/home/TheHome.vue";
import Register from "../view/register/Register.vue";
const routes = [
  {
    path: "/",
    component: TheHome,
  },

  {
    path: "/register",
    component: Register,
  },
];
export default routes;
