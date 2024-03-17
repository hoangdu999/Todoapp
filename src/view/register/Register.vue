<template>
  <div class="register">
    <div class="register-body">
      <div class="register-le">
        <img src="../../assets/img/register/register.png" alt="">
      </div>
      <div class="register-main">
        <ms-input
          :marginTopInput="18"
          :height="40"
          :fontSizeTile="24"
          title="Đăng ký"
          placeholder="Số điện thoại"
        ></ms-input>
        <ms-button backgroundColor="#353480" :marginTop="32" HeightButton="40px" >TIẾP THEO</ms-button>
        <div class="register-hr mt-32">
          <hr />
          <div class="text-hr">HOẶC</div>
        </div>
        <div class="register-online grid-2-12 mt-32">
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
          Bạn đã có tài khoản? <span>Đăng nhập</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MsButton from "../../components/button/MsButton.vue";
import MsInput from "../../components/input/Input.vue";
export default {
  name: "Register",
  components: {
    MsInput,
    MsButton,
  },
  created(){
    this.$state.typeHeader = 'register';
  },
  methods: {},
  beforeRouteLeave (to, from, next) {
    this.$state.typeHeader = 'primary';
    next();
  }
};
</script>
<style>
.register {
  background: rgb(213, 213, 239);
  height: 800px;
  height: 600px;
}
.register-hr {
  position: relative;
}
.register-hr hr {
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
.register-body{
    margin: auto;
    width: 1040px;
}
.register-main {
  position: absolute;
  width: 400px;
  border-radius: 8px;
  background-color: white;
  left: 58%;
  top: 50%;
  transform: translateY(-50%);
  padding: 22px 30px;
}
.text-login {
  text-align: center;
}
</style>
