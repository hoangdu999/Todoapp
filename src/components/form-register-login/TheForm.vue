<template>
  <div class="form">
    <div class="form-body">
      <!-- <div class="form-le">
        <img src="../../assets/img/form/form.png" alt="">
      </div> -->
      <div class="form-main">
        <div  class="form-title">
          <slot name="title"></slot>
        </div>
        <ms-input
          :marginTopInput="18"
          :height="40"
          :fontSizeTile="24"
          placeholder="Số điện thoại"
        ></ms-input>
        <ms-input
        :height="40"
        :fontSizeTile="24"
        placeholder="Mật Khẩu"
      ></ms-input>
        <ms-button backgroundColor="#353480" :marginTop="32" height="40px" width="100%"><slot/>
        </ms-button>
        <div class="form-hr mt-32">
          <hr />
          <div class="text-hr">HOẶC</div>
        </div>
        <div class="form-online grid-2-12 mt-32">
          <ms-button  HeightButton="40px" backgroundColor="#fff" colorBorder="#525050" color="black"
            >Facebook</ms-button
          >
          <ms-button HeightButton="40px" backgroundColor="#fff" colorBorder="#525050" color="black"
            >Google</ms-button
          >
        </div>
        <div class="cs mt-8 text-center mt-16">
          <span>Bằng việc đăng kí, bạn đã đồng ý với ToDoApp về</span>
          <br />
          <span class="text-cs">Điều khoản dịch vụ</span> &
          <span class="text-cs">Chính sách bảo mật</span>
        </div>
        <div class="text-login text-center mt-32 mb-12">
          <slot name="text" ></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MsButton from "../../components/button/MsButton.vue";
import MsInput from "../../components/input/Input.vue";
export default {
  name: "Theform",
  components: {
    MsInput,
    MsButton,
  },
  props: ['title'],
  // created(){
  //   this.$state.typeHeader = 'form';
  // },
  methods: {},
  // beforeRouteLeave (to, from, next) {
  //   this.$state.typeHeader = 'primary';
  //   next();
  // }
};
</script>
<style scoped>
.form {
  background: var(--brg-form);
  height: 800px;
  height: 600px;
}
.form-hr {
  position: relative;
}
.form-hr hr {
}
.text-hr {
  position: absolute;
  left: 50%;
  border-radius: 4px;
  padding: 4px 8px;
  top: 50%;
  font-size: 12px;
  background: white;
  transform: translate(-50%, -50%);
}
.text-cs {
  color: rgb(213, 213, 239);
  font-size: 12px;
}
.form-body{
    margin: auto;
    width: 1040px;
}
.form-main {
  position: absolute;
  width: 400px;
  border-radius: 8px;
  background-color: white;
  left: 58%;
  top: 57%;
  transform: translateY(-50%);
  padding: 22px 30px;
}
.text-login {
  text-align: center;
}
.form-title{
  font-size: 180%;
  margin-bottom: 20px;
}

</style>
