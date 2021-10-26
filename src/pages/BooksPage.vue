<template>
  <div>
    <div class="cont__header">
      <h1>КНИГИ</h1>
    </div>
    <div class="app">
      <a target="_blank" href="https://ilibrary.ru/text/78/index.html">
        <span>
          <img src="@/assets/gogol.jpg" alt="">
          <h3>МЕРТВЫЕ ДУШИ</h3>
        </span>
      </a>
      <a target="_blank" href="https://ilibrary.ru/text/69/index.html">
        <span>
          <img src="@/assets/dostoevsky.jpg" alt="">
          <h3>ПРИСТУПЛЕНИЕ И НАКАЗАНИЕ</h3>
        </span>
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: "Books",
}
</script>

<style scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

h1{
  text-align: center;
  margin: 0;
}

h3 {
  text-align: center;
  font-size: 25px;
  color: black;
}
.cont__header{
  background-color: #f3f3f3;
  padding: 100px 10px 100px 10px;
  font-size: 30px;
  box-shadow: 0 0 1px black;
  margin-bottom: 10px;
}
</style>

<style>
*{
  text-decoration: none;
}
</style>