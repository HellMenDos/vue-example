<template>
  <div>Hello {{ data }}</div>
  <button @click="$emit('getData',{ count: 1 })">click me</button>
  <slot></slot>
</template>

<script>
export default {
  props: ['data'],
  mounted() {
    console.log(this.data)
    this.$log('hello 23423432')
  },
}
</script>