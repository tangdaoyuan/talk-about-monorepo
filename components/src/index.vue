<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="hello-comp">
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
      starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.hello-comp .read-the-docs {
  color: #888;
}

.hello-comp a {
  font-weight: 500;
  color: #646cff;
  text-decoration: none;
  border: none;
}

.hello-comp a:hover {
  color: #535bf2;
  border: none;
}

.hello-comp h1 {
  color: inherit;
  font-size: 3.2em;
  line-height: 1.1;
  margin-bottom: 0;
  margin-left: 0;
}

.hello-comp button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

.hello-comp button:hover {
  border-color: #646cff;
}

.hello-comp button:focus,
.hello-comp button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.hello-comp .card {
  padding: 2em;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }

  a:hover {
    color: #747bff;
  }

  button {
    background-color: #f9f9f9;
  }
}
</style>
