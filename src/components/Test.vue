<template>
  <div class="cont" @click="clicked">
    <div class="image">
      <slot name="img"/>
    </div>
    <div class="net">
      <h2>{{name}}</h2>
      <slot name="desc"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "test-component",
  props: {
    name: String,
  },
  methods: {
    clicked(){
      console.log("clicked");
      this.$emit("clicked");
    }
  }
}
</script>

<style scoped>
.cont{
  margin: 10px 25px 10px 25px;
  padding: 5px;
  background-color: #f3f3f3;
  width: 500px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transition-duration: 0.5s;
}
h2{
  margin: 0 50px 0 50px;
  text-align: center;
}
*{
  font-family: 'Amatic SC', cursive;
}
.image{
  height: 200px;
  border-radius: 20px;
}
body{
  background-color: #f3f3f3;
}
.cont:hover{
  transform: scale(1.02);
}
</style>