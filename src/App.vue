<template>
  <div>
    <the-header />
    <!-- :style="{marginTop : getMarginContainer + 'px'}" -->
      <div class="container" >
        <the-sidebar></the-sidebar>
        <router-view/>
      </div>
    <the-footer/>
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
   
  }
}
</script>
<style>
@import url(./assets/css/index.css);
</style>
