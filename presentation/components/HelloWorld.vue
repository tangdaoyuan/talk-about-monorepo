<script lang="ts" setup>
import HelloWorldComponent from '@tedy-talk/monorepo-components'
import '@tedy-talk/monorepo-components/dist/index.css'
</script>
<template>
  <div class="w-full hello-comp">
    <HelloWorldComponent msg="now, " />
  </div>
</template>
<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}


.hello-comp {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}
</style>
