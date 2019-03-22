<template>
<div id="period">
  <v-dialog max-width="300px" v-model="dialog" persistent>

    <v-card>

      <v-card-title>
        <h1>Test</h1>
        <v-radio-group v-model="radios" :mandatory="false">
            <v-radio label="Месяц" value="m1"></v-radio>
            <v-radio label="Квартал" value="m2"></v-radio>
            <v-radio label="Месяцы" value="m3"></v-radio>
            <v-radio label="Произвольно" value="m4"></v-radio>
            <v-radio label="За последние" value="m5"></v-radio>
            <v-radio label="Все данные за текущий год" value="m6"></v-radio>
            <v-radio label="Все данные в базе данных" value="m7"></v-radio>
        </v-radio-group>

      </v-card-title>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" flat @click="closedialog">Ок</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</div>
</template>
<script>

export default {
  name: 'period',
  data () {
    return {
      period:{
        year:0,
        radios:'m1'
      },
      dialog:true
    }
  },
  methods:{
    closedialog(){
      this.$emit('close');
      this.dialog = false;
    },
    bt(){
      this.dialog = false;
    }
  },
  mounted(){
    console.log("Period is mounted");
  }
}
</script>
