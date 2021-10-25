<template>
  <div class="cont">
    <div class="cont__header">
      <h1>ТЕСТЫ ПО ЛИТЕРАТУРЕ</h1>
    </div>
    <div class="cont__tests">
      <test-component name="Преступление и наказание" @clicked="firstClicked">
        <template slot="img">
          <img src="@/assets/dostoevsky.jpg" alt="123" class="image">
        </template>
      </test-component>
      <test-component name="Мертвые души" @clicked="secondClicked">
        <template slot="img">
          <img src="@/assets/gogol.jpg" alt="123" class="image">
        </template>
      </test-component>
    </div>
    <div class="container" v-show="isFirstOpen">
      <transition name="fade">
        <div v-show="isFirstOpen" class="first__test">
            <testing
                :key="items[key].id"
                :item="items[key]"
                @next="next"
                @close="isFirstOpen = false"
            />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TestComponent from "@/components/Test";
import Testing from "@/components/Testing";

export default {
  name: "Tests",
  components: {
    Testing,
    TestComponent
  },
  data() {
    return {
      isFirstOpen: false,
      isSecondOpen: false,
      picked: 0,
      key: 0,
      items: [
        {
          id: 1,
          question: "Как зовут сестру Раскольникова?",
          ans1: "Софья",
          ans2: "Катирина",
          ans3: "Авдотья",
        },
        {
          id: 2,
          question: "Сколько лет матери Раскольникова в начала романа?",
          ans1: "43",
          ans2: "45",
          ans3: "53",
        },
        {
          id: 3,
          question: "Кто становится жертвой Раскольникова помимо самой старухи-процентщицы?",
          ans1: "Дочь старухи",
          ans2: "Сестра старухи",
          ans3: "Племяница старухи",
        },
      ]
    }
  },
  methods: {
    firstClicked() {
      console.log("First");
      if (!this.isSecondOpen) this.isFirstOpen = true;
      window.scrollTo({top: -100, behavior: 'smooth'});
      this.$emit("close");
    },
    secondClicked() {
      console.log("Second");
      if (!this.isFirstOpen) this.isSecondOpen = true;
      window.scrollTo({top: -100, behavior: 'smooth'});
      this.$emit("close");
    },
    next(){
      console.log(this.key);
      if(this.key === this.items.length - 1){
        this.isFirstOpen = false;
        this.key=0;
      } else{
        this.key++;
      }
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
.slot__cont{
  display: flex;
  padding: 10px;
  flex-direction: column;
}
.radio__cont{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}
.radio{
  padding: 2px 0 2px 0;
}
* {
  font-family: 'Amatic SC', cursive;
}

.first__test {
  padding: 10px;
  top: 77px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
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
</style>