<template>
<div id="period">
  <Dialog @close="closedialog()" :title="'Basic Dialog'" :dialogStyle="{width:'400px',height:'200px'}" :modal="true"></Dialog>
</div>
</template>

<script>

export default {
  name: 'period',
  data () {
    return {
      ishow:false
    }
  },
  methods:{
    closedialog(){
      this.$emit('close');
    }
  }
}
</script>
