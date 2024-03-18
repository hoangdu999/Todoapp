<template>
  <div class="home">
    <div class="home-wrapper">
      <div class="home-tile flex">
        <P class="home-tile-text ">To Day</P>
      </div>
      <div class="home-list">
        <li class="home-list-item flex" v-for="(item, index) in ListAct" :key="index">
          <div class="home-list-item-left flex">
            <div class="icon-deposits list-icon "></div>
            <check-box  :disabled="true"
            :checked="false"
            id=""></check-box>
          {{ item }}
          </div>
          <div class="home-list-item-right flex">
            <div class="icon-deposits"></div>
            <div class="icon-deposits"></div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
import CheckBox from '../../components/checkbox/MCheckBox.vue';
export default {
  name: 'TheHome',
  components: {
    CheckBox
  },
  data() 
    {
    return {
      ListAct:[
        "Meeting",
        "Test",
        "Learn"
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style scoped>
@import url(thehomecss.css);
</style>