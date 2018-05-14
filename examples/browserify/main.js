// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import ProseMirror from '../../'
const fs = require('fs')
const insertCss = require('insert-css')
insertCss(fs.readFileSync('./node_modules/normalize.css/normalize.css').toString())
insertCss(fs.readFileSync('./node_modules/normalize.css/normalize.css').toString())

Vue.use(ElementUI)
Vue.use(ProseMirror)

new Vue({ // eslint-disable-line no-new,
  el: '#app',
  render: (h) => h(App)
})
