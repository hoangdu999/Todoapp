<template>
  <div class="sidebar-menu" :class="toggleSidebar ? '' : 'm-menu-collapse'">
    <div class="sidebar__header flex" >
      <div class="icon-bar"   @click="toggleSidebarChange"></div>
      <div class="sidebar__header-avt flex" @click="showListHidden">
        <img
          src="../../assets/img/avt.png"
          alt="logo"
        />
        <ul class="avt-list hidden">
          <li class="avt-list-infor"><ms-button class="w-100 transition" backgroundColor="white" color=" rgb(109, 107, 107)">Thông Tin</ms-button></li>
          <li class="avt-list-logout"><a href="/login"><ms-button class="w-100 transition" backgroundColor="white" color=" rgb(109, 107, 107)">Đăng Xuất
          </ms-button></a></li>
        </ul>
        <p>{{}}</p>
      </div>
      <div class="icon-notification" data-tip="Tính năng chưa phát triển"></div>
    </div>
    <div class="m-menu">
      <div class="m-menu__list">
        <router-link
          :to="`${item.path}`"
          v-for="(item, index) in listMenuItem"
          :key="index"
          class="m-menu__list-item-link"
        >
          <li
            class="m-menu__list-item"
            :class="itemActive == index ? 'active' : ''"
            :key="index"
            @click="activeItem(index)"
          >
            <div class="m-menu__list-item-icon" :class="item.classIcon"></div>
            <div class="m-menu__list-item-title menu-item-text">
              {{ item.text }}
            </div>
          </li>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import constants from '../../assets/js/constants.js';
import MsButton from '../button/MsButton.vue';
export default {
  name: 'ToDoAppTheSidebar',
  components:{
    MsButton
  },
  data() {
    return {
      itemActive: 0,
      listMenuItem: constants.SidebarMenu,
      toggleSidebar: true,
    };
  },

  mounted() {
    
  },

  methods: {
    activeItem(index) {
      this.itemActive = index;
    },
    toggleSidebarChange() {
      this.$state.toggleSidebar = !this.$state.toggleSidebar;
    },
    showListHidden() {
      var list = document.querySelector('.avt-list ');
      if (list.classList.contains('fl-block')){
        list.classList.remove('fl-block');
        list.classList.add('hidden');
      }else{
        list.classList.add('fl-block');
        list.classList.remove('hidden');

      }
    }

  },
  watch: {
    "$state.toggleSidebar": function () {
      this.toggleSidebar = this.$state.toggleSidebar;
    },
  },
};
</script>
<style scoped>
@import url(sidebarcss.css);
</style>