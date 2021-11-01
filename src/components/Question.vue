<template>
  <div class="main">
    <div class="container">
      <p class="question__info">{{$store.state.testNamesList[testID]}}</p>
      <p>{{questionItem.questionText}}</p>
      <div class="radio__cont">
        <vs-radio class="radio" v-model="picked" val="1">
          {{questionItem.answer1}}
        </vs-radio>
        <vs-radio class="radio" v-model="picked" val="2">
          {{questionItem.answer2}}
        </vs-radio>
        <vs-radio class="radio" v-model="picked" val="3">
          {{questionItem.answer3}}
        </vs-radio>
      </div>
    </div>
    <div class="buttons__container">
      <vs-button :active-disabled="!picked" @click="next" size="small">ОК</vs-button>
      <vs-button @click="close" size="small" color="danger">ЗАКРЫТЬ</vs-button>
    </div>
    <p class="question__info">
      {{questionID + 1}} / 20
    </p>
  </div>
</template>

<script>
export default {
  name: "question",
  props: {
    testID: Number,
    questionID: Number
  },
  data(){
    return{
      picked: 0,
      questionItem: {
        questionText: "",
        answer1: "",
        answer2: "",
        answer3: ""
      }
    }
  },
  methods: {
    next(data){
      this.$emit("next", {
        picked: this.picked
      });
    },
    close(){
      this.$emit("close", {
        testID: this.testID
      });
    }
  },
  mounted() {
    this.questionItem = this.$store.state.testList[this.testID][this.questionID];
  }
}
</script>

<style scoped>
p{
  font-size: 25px;
  text-align: center;
  margin: 0;
  font-weight: 700;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}
.container{
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  font-size: 25px;
}
.radio__cont{
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  font-size: 20px;
}
.radio{
  padding: 1px 0 1px 0;
}
.vs-button{
  font-size: 15px;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}
.buttons__container{
  display: flex;
  justify-content: space-between;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}
h1, h2, h3, h4, h5{
  padding: 0;
  margin: 0;
}
.question__info{
  font-size: 10px;
  color: grey;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}
@media screen and (min-width: 1000px){
  .buttons__container{
    width: 800px;
    align-items: center;
    justify-content: center;
  }
}
</style>