# vue-cssvar
Vue 注入 CSS 变量控制样式 (兼容 vue2 , vue3)

样例：点击 div。div 以及其 hover伪类会变色。
```js
<template>
	<div v-css="{a,b}" class="box" @click="changeColor"></div>
</template>
export default {
  data(){
    return {
      a : 'blue',
      b : 'pink'
    }
  },
  methods: {
    changeColor(){
      this.a = this.a === 'blue' ? "red" : "blue"
      this.b = this.b === 'pink' ? "yellow" : "pink"
    }
  }
}
</script>
<style>
  .box {
    width : 100px;
    height : 100px;
    background-color : var(--a);
  }
  .box:hover {
    background-color : var(--b);
  }
</style>
```
简便了 vue 处理元素 style ，以及可以直接修改伪类伪元素的样式。


## 使用

### vue3 注册指令

```js
import { createApp } from 'vue'
import vueCssvar from 'vue-cssvar'
const app = createApp(App)
vueCssvar(app)
app.mount('#app')
```

### vue2注册指令
```js
import Vue from 'vue'
import vueCssvar from 'vue-cssvar'
vueCssvar(Vue)
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
```
## vueCssvar 参数
1. 参数1 ： 指令要绑定的应用，及 vue2 的 Vue、vue3 的 app。
2. 参数2 ： 相关配置 options

 - options.name 指令名，默认 'css'

  ```js
  vueCssvar(app,{
  	name : 'custom'
  })
  	
  -----------template-------------
  <div v-custom="{a,b}" class="box" @click="changeColor"></div>
  	
  ```

  - options.isPx 值为数字时默认加上px方便计算，默认 true

  ```js
  vueCssvar(app,{
  	isPx : 'true'
  })
  	
  -----------template-------------
  <div v-css="{c,b}" class="box" @click="changeColor">hello</div>
  <script>
export default {
  data(){
    return {
      c : 1,
      b : '700' //如果不必须后面加px，使用字符串类型
    }
  },
  methods: {
    changeColor(){
      this.c++;
    }
  }
}
</script>
<style>
  .box {
  // 使用 css 内置函数计算其 width,此时的var(--c)为 1px
    width : calc( var(--c) * 100); 
    height : 100px;
    background-color : red;
    font-weight: var(--b);
  }
</style>
  
  	
  ```

  



