<template>
  <div class="app">
    <vs-dialog blur prevent-close not-close v-model="isNewUser">
      <div class="dialog__header">
        <h2>Привет! Впервые на нашем сайте? Как тебя зовут?</h2>
      </div>
      <div class="form">
        <vs-input style='font-family:"Times New Roman", serif' state="success" v-model="$store.state.username"></vs-input>
        <vs-button style="font-family: 'Cambria', serif" @click="login">
          Запомнить
        </vs-button>
      </div>
    </vs-dialog>
    <div class="app__header">
      <a href="/#/"><h2 @click="isMenuOpen=false; menuNewStyle.transform = 'rotate(0deg)'">LITERATURIO</h2></a>
      <span class="buttons__container">
         <img :style="menuNewStyle" class="menu__icon" src="@/assets/menuico.png" @click="clicked" alt="Open menu">
      </span>
    </div>
    <transition name="fade">
      <div v-show="isMenuOpen" class="menu">
        <div class="menu__container">
          <a href="/#/tests" @click="clicked"><strong>ПРОХОДИТЬ ТЕСТЫ</strong></a>
          <a href="/#/books" @click="clicked"><strong>ЧИТАТЬ КНИГИ</strong></a>
        </div>
      </div>
    </transition>
    <router-view @close="isMenuOpen=false"/>
    <div class="studio__cont">
      <img class="studio__logo" src="@/assets/telegramm.png" alt="123">
      <p>Yakovleff Studio</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isNewUser: localStorage.getItem("username") === null,
      menuNewStyle: {
        transform: ""
      }
    }
  },
  methods: {
    login() {
      if(this.$store.state.username === ""){
        alert("Имя не может быть пустым!")
      }
      else{
        this.isNewUser = false;
        localStorage.username = this.$store.state.username;
      }
    },
    clicked() {
      this.isMenuOpen = !this.isMenuOpen;
      if(this.isMenuOpen){
        this.menuNewStyle.transform = "rotate(90deg)";
      } else{
        this.menuNewStyle.transform = "rotate(0deg)";
      }
    }
  },
  mounted() {
    if (localStorage.getItem("username") === "") this.isNewUser = true;
    else this.username = localStorage.getItem('username');
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
  margin: 0 20px 0 20px;
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

.studio__cont{
  width: 150px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Nunito Sans, sans-serif;
  font-weight: 1000;
  font-size: 12px;
  color: grey;
  margin-top: 300px;
}

.studio__logo{
  width: 30px;
  margin-right: 10px;
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
  transition-duration: 0.7s;
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
@media screen and (max-width: 1110px) {
  .studio__cont{
    margin-top: 10px;
  }
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>