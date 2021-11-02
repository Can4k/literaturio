import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "",
    testKeys: [
      0, 0
    ],
    testNamesList: [
      'Преступление и наказание',
      'Война и мир'
    ],
    testList: [
      [
        {
          questionText: "Как зовут сестру Раскольникова?",
          answer1: "Софья",
          answer2: "Катирина",
          answer3: "Авдотья"
        },
        {
          questionText: "Сколько лет матери Раскольникова в начала романа?",
          answer1: "43",
          answer2: "45",
          answer3: "53"
        }
      ],
      [
        {
          questionText: "КТО ОТРАВИЛ НЭВЭЛНОГО?",
          answer1: "ПУТЬКИН",
          answer2: "ПЕВЧИХ",
          answer3: "НИКТО"
        },
        {
          questionText: "КТО ТАКОЙ МШК ФРЭДЭ?",
          answer1: "МЕЦЕНАТ",
          answer2: "ГЕНИЙ",
          answer3: "МЕЦЕНАТ И ГЕНИЙ"
        }
      ]
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
