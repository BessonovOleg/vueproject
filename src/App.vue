<template>
  <div id="app">
    <period v-if="showperiod" @close="closedialog"></period>
    <button @click="showperiod = !showperiod">Show</button>
    <p>showPeriod = {{showperiod}}</p>
  </div>
</template>

<script>
import period from './components/period.vue'
import throttle from './components/throttle.js'

export default {
components:{period},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showperiod:false
    }
  },
  methods:{
    closedialog(){
      setTimeout(()=>{this.setvis()},500);
    },
    setvis(){
        this.showperiod = false;
    }
  }
}
</script>
