<template>
  <div class="home">
    <div class="home-wrapper">
      <div class="home-tile flex">
        <P class="home-tile-text ">To Day</P>
        <div class="icon-add" ></div>
      </div>
      <div class="home-list">
        <li class="home-list-item flex" v-for="(item, index) in ListAct" :key="index">
          <div class="home-list-item-left flex">
            <div class="icon icon-unimportant list-icon" @click="changeIcon($event, item)"></div>
            <check-box  :disabled="true"
            :checked="false"
            :id="item.name"></check-box>
          </div>
          <div class="home-list-item-content">
            <div class="home-list-item-content-name">
              {{ item.name }}
            </div>
            <div class="home-list-item-content-des">
              {{ item.description }}, Deline: {{item.deline }}
            </div>
          </div>
          <div class="home-list-item-right flex">
            <div class="icon-edit"></div>
            <div class="icon-delete"></div>
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
      ListAct:[{
        name:"Meeting",
        description:"Đi họp với các sếp",
        deline:"3/19/2024",
        priority: false,
        status:"Hoàn Thành"
      },
      {
        name:"Learn",
        description:"Đi học với các sếp",
        deline:"3/19/2024",
        priority:false,
        status:"Chưa Hoàn Thành"
      },
      {
        name:"Shopping",
        description:"Đi mua hàng với các sếp",
        deline:"3/19/2024",
        priority:false,
        status:"Hoàn Thành"
      },
      {
        name:"Meeting",
        description:"Đi họp với các sếp",
        deline:"3/19/2024",
        priority:false,
        status:"Hoàn Thành"
      },
      {
        name:"Meeting",
        description:"Đi họp với các sếp",
        deline:"3/19/2024",
        priority:false,
        status:"Hoàn Thành"
      },
      {
        name:"Meeting",
        description:"Đi họp với các sếp",
        deline:"3/19/2024",
        priority:false,
        status:"Hoàn Thành"
      },
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    changeIcon(event, item) {
      var icon = event.target;
      if (icon.classList.contains('icon-unimportant')) {
          icon.classList.remove('icon-unimportant');
          icon.classList.add('icon-important');
      } else {
          icon.classList.remove('icon-important');
          icon.classList.add('icon-unimportant');
      }
      item.priority = !item.priority;
      console.log(item.priority);
    }

  },
 
};
</script>
<style scoped>
@import url(thehomecss.css);
</style>