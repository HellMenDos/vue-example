<template>
  <div>
    {{ hello }} {{ dataFrom }}
  </div>
  <div>
    {{ prop }}
  </div>
  <input @input="writeData"/>
  <input @click="toogle = !toogle" type="button" value="Hello" />

  <div v-if="toogle">I am here block</div>
  <div v-else>I am not here block</div>
  <div v-show="toogle">I am here css</div>

  <div v-for="data of arrayData"> {{data}} </div>

  <div :class="hello">Data</div>

  <TheWelcome data="Hello" @getData="logData"/>
</template>

<script>
import newMixins from '../mixins/newMixins.ts'
import TheWelcome from '../components/TheWelcome.vue'

export default {
  components: { 
    TheWelcome 
  },
  mixins: [newMixins],
  data() {
    return {
      hello:'world',
      arrayData: [1,2,3,4,5],
      toogle: false
    }
  },
  methods: {
    writeData(event) {
      this.hello = event.target.value
    }, 
    logData(data) {
      console.log(data)
    }
  },
  watch: {
    hello(prev,newData) {
      console.log(prev,newData)
    },
    toogle(prev,newData) {
      console.log(prev,newData)
    }
  },
  computed: {
    dataFrom() {
      return `${this.hello} 1`
    }
  }, 
  beforeCreate() {
    console.log('1')
  },
  created() {
    console.log('2')
  },
  beforeMount() {
    console.log('3')
  },
  mounted() {
    console.log('4')
  },

  beforeUpdate() {
    console.log('Before update')
  },
  updated() {
    console.log('Update')
  },

  beforeUnmount() {
    console.log('Before unmount')
  },
  unmounted() {
    console.log('unmount')
  }
}
</script>

<style>

</style>
