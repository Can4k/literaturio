<template>
  <div class="app">
    <vs-dialog blur prevent-close not-close v-model="isNewUser">
      <div class="dialog__header">
        <h2>Привет! Впервые на нашем сайте? Как тебя зовут?</h2>
      </div>
      <div class="form">
        <vs-input style='font-family:"Times New Roman", serif' state="success" v-model="username"></vs-input>
        <vs-button style="font-family: 'Cambria', serif" @click="login">
          Запомнить
        </vs-button>
      </div>
    </vs-dialog>
    <div class="app__header">
      <a href="/#/"><h2 @click="isMenuOpen=false">LITERATURIO</h2></a>
      <span class="buttons__container">
         <img class="menu__icon" src="@/assets/menuico.png" @click="isMenuOpen=!isMenuOpen" alt="Open menu">
      </span>
    </div>
    <transition name="fade">
      <div v-show="isMenuOpen" class="menu">
        <div class="menu__container">
          <a href="/#/tests" @click="isMenuOpen=!isMenuOpen"><strong>ПРОХОДИТЬ ТЕСТЫ</strong></a>
          <a href="/#/books" @click="isMenuOpen=!isMenuOpen"><strong>ЧИТАТЬ КНИГИ</strong></a>
        </div>
      </div>
    </transition>
    <router-view @close="isMenuOpen=false"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isNewUser: localStorage.getItem("name") === null,
      username: ""
    }
  },
  methods: {
    login() {
      localStorage.name = this.username;
      this.isNewUser = false;
    }
  },
  mounted() {
    if (localStorage.getItem("name") === "") {
      this.isNewUser = true;
    }
  }
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

.form {
  display: flex;
  justify-content: center;
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
  margin: 0 20px 0px 20px;
  padding: 0;
  font-family: 'Amatic SC', cursive;
  font-size: 40px;
  text-align: center;
}

.app__header {
  padding: 20px;
  background-color: cornflowerblue;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
  font-family: 'Amatic SC', cursive;
}

.menu__container {
  font-size: 25px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu__container strong {
  margin: 0 10px 0 10px;
}

.menu__icon {
  width: 32px;
}

@media screen and (max-width: 580px) {
  h2 {
    margin: 0;
  }

  .buttons__container {
    display: revert;
  }

  .menu__container strong {
    color: white;
    text-shadow: 0 0 2px black;
    text-align: center;
  }

  .app__header {
    justify-content: space-between;
  }
}

a {
  color: white;
  text-shadow: 0 0 3px black;
}

@media screen and (max-width: 390px) {
  h2 {
    font-size: 30px;
  }
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>