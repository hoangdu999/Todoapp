<template>
    <div class="ms-button-main" :style="{marginTop : marginTop + 'px' }">
        <button v-if="type == 'primary'"  class="ms-button-primary"  @click="onClick">
            <slot/>
        </button>
        <button v-else-if="type == 'primary2'" class="ms-button-primary2" @click="onClick">
            <slot/>
        </button>
        <button v-else class="ms-button" :style="{backgroundColor : backgroundColor , color : color, border : `1px solid ${colorBorder}`,height: HeightButton  }" @click="onClick"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave">
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
    },
    onMouseOver() {
        // Thực hiện các hành động khi hover vào button
        console.log("Mouse over");
    },
    onMouseLeave() {
        // Thực hiện các hành động khi rời chuột khỏi button
        console.log("Mouse leave");
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
   /* background: radial-gradient(black, transparent);*/
}
</style>
