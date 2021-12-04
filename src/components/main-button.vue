<template>
  <span class="menu__button" :style="ButtonStyle" @click="$emit('clicked')">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "main-button",
  props: {
    bcg: String,
    clr: String
  },
  data(){
    return {
      ButtonStyle: {
        backgroundColor: "",
        color: "",
      }
    }
  },
  mounted() {
    this.ButtonStyle.backgroundColor = this.bcg;
    this.ButtonStyle.color = this.clr;
  }
}
</script>

<style scoped>
.menu__button {
  background-color: white;
  font-weight: 1000;
  padding: 6px;
  border-radius: 5px;
  user-select: none;
  transition-duration: .2s;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  display: block;
  cursor: pointer;
}
.menu__button strong{
  color: #476479;
}
.menu__button:hover{
  transform: translate(0, -2px);
}
</style>