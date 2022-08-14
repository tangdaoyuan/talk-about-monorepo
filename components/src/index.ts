import { defineComponent, h } from 'vue'


export default defineComponent({
  name: 'HelloWorld',
  setup() {
    return () => h('div', 'Hello World')
  }
})
