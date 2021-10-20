<template>
  <div class="app">
    <div class="header">
      <a href="/#/"><h2>ЛИТЕРАТУРИО</h2></a>
      <span class="btn-cont">
         <img class="ico" src="@/assets/menuico.png" @click="isMenuOpen=!isMenuOpen" alt="123">
      </span>
    </div>
    <transition name="fade">
      <div v-show="isMenuOpen" class="menu">
        <div class="menu-cont">
          <a href="/#/tests" @click="isMenuOpen=!isMenuOpen"><strong>ПРОХОДИТЬ ТЕСТЫ</strong></a>
          <a href="/#/books" @click="isMenuOpen=!isMenuOpen"><strong>ЧИТАТЬ КНИГИ</strong></a>
        </div>
      </div>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'guide',
      isMenuOpen: false,
    }
  },
}
</script>

<style scoped>
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
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 1);
  }
}

h2 {
  margin: 0 20px 0 20px;
  padding: 0;
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
}

.header {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 20px;
  background-color: cornflowerblue;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-shadow: 0 0 3px black;
}


h1 {
  text-align: center;
  margin: 10px 0 10px 0;
}

p {
  text-align: center;
}

.menu {
  z-index: 1;
  position: absolute;
  background-color: darkgreen;
  width: 100%;
}

.menu-cont {
  font-size: 25px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-cont strong {
  margin: 0 10px 0 10px;
}

.ico{
  width: 32px;
}

@media screen and (max-width: 580px) {
  h2 {
    margin: 0;
  }

  .btn-cont {
    display: revert;
  }
  .menu-cont strong {
    color: white;
    text-shadow: 0 0 2px black;
    text-align: center;
  }

  .header {
    justify-content: space-between;
  }
}

@media screen and (max-width: 390px) {
  h2 {
    font-size: 20px;
  }

  i {
    font-size: 10px;
  }
}
a {
  color: white;
  text-shadow: 0 0 3px black;
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
}

*{
  font-family: 'Amatic SC', cursive;
}
</style>