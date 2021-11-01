<template>
  <div>
    <div class="cont__header">
      <h1>КНИГИ</h1>
    </div>
    <div class="app">
      <a target="_blank" href="https://ilibrary.ru/text/78/index.html">
        <span>
          <img src="@/assets/gogol.jpg" alt="">
          <h3>Мертвые души</h3>
        </span>
      </a>
      <a target="_blank" href="https://ilibrary.ru/text/69/index.html">
        <span>
          <img src="@/assets/dostoevsky.jpg" alt="">
          <h3>Преступление и наказание</h3>
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

.cont__header h1{
  text-align: center;
  margin: 0;
  font-size: 30px;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}

h3 {
  text-align: center;
  font-size: 20px;
  color: black;
  font-family: roboto, segoe, helvetica, 'open sans', sans-serif;
}
span{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.cont__header{
  background-color: #f3f3f3;
  padding: 50px 0 50px 0;
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