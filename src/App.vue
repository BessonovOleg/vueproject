<template>
  <div id="app">
    <promotion></promotion>
    <entcard></entcard>
  </div>
</template>

<script>
import promotion from './components/promotion.vue'
import entcard from './components/entcard.vue'
export default {
  components:{promotion,entcard},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mytxt: 'my text'
    }
  }
}
</script>
