<template>
  <div class="main">
    <div class="container">
      <p class="question__info">{{ $store.state.testNamesList[testID] }}</p>
      <p>{{ $store.state.testList[this.testID][this.$store.state.testKeys[this.testID]].questionText }}</p>
      <div class="radio__cont">
        <vs-radio class="radio" v-model="picked" val="1">
          <b>{{ $store.state.testList[this.testID][this.$store.state.testKeys[this.testID]].answer1 }}</b>
        </vs-radio>
        <vs-radio class="radio" v-model="picked" val="2">
          <b>{{ $store.state.testList[this.testID][this.$store.state.testKeys[this.testID]].answer2 }}</b>
        </vs-radio>
        <vs-radio class="radio" v-model="picked" val="3">
          <b>{{ $store.state.testList[this.testID][this.$store.state.testKeys[this.testID]].answer3 }}</b>
        </vs-radio>
      </div>
    </div>
    <div class="buttons__container">
      <main-button @clicked="next" clr="green" bcg="white">продолжить</main-button>
      <main-button @clicked="close" clr="red" bcg="white">закрыть</main-button>
    </div>
    <p class="question__info">
      {{ $store.state.testKeys[testID] + 1 }} / 20
    </p>
  </div>
</template>

<script>
import MainButton from "@/components/main-button";

export default {
  name: "question",
  components: {MainButton},
  props: {
    testID: Number,
  },
  data() {
    return {
      picked: 0,
      key: 0,
    }
  },
  methods: {
    next(data) {
      console.log(123);
      this.$emit("next", {
        picked: this.picked,
        testID: this.testID,
      });
      this.picked = 0;
    },
    close() {
      this.$emit("close", {
        testID: this.testID
      });
    }
  },
}
</script>

<style scoped>
p {
  font-size: 25px;
  text-align: center;
  margin: 0;
  font-weight: 700;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  font-size: 25px;
}

.radio__cont {
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  font-size: 20px;
}

.radio {
  padding: 1px 0 1px 0;
}

.buttons__container {
  margin: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}

h1, h2, h3, h4, h5 {
  padding: 0;
  margin: 0;
}

.question__info {
  font-size: 10px;
  color: grey;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  text-align: center;
}

@media screen and (min-width: 1000px) {
  .buttons__container {
    align-items: center;
    justify-content: center;
  }
  .radio__cont{
    width: 400px;
  }
}

@media screen and (min-width: 540px) and (max-width: 1000px) {
  .buttons__container {
    align-items: center;
    justify-content: center;
  }
  .radio__cont{
    width: 500px;
  }
  p{
    font-size: 20px;
  }
  b{
    font-size: 15px;
  }
}
@media screen and (max-width: 540px){
  .buttons__container {
    align-items: center;
    justify-content: center;
  }
  p{
    font-size: 17px;
  }
  b{
    font-size: 12px;
  }
}
</style>