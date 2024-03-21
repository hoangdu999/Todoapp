<template>
  <div>
    <the-form>Đăng Ký
      <template #title>Đăng Ký</template>
      <template #text>Bạn đã có tài khoản?<a href="/login" class="sp-login"><span>Đăng Nhập</span></a>
      </template>
    </the-form>
  </div>
</template>

<script>
import TheForm from '../../components/form-register-login/TheForm.vue';
export default {
  components: { TheForm },
  name: 'TheRegister',
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style scoped>
.sp-login{
  color: var(--brg-form);
}
.sp-login span:hover{
  color: var(--bgr-header);
}
</style>