import Vue from 'vue'
import App from './App.vue'
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';
import locale from 'vx-easyui/dist/locale/easyui-lang-ru'
Vue.use(EasyUI,{locale: locale});


new Vue({
  el: '#app',
  render: h => h(App)
})
