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
              :class="
                getItemimportant(item) ? 'icon-important' : 'icon-unimportant'
              "
              class="icon list-icon"
              @click="changeIcon($event, item,index)"
            ></div>
            <check-box
              :disabled="false"
              :checked="getItemChecked(item)"
              :id="item.taskId"
              @click="updateStatus(item,index)"
            ></check-box>
          </div>
          <div class="home-list-item-content">
            <div class="home-list-item-content-name">
              {{ item.taskName }}
            </div>
            <div class="home-list-item-content-des">
              {{ item.description }}, Deadline: {{ item.deadline }}
            </div>
          </div>
          <div class="home-list-item-right flex">
            <div
              class="icon-edit"
              @click="ShowFromEditMethos( index)"
            ></div>
            <div
              class="icon-delete"
              @click="ShowMessDelete(item.taskId,index)"
            ></div>
          </div>
        </li>
      </div>
    </div>
    <m-pop-up
      :isShow="IsShowFromCreate"
      @close-pop-up="IsShowFromCreate = false"
    >
      <template #header> Thêm Công Việc </template>
      <div class="form-content">
        <ms-input v-model="Task.TaskName" textField="Name" />
        <m-textarea
          v-model="Task.Description"
          title="Description"
          heighttext="50"
        />
        <ms-input v-model="Task.Deadline" textField="Deadline" type="date" />
        <div class="form-create-priority">
          <div class="form-create-priority-title text-bold">Priority</div>
          <div class="form-create-priority-radio flex mt-10">
            <m-radio-button
              margin="0 0 0 5px"
              textField="unimportant"
              nameInput="Priority"
              id="unimportant"
              :checked="Task.Priority == 'unimportant'"
              @change="changPriority"
            />
            <m-radio-button
              margin="0 0 0 5px"
              textField="important"
              nameInput="Priority"
              @change="changPriority"
              :checked="Task.Priority == 'Priority'"
              id="important"
            />
          </div>
        </div>
      </div>
      <template #footer>
        <ms-button @click="InsertTask" class="w-100">Tạo</ms-button>
      </template>
    </m-pop-up>
    <m-pop-up-warn
      :isShow="IsShowMessDelete"
      @close-pop-up="IsShowMessDelete = false"
    >
      <template #content>
        <p class="warning__delete-content w-100">Xác Nhận Xóa Công Việc !</p>
      </template>
      <template #footer>
        <div class="warning__delete-btn flex">
          <div @click="IsShowMessDelete = false" class="mr-10">
            <ms-button typeBtn="close">Không</ms-button>
          </div>
          <div @click="deleteStack">
            <ms-button>Có</ms-button>
          </div>
        </div>
      </template>
    </m-pop-up-warn>
    <m-pop-up :isShow="IsShowFormEdit" @close-pop-up="IsShowFormEdit = false">
      <template #header>Chỉnh sửa công việc</template>
      <div class="form-content clear-edit-form">
        <ms-input v-model="Task.TaskName" textField="Name" />
        <m-textarea
          v-model="Task.Description"
          title="Description"
          heighttext="50"
        />
        <ms-input v-model="Task.Deadline" textField="Deadline" type="date" />
        <div class="form-edit-priority">
          <div class="form-edit-priority-title text-bold">Priority</div>
          <div class="form-edit-priority-radio flex mt-10">
            <m-radio-button
              margin="0 0 0 5px"
              textField="unimportant"
              nameInput="Priority"
              id="unimportant"
              :checked="Task.Priority == 'unimportant'"
              @change="changPriority"
            />
            <m-radio-button
              margin="0 0 0 5px"
              textField="important"
              nameInput="Priority"
              @change="changPriority"
              :checked="Task.Priority == 'important'"
              id="important"
            />
          </div>
        </div>
      </div>
      <template #footer>
        <ms-button @click="EditTask" class="w-100">Cập nhật</ms-button>
      </template>
    </m-pop-up>
  </div>
