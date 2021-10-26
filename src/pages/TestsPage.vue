<template>
  <div class="cont">
    <div class="cont__header">
      <h1>ТЕСТЫ ПО ЛИТЕРАТУРЕ</h1>
    </div>
    <div class="cont__tests">
      <test-component :sueta="keys.first" :isActive="true" name="Преступление и наказание" @clicked="firstClicked">
        <template slot="img">
          <img src="@/assets/dostoevsky.jpg" alt="123" class="image">
        </template>
      </test-component>
      <test-component :isActive="false" name="Мертвые души" @clicked="secondClicked">
        <template slot="img">
          <img src="@/assets/gogol.jpg" alt="123" class="image">
        </template>
      </test-component>
    </div>
    <div class="container" v-show="isFirstOpen">
      <transition name="fade">
        <div v-show="isFirstOpen" class="first__test">
            <question
                :key="first_test[keys.first].id"
                :questionItem="first_test[keys.first]"
                @next="nextFirst"
                @close="isFirstOpen = false"
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
      },
      first_test: [
        {
          id: 1,
          question: "Как зовут сестру Раскольникова?",
          ans1: "Софья",
          ans2: "Катирина",
          ans3: "Авдотья",
          testId: 1
        },
        {
          id: 2,
          question: "Сколько лет матери Раскольникова в начала романа?",
          ans1: "43",
          ans2: "45",
          ans3: "53",
          testId: 1
        },
        {
          id: 3,
          question: "Кто становится жертвой Раскольникова помимо самой старухи-процентщицы?",
          ans1: "Дочь старухи",
          ans2: "Сестра старухи",
          ans3: "Племяница старухи",
          testId: 1
        },
      ]
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
.cont h1 {
  text-align: center;
  margin: 0;
}

.cont__header {
  background-color: #f3f3f3;
  padding: 100px 10px 100px 10px;
  font-size: 30px;
  box-shadow: 0 0 1px black;
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
* {
  font-family: 'Amatic SC', cursive;
}

.first__test {
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

@media screen and (min-width: 1000px) {
  .first__test{
    width: 800px;
  }
}
@media screen and (max-width: 500px){
  .container{
    height: 300%;
  }
}
</style>