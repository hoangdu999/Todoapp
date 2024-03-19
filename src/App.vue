<template>
  <div>
    <the-header />
    <div class="container flex">
      <div class="sidebar">
        <the-sidebar v-if="!shouldHideSidebar" />
      </div>
      <div class="container-main w-100">
        <router-view />
      </div>
    </div>
    <the-footer />
  </div>
</template>
<script>
import TheFooter from './components/footer/TheFooter.vue';
import TheHeader from './components/header/TheHeader.vue';
import TheSidebar from './components/sidebar/TheSidebar.vue';
export default{
  components:{
    TheFooter,
    TheHeader,
    TheSidebar
  },
  created(){
      // this.$state.setDefaultState();
  },
  data() {
    return {

    }
  },
  mounted(){
  },
  computed:{
    shouldHideSidebar() {
      const loginRoutes = ['/login', '/register']; // Array of login-related routes
      return loginRoutes.includes(this.$route.path);
    },
  },
  }
</script>
<style>
@import url(./assets/css/index.css);
</style>
