import TheHome from "../view/home/TheHome.vue";
import TheRegister from "../view/register/TheRegister.vue";
import TheLogin from "../view/login/TheLogin.vue";
const routes = [
  {
    path: "/",
    component: TheHome,
  },

  {
    path: "/register",
    component: TheRegister,
  },

  {
    path: "/login",
    component: TheLogin,
  },
];
export default routes;
