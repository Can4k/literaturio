<template>
  <div class="cont">
    <div class="cont__header">
      <h1>ТЕСТЫ ПО ЛИТЕРАТУРЕ</h1>
    </div>
    <div class="cont__tests">
      <test-component :testID=0 :questionID=0  @clicked="firstClicked">
        <template slot="img">
          <img src="@/assets/dostoevsky.jpg" alt="123" class="image">
        </template>
      </test-component>
      <test-component :testID=1 :questionID=0  @clicked="secondClicked">
        <template slot="img">
          <img src="@/assets/gogol.jpg" alt="123" class="image">
        </template>
      </test-component>
    </div>
    <div class="container" v-show="isFirstOpen">
      <transition name="fade">
        <div v-show="isFirstOpen" class="question__container">
            <question
                :questionID=0
                :testID=0
                @next="nextFirst"
                @close="modalClose"
            />
        </div>
      </transition>
    </div>
    <div class="container" v-show="isSecondOpen">
      <transition name="fade">
        <div v-show="isSecondOpen" class="question__container">
          <question
              :questionID=0
              :testID=1
              @next="nextFirst"
              @close="modalClose"
          />
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
      isFirstOpen: false,
      isSecondOpen: false,
      picked: 0,
      keys: {
        first: 0,
        second: 0
      }
    }
  },
  methods: {
    firstClicked() {
      if (!this.isSecondOpen){
        this.isFirstOpen = true;
      }
      window.scrollTo({top: -100, behavior: 'smooth'});
      this.$emit("close");
    },
    secondClicked() {
      if (!this.isFirstOpen) {
        this.isSecondOpen = true;
      }
      window.scrollTo({top: -100, behavior: 'smooth'});
      this.$emit("close");
    },
    nextFirst(data){
      localStorage.first += data.picked;
      if(this.keys.first === this.first_test.length - 1){

      } else{
        this.keys.first++;
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
  mounted() {
    if(localStorage.getItem("first") === null){
      localStorage.first = "";
    }
    else if(localStorage.first.length < 3){
      this.keys.first = localStorage.first.length;
    }
  }
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
@media screen and (max-width: 500px){
  .container{
    height: 300%;
  }
}
</style>