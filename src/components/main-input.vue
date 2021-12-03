<template>
  <div class="container">
    <input :value="val" @input="updateInput" type="text">
  </div>
</template>

<script>
export default {
name: "main-input",
  props: {
    value: String
  },
  data() {
    return{
      val: ""
    }
  },
  methods: {
    updateInput() {
      this.$emit('input', this.val);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
input{
  border-radius: 2px;
  border: 1px solid black;
  padding: 5px;
}
</style>