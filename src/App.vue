<template>
  <v-app id="app">
    <v-layout>
        <period v-if="showperiod" @close="closedialog"></period>
        <v-btn @click="btntest">Период</v-btn>
        {{showperiod}}

        <v-switch v-model="sw" :label="Ops"></v-switch>
    </v-layout>
  </v-app>
</template>

<script>
import period from './components/periodv2.vue'
export default {
  name: 'App',
  components: {
    period
  },
  data () {
    return {
      showperiod:false,
      radios:'m3',
      sw:''
    }
  },
  methods:{
    closedialog(){
      setTimeout(()=>{this.setvis()},500);
    },
    setvis(){
      this.showperiod = false;
    },
    btntest(){
      console.log("!!!!!!");
      this.showperiod = !this.showperiod;
    }
  }
}
</script>
