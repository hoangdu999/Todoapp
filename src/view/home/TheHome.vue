<template>
  <div class="home">
    <div class="home-wrapper" :class="IstoggleSidebar ? '' : 'm-menu-change'">
      <div class="home-tile flex">
        <P class="home-tile-text">To Day</P>
        <div class="icon-add" @click="ShowFrom"></div>
      </div>
      <div class="home-list">
        <li
          class="home-list-item flex"
          v-for="(item, index) in ListAct"
          :key="index"
        >
          <div class="home-list-item-left flex">
            <div
              class="icon icon-unimportant list-icon"
              @click="changeIcon($event, item)"
            ></div>
            <check-box
              :disabled="true"
              :checked="false"
              :id="item.name"
            ></check-box>
          </div>
          <div class="home-list-item-content">
            <div class="home-list-item-content-name">
              {{ item.name }}
            </div>
            <div class="home-list-item-content-des">
              {{ item.description }}, Deline: {{ item.deline }}
            </div>
          </div>
          <div class="home-list-item-right flex">
            <div class="icon-edit"></div>
            <div class="icon-delete"></div>
          </div>
        </li>
      </div>
    </div>
    <m-pop-up :isShow="IsShowFromCreate" @close-pop-up="IsShowFromCreate=false">
      <template #header>
        Thêm Công Việc
      </template>
      <div class="form-content">    
        <ms-input v-model="Stacks.TaskName" title="Name" />
        <m-textarea v-model="Stacks.Description" title="Description" heighttext="50"/>
        <ms-input v-model="Stacks.deline" title="Deline" type="date" />
        <div class="form-create-priority">
          <div class="form-create-priority-title text-bold">Priority</div>
          <div class="form-create-priority-radio flex mt-10">
            <m-radio-button
              margin="0 0 0 5px"
              textField="Unimportant"
              nameInput="Priority"
              id="Unimportant"
              :checked="Stacks.Priority == 'Unimportant'"
              @change="changPriority"
            />
            <m-radio-button
              margin="0 0 0 5px"
              textField="Important"
              nameInput="Priority"
              @change="changPriority"
              :checked="Stacks.Priority == 'Priority'"
              id="Important"
            />
          </div>
        </div>
      </div>
      
      <template #footer>
        <ms-button @click="InsertStacks" backgroundColor="var(--bgr-menu)">Tạo</ms-button>
      </template>
    </m-pop-up>
    <m-pop-up-warn ></m-pop-up-warn>
  </div>
</template>
<script>
import baseApi from '../../api/baseApi';
import EnumTodo from "../../assets/js/enum.js";
import MsButton from '../../components/button/MsButton.vue';
import CheckBox from "../../components/checkbox/MCheckBox.vue";
import MsInput from '../../components/input/Input.vue';
import MPopUp from "../../components/pop-up/MPopUp.vue";
import MRadioButton from '../../components/radio-button/MRadioButton.vue';
import MTextarea from '../../components/textarea/MTextarea.vue';
export default {
  name: "TheHome",
  components: {
    CheckBox,
    MPopUp,
    MsInput,
    MsButton,
    MRadioButton,
    MTextarea
  },
  data() {
    return {
      EnumPriority: EnumTodo.Priority, // Enum giới tính
      IstoggleSidebar : true,
      IsShowFromCreate: false,
      Stacks : {
        Priority : 'Unimportant'
      },
      ListAct: [
        {
          name: "Meeting",
          description: "Đi họp với các sếp",
          deline: "3/19/2024",
          priority: false,
          status: "Hoàn Thành",
        },
        {
          name: "Learn",
          description: "Đi học với các sếp",
          deline: "3/19/2024",
          priority: false,
          status: "Chưa Hoàn Thành",
        },
        {
          name: "Shopping",
          description: "Đi mua hàng với các sếp",
          deline: "3/19/2024",
          priority: false,
          status: "Hoàn Thành",
        },
        {
          name: "Meeting",
          description: "Đi họp với các sếp",
          deline: "3/19/2024",
          priority: false,
          status: "Hoàn Thành",
        },
        {
          name: "Meeting",
          description: "Đi họp với các sếp",
          deline: "3/19/2024",
          priority: false,
          status: "Hoàn Thành",
        },
        {
          name: "Meeting",
          description: "Đi họp với các sếp",
          deline: "3/19/2024",
          priority: false,
          status: "Hoàn Thành",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    ShowFrom() {
      this.IsShowFromCreate = true;
    },
    async InsertStacks(){
      try{
        // Validate

        // Gán 1 số trường mặc định

        // Xử lý call api
        const res = await new baseApi("MyStacks").create(this.Stacks);
        console.log(res);
      }
      catch(err){
        console.log(err);
      }
    },
    changPriority(id){
      this.Stacks.Priority = id;
    },
    changeIcon(event, item) {
      var icon = event.target;
      if (icon.classList.contains("icon-unimportant")) {
        icon.classList.remove("icon-unimportant");
        icon.classList.add("icon-important");
      } else {
        icon.classList.remove("icon-important");
        icon.classList.add("icon-unimportant");
      }
      item.priority = !item.priority;
      console.log(item.priority);
    },
  },
  watch: {
    "$state.toggleSidebar": function () {
      this.IstoggleSidebar = this.$state.toggleSidebar;
      console.log(this.Stacks);
    },
  }
};
</script>
<style scoped>
@import url(thehomecss.css);
</style>
