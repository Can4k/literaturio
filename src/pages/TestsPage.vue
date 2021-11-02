<template>
  <div class="cont">
    <div class="cont__header">
      <h1>Тесты по литературе</h1>
    </div>
    <div class="cont__tests">
      <test-component :testID=0 :questionID=$store.state.testKeys.firstKey  @clicked="openTest(0)">
        <template slot="img">
          <img src="@/assets/dostoevsky.jpg" alt="123" class="image">
        </template>
      </test-component>
      <test-component :testID=0 :questionID=$store.state.testKeys.secondKey  @clicked="openTest(1)">
        <template slot="img">
          <img src="@/assets/gogol.jpg" alt="123" class="image">
        </template>
      </test-component>
    </div>
    <div class="container" v-show="isTestOpen === true">
      <transition name="fade">
        <div v-show="isTestOpen === true" class="question__container">
            <question @next="nextTest" @close="isTestOpen=false" :testID="currentTestID"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TestComponent from "@/components/TestComponent";
import Testing from "@/components/Question";
import Question from "@/components/Question";

export default {
  name: "TestsPage",
  components: {
    Question,
    Testing,
    TestComponent
  },
  data() {
    return {
      isTestOpen: false,
      picked: 0,
      currentTestID: 0
    }
  },
  methods: {
    openTest(testID){
      this.currentTestID = testID;
      this.isTestOpen = true;
      window.scrollTo({top: -100, behavior: 'smooth'});
    },
    nextTest(data){
      console.log(data);
      if(data.testID === 0){
        localStorage.first += data.picked;
        this.$store.state.testKeys[data.testID]++;
      }
    },
    modalClose(data){
      console.log(data);
      if(data.testID === 0){
        this.isFirstOpen = false;
      }
      if(data.testID === 1){
        this.isSecondOpen = false;
      }
    }
  },
}
</script>

<style scoped>
.cont__header h1 {
  text-align: center;
  margin: 0;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  font-size: 30px;
}

.cont__header {
  background-color: #f3f3f3;
  padding: 50px 10px 50px 10px;
  font-size: 30px;
  box-shadow: 0 0 1px black;
  margin-bottom: 1px;
}

.cont__tests {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

p{
  font-size: 20px;
  text-align: center;
  margin: 0;
  font-weight: 700;
}
p::first-letter{
  font-weight: 1000;
  font-size: 25px;
}

.question__container {
  padding: 10px;
  top: 200px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 30px;
}

.container{
  background-color: rgba(1, 1, 1, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.fade-enter-active {
  transition: opacity .5s;
  animation: move .5s;
  transform-origin: top;
}

.fade-leave-active {
  transition: opacity .5s;
  animation: move .5s reverse;
  transform-origin: top;
}

.fade-enter, .fade-leave-to {
  opacity: 1;
}

@keyframes move {
  0% {
    transform: scale(1, 0) translate(-50%);
  }
  100% {
    transform: scale(1, 1) translate(-50%);
  }
}
@media screen and (max-width: 530px){
  .container{
    height: 200%;
  }
  .cont__header{
    padding: 30px 0 30px 0;
  }
  .cont__header h1{
    font-size: 25px;
  }
}
</style>