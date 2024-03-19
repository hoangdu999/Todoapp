<template>
  <div class="sidebar-menu" :class="toggleSidebar ? '' : 'm-menu-collapse'">
    <div class="sidebar__header flex" >
      <div class="icon-bar"   @click="toggleSidebarChange"></div>
      <div class="sidebar__header-avt flex">
        <img
          src="../../assets/img/avt.png"
          alt="logo"
        />
      <p>ToDoApp</p>
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
export default {
  name: 'ToDoAppTheSidebar',

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