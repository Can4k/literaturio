<template>
  <div class="menu__button" @click="$emit('clicked')">
    <strong><slot></slot></strong>
  </div>
</template>

<script>
export default {
  name: "main-button"
}
</script>

<style scoped>
.menu__button {
  background-color: white;
  font-size: 13px;
  padding: 6px 6px 5px 6px;
  border-radius: 5px;
  user-select: none;
  transition-duration: .2s;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}
.menu__button strong{
  color: #001341;
}
.menu__button:hover{
  transform: translate(0, -2px);
  box-shadow: 0 2px 5px #cdcdcd;
}
</style>