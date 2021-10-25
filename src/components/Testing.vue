<template>
  <div>
    <div class="cont">
      <p>{{item.id}}. {{item.question}}</p>
      <div class="radio__cont">
        <vs-radio class="radio" v-model="picked" val="1">
          {{item.ans1}}
        </vs-radio>
        <vs-radio class="radio" v-model="picked" val="2">
          {{item.ans2}}
        </vs-radio>
        <vs-radio class="radio" v-model="picked" val="3">
          {{item.ans3}}
        </vs-radio>
      </div>
    </div>
    <div class="bnts">
      <vs-button :active-disabled="!picked" @click="next" class="vs-button" size="small">ОК</vs-button>
      <vs-button @click="close" size="large" color="danger">ЗАКРЫТЬ</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "testing",
  props: {
    item: {
      id: Number,
      question: String,
      ans1: String,
      ans2: String,
      ans3: String,
    }
  },
  data(){
    return{
      picked: 0
    }
  },
  methods: {
    next(){
      this.$emit("next");
    },
    close(){
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
p{
  font-size: 30px;
  text-align: center;
  margin: 0;
  font-weight: 700;
}
p::first-letter{
  font-weight: 1000;
  font-size: 30px;
}
.cont{
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  font-size: 25px;
}
.radio__cont{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}
.radio{
  padding: 2px 0 2px 0;
}
.vs-button{
  font-size: 30px;
}
.bnts{
  display: flex;
  justify-content: space-between;
}
</style>