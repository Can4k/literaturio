<template>
  <div class="test__container">
    <div class="form__container">
      <slot name="img"/>
      <div class="suka">
        <h2>{{$store.state.testNamesList[testID]}}</h2>
        <slot name="desc"/>
        <main-button
            style="margin-top: 10px"
            class="test__button"
            v-show="true"
            @clicked="clicked"
        ><p>Открыть</p></main-button>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/main-button";
export default {
  name: "test-component",
  components: {
    MainButton
  },
  props: {
    testID: Number,
    questionID: Number
  },
  methods: {
    clicked(){
      this.$emit("clicked");
    }
  },
}
</script>

<style scoped>
.test__container{
  margin: 10px 25px 10px 25px;
  background: #5e8bff;
  color: white;
  border-radius: 10px;
  flex-wrap: wrap;
  transition-duration: 0.5s;
  border: 1px solid #ffffff;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
p{
  margin: 0;
  padding: 0;
  color: #5e8bff;
}
.suka{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px 10px 5px 10px;
}
.image{
  height: 200px;
}
.test__button{
  font-size: 12px;
}
body{
  background-color: #f3f3f3;
}
.form__container{
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  display: flex;
  justify-content: center;
}
.form__container h2{
  text-align: center;
  margin: 0;
}
.form__container h5{
  color: #98ff00;
  margin: 0;
}
@media screen and (max-width: 555px){
  .test__container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: revert;
    background: #5e8bff;
    font-size: 13px;
  }
  .suka{
    flex-direction: column;
  }
}
</style>