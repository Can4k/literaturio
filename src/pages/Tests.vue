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
    <transition name="fade">
      <div v-show="isFirstOpen" class="first__test">
        <h1>В РАЗРАБОТКЕ</h1>
        <button @click="isFirstOpen=false" style="width: 50px">ЗАКРЫТЬ</button>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="isSecondOpen" class="first__test">
        <h1>В РАЗРАБОТКЕ</h1>
        <button @click="isSecondOpen=false" style="width: 50px">ЗАКРЫТЬ</button>
      </div>
    </transition>
  </div>
</template>

<script>
import TestComponent from "@/components/Test";

export default {
  name: "Tests",
  components: {
    TestComponent
  },
  data() {
    return {
      isFirstOpen: false,
      isSecondOpen: false
    }
  },
  methods: {
    firstClicked() {
      console.log("First");
      if(!this.isSecondOpen) this.isFirstOpen = true;
    },
    secondClicked() {
      console.log("Second");
      if(!this.isFirstOpen) this.isSecondOpen = true;
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

* {
  font-family: 'Amatic SC', cursive;
}

.first__test {
  top: 77px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 400px;
  height: 300px;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  align-items: center;
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