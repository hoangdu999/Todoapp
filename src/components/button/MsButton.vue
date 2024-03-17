<template>
    <div class="ms-button-main" :style="{marginTop : marginTop + 'px' }">
        <button v-if="type == 'primary'"  class="ms-button-primary"  @click="onClick">
            <slot/>
        </button>
        <button v-else-if="type == 'primary2'" class="ms-button-primary2" @click="onClick">
            <slot/>
        </button>
        <button v-else class="ms-button" :style="{backgroundColor : backgroundColor , color : color, border : `1px solid ${colorBorder}`,height: HeightButton  }" @click="onClick">
            <slot/>
        </button>
    </div>
</template>
<script>
export default {
  name: "MsButton",
  props:{
    backgroundColor : String,
    colorBorder : String,
    color : String,
    class : String,
    marginTop: Number,
    type : {
        type : String,
        default : ''
    },
    HeightButton: String,
  },
  methods:{
    onClick(e){
        this.$emit("click",e);
    }
  }
};
</script>
<style scoped>
.ms-button{
    width: 100%;
    color: white;
    height: 32px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
