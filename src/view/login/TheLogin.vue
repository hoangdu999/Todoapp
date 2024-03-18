<template>
  <div>
    <the-form :title="'Đăng Nhập'">Đăng Nhập
      <template #text>Bạn mới biết đến TodoApp? <span>Đăng ký</span>
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