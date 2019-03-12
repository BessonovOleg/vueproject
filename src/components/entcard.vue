<template>
<div id="entcard">
{{dat}}
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'entcard',
  data () {
    return {
      dat:null
    }
  },
  mounted() {
    axios.get('http://192.168.6.202:8080/main-1.0/main/restreportagsitems')
    .then(responce => (this.dat = responce.data));
  }
}
</script>
