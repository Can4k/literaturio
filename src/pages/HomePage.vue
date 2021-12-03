<template>
  <div class="cont">
    <div class="description">
      <span class="text">
        <p>LeeTry.ru дает вам доступ к тестам по литературе и некоторым книгам, находящимся в открытом доступе</p>
        <span class="buttons">
          <main-button @clicked="toSite('tests')" class="text__b"><b style="color: #0046ff;">Проходить тесты</b></main-button>
          <main-button @clicked="toSite('books')" class="text__b" style="margin: 0 10px 0 10px"><b style="color: #0046ff;">Читать книги</b></main-button>
          <main-button @clicked="toSite('about')" class="text__b"><b style="color: #0046ff;">О разработке</b></main-button>
        </span>
      </span>
      <img src="@/assets/womanread.png">
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/main-button";

export default {
  components: {MainButton},
  methods: {
    toSite(name) {
      if(this.isMenuOpen){
        this.menuController();
      }
      document.location.href = '/#/' + name;
    }
  }
}
</script>

<style scoped>
.text{
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.buttons{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.text__b {
  font-size: 15px;
}
p {
  display: inline-block;
  margin: 0;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  font-family: 'Rubik', sans-serif;
  color: white;
}
.description {
  align-items: center;
  display: flex;
  height: 800px;
  justify-content: center;
}
h1 {
  text-align: center;
  margin: 10px 0 10px 0;
  font-family: 'Rubik', sans-serif;

}

.cont {
  position: relative;
  background-color: #3636ff;
}

p {
  text-align: center;
}

h1 {
  color: black;
}

@media screen and (max-width: 580px) {
  h2 {
    margin: 0;
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

  .menu-cont strong {
    margin: 10px;
    color: black;
  }
}

@media screen and (max-width: 390px) {
  h2 {
    font-size: 20px;
  }
}

@media screen and (max-width: 975px){
  img{
    display: none;
  }
  .text__b{
    font-size: 15px;
  }
  .buttons{
    margin-top: 10px;
  }
  .description{
    justify-content: center;
    padding-top: 100px;
    align-items: flex-start;
    height: 500px;
  }
}
@media screen and (max-width: 750px){
  p{
    font-size: 30px;
  }
  .text__b{
    font-size: 12px;
  }
}
</style>