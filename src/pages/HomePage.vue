<template>
  <div class="cont">
    <h1>Искусство писать предшествует искусству мыслить...</h1>
    <div class="description">
      <p>Сайт literaturio.firebase.com дает доступ к тестам по литературе и к некоторым книгам,
        находящимся в открытом доступе.
        На сайте вы найдете разнообразные тесты, которые помогут вам узнать, насколько вам знакома та, или иная книга.
        Разработкой данного сайта занималась команда разработчиков-членов РСДАКПМ, в состав которой входили участники:
        Яковлев Александр, Георгий Возмилов, Андрей Барышников, Григорий Топорец, Матвей Жиляев и другие.
      </p>
    </div>
    <img class="book" src="@/assets/books1.jpg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p{
  font-size: 20px;
  font-weight: 400;
}
h2 {
  margin: 0 20px 0 20px;
  padding: 0;
}
.description {
  max-width: 800px;
}

i {
  display: none;
}

.cont{
  padding: 5px;
}

h1 {
  text-align: center;
  margin: 10px 0 10px 0;
}

.cont {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  max-width: 800px;
}
.book {
  width: 100%;
  border-radius: 20px;
}
p{
  text-align: center;
}
h1{
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
@media screen and (max-width: 390px){
  h2{
    font-size: 20px;
  }
}
</style>