</template>
<script>
import baseApi from "../../api/baseApi";
import EnumTodo from "../../assets/js/enum.js";
import MsButton from "../../components/button/MsButton.vue";
import CheckBox from "../../components/checkbox/MCheckBox.vue";
import MsInput from "../../components/input/Input.vue";
import MPopUp from "../../components/pop-up/MPopUp.vue";
import MPopUpWarn from "../../components/pop-up/MPopUpWarn.vue";
import MRadioButton from "../../components/radio-button/MRadioButton.vue";
import MTextarea from "../../components/textarea/MTextarea.vue";
export default {
  name: "TheHome",
  components: {
    CheckBox,
    MPopUp,
    MsInput,
    MsButton,
    MRadioButton,
    MTextarea,
    MPopUpWarn,
  },
  data() {
    return {
      checkBox: false,
      EnumPriority: EnumTodo.Priority,
      IsShowFormEdit: false,
      IsShowMessDelete: false,
      IstoggleSidebar: true,
      IsShowFromCreate: false,
      taskindexList: 0,
      taskFocus: {},
      taskFindEdit: {},
      Task: {
        Priority: "unimportant",
        UserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
      ListAct: [
        {
          name: "Meeting",
          description: "Đi họp với các sếp",
          Deadline: "3/19/2024",
          priority: "important",
          status: "Hoàn Thành",
        },
        {
          name: "Learn",
          description: "Đi học với các sếp",
          Deadline: "3/19/2024",
          priority: "important",
          status: "Chưa Hoàn Thành",
        },
        {
          name: "Shopping",
          description: "Đi mua hàng với các sếp",
          Deadline: "3/19/2024",
          priority: "important",
          status: "Hoàn Thành",
        },
        {
          name: "Meeting",
          description: "Đi họp với các sếp",
          Deadline: "3/19/2024",
          priority: "important",
          status: "Hoàn Thành",
        },
        {
          name: "Meeting",
          description: "Đi họp với các sếp",
          Deadline: "3/19/2024",
          priority: "important",
          status: "Hoàn Thành",
        },
        {
          name: "Meeting",
          description: "Đi họp với các sếp",
          Deadline: "3/19/2024",
          priority: "important",
          status: "Hoàn Thành",
        },
      ],
    };
  },
  async created() {
    const res = await new baseApi("Task").getAll();
    if (res) {
      this.ListAct = res;
    }
  },
  computed: {
    getItemChecked() {
      return (item) => item.status === "finish";
    },
    getItemimportant() {
      return (item) => item.priority === "important";
    },
  },
  mounted() {},

  methods: {
    ShowFromEditMethos(index) {
      this.IsShowFormEdit = true;
      this.Task = {
        TaskId:this.ListAct[index].taskId,
        TaskName: this.ListAct[index].taskName,
        Description: this.ListAct[index].description,
        Deadline: this.ListAct[index].deadline,
        Priority: this.ListAct[index].priority,
        UserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      };
      this.taskindexList = index;


    },
    ShowFrom() {
      this.IsShowFromCreate = true;
      this.Task = {
        Priority: "unimportant",
        UserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      };
    },
    async EditTask() {
      try {
        const res = await new baseApi("Task").update(this.Task);
        this.IsShowFormEdit = false;
        this.ListAct.splice(this.taskindexList, 1);
        this.ListAct = [res, ...this.ListAct];
      } catch (error) {
        console.error("Error while updating task:", error);
      }
    },

    async deleteStack() {
      await new baseApi("Task").remove(this.taskFocus.taskid);
      this.ListAct.splice(this.taskFocus.index, 1);
      this.IsShowMessDelete = false;
    },
    ShowMessDelete(id, index) {
      this.taskFocus = {
        taskid: id,
        index: index,
      };
      this.IsShowMessDelete = true;
    },
    async InsertTask() {
      try {
        // Validate

        // Gán 1 số trường mặc định

        // Xử lý call api
        const res = await new baseApi("Task").create(this.Task);
        this.IsShowFromCreate = false;
        this.ListAct = [res, ...this.ListAct];
      } catch (err) {
        console.log(err);
      }
    },
    changPriority(id) {
      this.Task.Priority = id;
    },
    changeIcon(event, item,index) {
      this.updatePriority(item,index);
      var icon = event.target;
      if (icon.classList.contains("icon-unimportant")) {
        icon.classList.remove("icon-unimportant");
        icon.classList.add("icon-important");
      } else {
        icon.classList.remove("icon-important");
        icon.classList.add("icon-unimportant");
      }
      item.priority = !item.priority;
    },
    async updatePriority(item,Index) {
      try {
        await new baseApi("Task").updatePriority(item.taskId);
        item.priority = item.priority === "unimportant" ? "important" : "unimportant";
        this.ListAct.splice(Index, 1, item); 
      } catch (err) {
        console.log(err);
      }
    },
    async updateStatus(item,Index) {
      try {
        await new baseApi("Task").updateStatus(item.taskId);
        item.status = item.status === "finish" ? "unfinish" : "finish";
        this.ListAct.splice(Index, 1, item); 
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {
    "$state.toggleSidebar": function () {
      this.IstoggleSidebar = this.$state.toggleSidebar;
      console.log(this.Task);
    },
  },
};
</script>
<style scoped>
@import url(thehomecss.css);
</style>
