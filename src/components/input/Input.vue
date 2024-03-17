<template>
    <div class="ms-input-main">
        <label v-if="!noTitle" :for="name" class="lable-input" :style="{fontSize : fontSizeTile + 'px'}" >{{title}} <span class="required">{{required ? "*" : "" }}</span></label><br />
        <input 
            :type="type"
            :name="name"
            :tabindex="tabIndex"
            :placeholder="placeholder"
            :value="modelValue"
            @click="onClick"
            @blur="onBlur"
            class="ms-input"
            :style="{
                width : width+ 'px',
                height : height + 'px',
                marginTop : marginTopInput + 'px',
            }"
        >
    </div>
</template>
<script>
export default {
  name: "MsInput",
  props:{
    noTitle :Boolean,
    title : String,
    tabIndex: Number,
    name : String,
    type: {
        type : String,
        default : "text"
    },
    placeholder: String,
    modelValue: String,
    required: Boolean,
    height : Number,
    width : Number,
    marginTopInput : Number,
    fontSizeTile : Number,
  },
  methods:{
    onClick(e){
        this.$emit("click",e);
    },
    onBlur(e){
        this.$emit("blur",e);
    }
  }
};
</script>
<style scoped>
.ms-input-main{
    width: 100%;
}
.lable-input{
    font-weight: bold;
}
.required{
    color: red;
}
.ms-input{
    height: 28px;
    width: 100% !important;
    outline: none;
    border:1px solid #b1aeae;
    margin-top: 4px;
    padding-left: 8px;
}
.ms-input:focus{
    border:1px solid #525050;
}
</style>
