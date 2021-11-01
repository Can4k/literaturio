<template>
  <div class="test__container">
    <div class="image">
      <slot name="img"/>
    </div>
    <div class="form__container">
      <h2>{{$store.state.testNamesList[testID]}}</h2>
      <slot name="desc"/>
      <main-button
          border
          flat
          v-show="true"
          :block="false"
          @clicked="clicked"
      >Открыть</main-button>
      <h5 v-show="questionID > 0">{{questionID + 1}} / 20</h5>
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/main-button";
export default {
  name: "test-component",
  components: {MainButton},
  props: {
    testID: Number,
    questionID: Number
  },
  methods: {
    clicked(){
      /*console.log("clicked");*/
      this.$emit("clicked");
    }
  },
}
</script>

<style scoped>
.test__container{
  margin: 10px 25px 10px 25px;
  padding: 5px;
  background: linear-gradient(to right, #fafaa3 28% , #476479 28%);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  transition-duration: 0.5s;
  border: 1px solid #001341;
}
.image{
  height: 200px;
}
body{
  background-color: #f3f3f3;
}
.form__container{
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
}
.form__container h2{
  text-align: center;
}
h5{
  margin: 4px;
  color: darkgreen;
}
@media screen and (max-width: 526px){
  .test__container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: revert;
    background: #001341;
  }
  .form__container{
    width: 150px;
  }
}
</style>