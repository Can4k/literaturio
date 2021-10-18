<template>
  <div class="app">
    <div class="header">
      <a href="/#/tests"><strong class="btn">ПРОХОДИТЬ ТЕСТЫ</strong></a>
      <a href="http://localhost:8080/#/"><h2>ЛИТЕРАТУРИО</h2></a>
      <a href="/#/books"><strong class="btn">ЧИТАТЬ КНИГИ</strong></a>
      <span class="btn-cont">
         <i @click="isMenuOpen=!isMenuOpen">МЕНЮ</i>
         <a target="_blank" href="https://анкап.рф"><i style="margin-left: 10px; color: yellow">АНКАП.РФ</i></a>
      </span>
    </div>
    <div v-show="isMenuOpen" class="menu">
      <div class="menu-cont">
        <a href="/tests"><strong>ПРОХОДИТЬ ТЕСТЫ</strong></a>
        <a href="/#/books"><strong>ЧИТАТЬ КНИГИ</strong></a>
      </div>
    </div>
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
h2 {
  margin: 0 20px 0 20px;
  padding: 0;
}
.btn-cont {
  display: none;
}
.header {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 10px;
  background-color: greenyellow;
  color: white;
  text-shadow: 0 0 2px darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

i {
  display: none;
}

h1 {
  text-align: center;
  margin: 10px 0 10px 0;
}

p{
  text-align: center;
}
h1{
  color: white;
  text-shadow: 0 0 3px black;
}
@media screen and (max-width: 580px) {
  h2 {
    margin: 0;
  }
  .btn {
    display: none;
  }
  .btn-cont {
    display: revert;
  }
  i {
    border: 1px solid red;
    background-color: black;
    padding: 2px;
    border-radius: 5px;
    display: revert;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .menu {
    z-index: 1;
    width: 100%;
    height: 13%;
    position: absolute;
    background-color: black;
  }

  .menu-cont {
    padding: 10px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .menu-cont strong {
    margin: 10px;
    color: white;
    text-shadow: 0 0 2px black;
  }

  .header {
    justify-content: space-between;
  }
}
@media screen and (max-width: 390px){
  h2{
    font-size: 20px;
  }
  i{
    font-size: 10px;
  }
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
}

* {
  font-family: 'Pacifico', cursive;
}

a{
  color: white;
  text-shadow: 0 0 3px black;
}
</style>