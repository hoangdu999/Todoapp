<template>
  <div>
    <the-form :title="'Đăng Ký'">Đăng Ký
      <template #text>Bạn đã có tài khoản? <span>Đăng nhập</span>
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
span{
  color: var(--brg-form);
}
</style>