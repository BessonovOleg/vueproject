<template>
<div id="period">

  <Dialog ref="d1" bodyCls="f-column" @close="closedialog()" :title="'Рабочий период'" :dialogStyle="{width:'250px',height:'200px'}" :modal="true">

<div class="f-full">
    <div style="text-align:center">
        <div class="clearfix">
          <span>Текуший год</span><input type="number" v-model="period.year">
        </div>
    </div>

    <div class="dialog-button">
      <Button @click="bt" style="width:80px">Ок</Button>
    </div>

</div>
  </Dialog>
</div>
</template>

<script>

export default {
  name: 'period',
  data () {
    return {
      period:{
        year:0
      }
    }
  },
  methods:{
    closedialog(){
      this.$emit('close');
    },
    bt(){
      this.$refs.d1.close();
    }
  },
  mounted(){
    console.log("Period is mounted");
  }
}
</script>
