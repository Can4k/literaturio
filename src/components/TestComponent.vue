<template>
  <div class="cont">
    <div class="image">
      <slot name="img"/>
    </div>
    <div class="form">
      <h2>{{name}}</h2>
      <slot name="desc"/>
      <vs-button
          style="font-family: 'Times New Roman', serif; padding: 1px 40px 0 40px; z-index: 0"
          v-show="true" :active-disabled="!isActive"
          border
          flat
          :block="false"
          @click="clicked"
      >Открыть</vs-button>
      <h5 v-show="sueta > 0">{{sueta}} / 20</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "test-component",
  props: {
    name: String,
    isActive: Boolean,
    sueta: Number
  },
  methods: {
    clicked(){
      console.log("clicked");
      this.$emit("clicked");
    }
  },
}
</script>

<style scoped>
.cont{
  margin: 10px 25px 10px 25px;
  padding: 5px;
  background-color: #ffdb95;
  width: 500px;
  border-radius: 10px;

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
}
body{
  background-color: #f3f3f3;
}
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
}
h5{
  margin: 4px;
  color: darkgreen;
}
</style>