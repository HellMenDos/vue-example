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

  <TheWelcome data="Hello" @getData="logData">
    <WelcomeItem />
  </TheWelcome>
</template>

<script setup>
import newMixins from '../mixins/newMixins.ts'
import TheWelcome from '../components/TheWelcome.vue'
import WelcomeItem from '../components/WelcomeItem.vue'

import { ref, watch, onBeforeMount, computed } from 'vue'

const hello = ref('world')
const arrayData = ref([1,2,3,4,5])
const toogle = ref(false)

const writeData = (event) => {
  hello.value = event.target.value
}

const logData = (data) => {
  console.log(data)
}

watch(hello, (prev,newData) => {
      console.log(prev,newData)
})


const dataFrom = computed(() => {
  return `${hello.value} 1`
})

onBeforeMount(() => console.log('Method'))
</script>


