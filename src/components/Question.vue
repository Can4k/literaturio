<template>
  <div class="main">
    <div class="container">
      <p v-show="questionItem.testId === 1" class="question__info">Преступление и наказание</p>
      <p v-show="questionItem.testId === 2" class="question__info">Мертвые души</p>
      <p>{{questionItem.question}}</p>
      <div class="radio__cont">
        <vs-radio class="radio" v-model="picked" val="1">
          {{questionItem.ans1}}
        </vs-radio>
        <vs-radio class="radio" v-model="picked" val="2">
          {{questionItem.ans2}}
        </vs-radio>
        <vs-radio class="radio" v-model="picked" val="3">
          {{questionItem.ans3}}
        </vs-radio>
      </div>
    </div>
    <div class="buttons__container">
      <vs-button :active-disabled="!picked" @click="next" size="small">ОК</vs-button>
      <vs-button @click="close" size="small" color="danger">ЗАКРЫТЬ</vs-button>
    </div>
    <p class="question__info">
      {{questionItem.id}} / 20
    </p>
  </div>
</template>

<script>
export default {
  name: "question",
  props: {
    questionItem: {
      id: Number,
      question: String,
      ans1: String,
      ans2: String,
      ans3: String,
      testId: Number
    }
  },
  data(){
    return{
      picked: 0
    }
  },
  methods: {
    next(data){
      this.$emit("next", {
        picked: this.picked
      });
    },
    close(){
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
p{
  font-size: 30px;
  text-align: center;
  margin: 0;
  font-weight: 700;
}
.container{
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  font-size: 25px;
}
.radio__cont{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}
.radio{
  padding: 1px 0 1px 0;
}
.vs-button{
  font-size: 25px;
  font-family: 'Amatic SC', cursive;
}
.buttons__container{
  display: flex;
  justify-content: space-between;
  font-family: 'Amatic SC', cursive;
}
h1, h2, h3, h4, h5{
  padding: 0;
  margin: 0;
}
.question__info{
  font-size: 15px;
  color: grey;
}
@media screen and (min-width: 1000px){
  .buttons__container{
    width: 800px;
    align-items: center;
    justify-content: center;
  }
}
</style>