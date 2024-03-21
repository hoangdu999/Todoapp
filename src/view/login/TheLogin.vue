<template>
  <div>
    <the-form>Đăng Nhập
      <template #title>Đăng Nhập</template>
      <template #text>Bạn mới biết đến TodoApp? <a href="/register" class="sp-register"><span>Đăng ký</span></a>
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
.sp-register span{
  color: var(--brg-form);
}
.sp-register span:hover{
  color: var(--bgr-header);
}
</style>