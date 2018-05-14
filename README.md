# vue2-prosemirror-markdown

Plugin to integrate prosemirror with Vue 2

[![Build Status](https://travis-ci.org/zazuko/vue2-prosemirror-markdown.svg?branch=master)](https://travis-ci.org/zazuko/vue2-prosemirror-markdown)

## Usage

```js
import Vue from 'vue'
import ProseMirror from 'vue2-prosemirror-markdown'
import App from './App.vue'

Vue.use(ProseMirror)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})
```
This installs the component, which can be used as...

```html
<prosemirror
  :initialMarkdown="**hello**"
  mode="all"
  textareaConfig="{name: 'my-textarea'}"
  @contentChangeMarkdown="markdownChangedHandler"/>
```

| parameter         | values                                                                          |
|-------------------|---------------------------------------------------------------------------------|
| `textareaConfig`  | `{name: 'a-string'}` (required)                                                 |
| `mode`            | `all`, `editor` (default), `markdown`                                           |
| `initialMarkdown` | binding `:initialMarkdown="someVar"`, as string: `initialMarkdown="**text**"`   |
| `customClass`     | `'vue-prosemirror'` (default)                                                   |

### Events

| event name               | called with these arguments  |
|--------------------------|------------------------------|
| `contentChange`          | `(val, oldVal)`, both are Objects: `{editor: Node, markdown: String}`              |
| `contentChangeMarkdown`  | `(markdown: String)`           |
| `modeChange`             | `(val: String, oldVal: String)`              |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).
