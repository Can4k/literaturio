<template>
  <div class="cont">
      <a target="_blank" href="https://ilibrary.ru/text/69/index.html"><strong>ПРЕСТУПЛЕНИЕ И НАКАЗАНИЕ</strong></a><p/>
      <a target="_blank" href="https://ilibrary.ru/text/465/p.1/index.html"><strong>БОРИС ГОДУНОВ</strong></a><p/>
      <a target="_blank" href="https://ilibrary.ru/text/11/index.html"><strong>ВОЙНА И МИР</strong></a><p/>
      <a target="_blank" href="https://ilibrary.ru/text/78/index.html"><strong>МЕРТВЫЕ ДУШИ</strong></a><p/>
      <a target="_blank" href="https://ilibrary.ru/text/96/index.html"><strong>ОТЦЫ И ДЕТИ</strong></a><p/>
      <a target="_blank" href="https://ilibrary.ru/text/94/index.html"><strong>ИДИОТ</strong></a><p/>
  </div>
</template>

<script>
export default {
  name: "Books",
}
</script>

<style scoped>
h2 {
  margin: 0 20px 0 20px;
  padding: 0;
}

.cont {
  padding: 5px;
  margin-top: 20px;
}

.cont:first-child{
 margin-top: 100px;
}

h1 {
  text-align: center;
  margin: 10px 0 10px 0;
}

.cont {
  text-align: center;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  max-width: 800px;
}

p {
  text-align: center;
}

h1 {
  color: white;
  text-shadow: 0 0 3px black;
}
a{
  color: black;
  text-shadow: 0 0 100px black;
}
</style>

<style scoped>
a:hover{
  color: grey;
}
a:active{
  color: black;
}
a{
  color: black;
}
</style>

<style>
*{
  text-decoration: none;
}
</style>