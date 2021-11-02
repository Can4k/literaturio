<template>
  <div class="app">
    <vs-dialog blur prevent-close not-close v-model="isNewUser">
      <div class="dialog__header">
        <h2>Привет! Впервые на нашем сайте? Как тебя зовут?</h2>
      </div>
      <div class="form">
        <vs-input style='font-family:"Times New Roman", serif' state="success"
                  v-model="$store.state.username"></vs-input>
        <vs-button style="font-family: 'Cambria', serif" @click="login">
          Запомнить
        </vs-button>
      </div>
    </vs-dialog>
    <div class="app__header">
      <h2 @click="toSite('')">LITERATURIO</h2>
      <span class="buttons__container">
         <img :style="menuNewStyle" class="menu__icon" src="@/assets/menuico.png" @click="menuController"
              alt="Open menu">
      </span>
    </div>
    <transition name="fade">
      <div v-show="isMenuOpen" class="menu__buttons__container">
        <div class="menu__container">
          <main-button @clicked="toSite('tests')" class="btn">ПРОХОДИТЬ ТЕСТЫ</main-button>
          <main-button @clicked="toSite('books')" class="btn">ЧИТАТЬ КНИГИ</main-button>
        </div>
      </div>
    </transition>
    <router-view @close="isMenuOpen=false"/>
  </div>
</template>

<script>
import MainButton from "@/components/main-button";
export default {
  components: {MainButton},
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
      if (this.$store.state.username === "") {
        alert("Имя не может быть пустым!")
      } else {
        this.isNewUser = false;
        localStorage.username = this.$store.state.username;
      }
    },
    menuController() {
      this.isMenuOpen = !this.isMenuOpen;
      if(this.isMenuOpen){
        this.menuNewStyle.transform = "rotate(90deg)";
      } else{
        this.menuNewStyle.transform = "rotate(0deg)";
      }
    },
    toSite(name) {
      if(this.isMenuOpen){
        this.menuController();
      }
      document.location.href = '/#/' + name;
    }
  },
  mounted() {
    if (localStorage.getItem("username") === "") this.isNewUser = true;
    else this.username = localStorage.getItem('username');
    if(localStorage.getItem('first')){
      this.$store.state.testKeys.firstKey = localStorage.first.length;
    } else{
      localStorage.first = "";
      this.$store.state.testKeys.firstKey = 0;
    }
    /*this.$store.state.testKeys.secondKey = localStorage.second.length;*/
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
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  margin: 25px 0 25px 15px;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  transition-duration: 0.2s;
  user-select: none;
}
h2:hover {
  transform: translate(0, -5px);
}
.app__header {
  background-color: #5e8bff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px 0 10px;
}
.menu__buttons__container {
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
  z-index: 1;
  position: absolute;
  background-color: #476479;
  width: 100%;
}
.menu__container {
  font-size: 25px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn  {
  margin-left: 5px;
  margin-right: 5px;
}
.menu__icon {
  width: 32px;
  transition-duration: 0.7s;
}

@media screen and (max-width: 580px) {
  h2 {
    margin: 20px 15px 20px 15px;
  }
  .buttons__container {
    display: revert;
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
  .studio__cont {
    margin-top: 10px;
  }
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
}
body::-webkit-scrollbar{
  display: none;
}
</style>