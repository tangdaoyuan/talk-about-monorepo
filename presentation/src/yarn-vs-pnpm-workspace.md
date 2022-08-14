# Yarn workspace and Pnpm workspace

<div v-click-hide>

In Yarn official docs

Yarn workspace compare to Lerna

> Yarn’s workspaces are the low-level primitives that tools like Lerna can (and do!) use. They will never try to support the high-level feature that Lerna offers, but by implementing the core logic of the resolution and linking steps inside Yarn itself we hope to enable new usages and improve performance.

<!-- From other way, yarn and yarn workspace have do lost of works that Lerna does  -->


In Pnpm official docs:

> pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository.

<!-- Pnpm say: my workspaces == monorepo -->

</div>

<div class="flex items-center h-11/12">
  <div v-click="1" class="w-1/2 h-full">
    <img class="h-full" src="/pnpm-benchmark.svg" />
  </div>
  <div v-click="2" class="w-1/2 h-full text-center flex items-center justify-center" >
    <span class="text-6xl">Pnpm > Yarn</span>
  </div>
</div>

<style>
  .slidev-page-11,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>
