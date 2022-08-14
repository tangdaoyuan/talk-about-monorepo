import { defineComponent, compile } from 'vue'
import { ref } from 'vue'
import { compileTemplate } from '@vue/compiler-sfc'

const template = `
<div>
{{ msg }} <button type="button" @click="count++">count is {{ count }}</button>
</div>
`

const component = defineComponent({
  props: {
    msg: {
      type: String,
    }
  },
  setup() {
    const count = ref(0)

    return {
      count
    }
  },
  render: compile(template)
})

component.template = compileTemplate({
  id: '__virtual__',
  source: template,
  filename: 'HelloWorld.vue'
})

export default component
