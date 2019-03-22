<template>
<div id="warehouses">
  <Tree :data="data" :checkbox="true" @checkChange="onNodeCheck($event)" @nodeExpand="onNodeExpand($event)"></Tree>
</div>
</template>


<script>

import axios from 'axios'
export default {
  name: 'warehouses',
  data () {
    return {
      data:[],
      selection:'',
      checkedNodes:null
    }
  },
  mounted() {
    this.fillParentNode().then(dataParent => {this.data = dataParent.data});
  },
  methods:{
    onNodeExpand:function(event){
      let node = event;
      if(!node.children){
        this.getNodes(node).then(data => {this.$set(node,"children",data.data)});
      }
    },
    getNodes:function(event){
      return axios.get('http://192.168.6.202:8080/main-1.0/main/gettree/warehouses',{params:{id:event.id}});
    },
    onNodeSelect:function(event){
      this.selection = event;
    },
    fillParentNode:function(){
      return axios.get('http://192.168.6.202:8080/main-1.0/main/gettree/warehouses');
    },
    onNodeCheck:function(event){
      this.checkedNodes = event;
      this.$emit('changeNodeSelect',{nodes:this.checkedNodes});
    }
  }


}
</script>
