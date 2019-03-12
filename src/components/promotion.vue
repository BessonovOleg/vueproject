<template>
<div id="promotion">
{{msg}}
{{info}}
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'promotion Report',
      info:null
    }
  },
  mounted() {
    axios.get('http://192.168.6.202:8080/main-1.0/main/getchartdata')
    .then(responce => (this.info = responce.data));
  }
}
</script>
