# Project Setup


<div v-click-hide>

<b>Project Structure</b>


```bash
.
├── LICENSE
├── README.md
├── components
├── node_modules
├── package.json
├── playground
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── presentation
└── turbo.json

4 directories, 6 files

```
</div>


<v-after>

<i>Pnpm-workspace.yaml</i>

```yaml
packages:
  - presentation
  - components
  - playground
```

<i>presentation/package.json</i>

```jsonc
{
  // ...
   "dependencies": {
    "@tedy-talk/monorepo-components": "workspace: *"
  }
}

// The same is true for `playground`
```

Initialize it and now you have a local monorepo, or called `monolith`.


</v-after>


<style>
  .slidev-page-14,
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
