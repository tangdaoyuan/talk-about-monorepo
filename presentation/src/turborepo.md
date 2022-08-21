# TurboRepo

<!-- Need A Workspace Deps Relationship to Show Export Features -->

> [Turborepo](https://turborepo.org/docs) is a blazing fast build system for JavaScript/TypeScript monorepos: codebases containing multiple projects, often using multiple frameworks, in a single unified code repository.

<div v-click-hide>

Pipeline and Cache Configuration

```jsonc

{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": [
        // "A package's `build` command depends on its dependencies'
        // and devDependencies' `build` commands being completed first"
        "^build"
      ],
      "outputs": [
        "dist/**", "build/**"
      ]
    },
    // ...
  }
}

```

</div>

<div v-click-hide="2">
  <div v-click="1">

  Pipeline and Cache Configuration

  ```jsonc
  {
    
    "scripts": {
      "build": "turbo run build",
      // ...
    },
  }

  ```

  </div>
</div>


<div v-click-hide="3">
  <div v-click="2">

  Result after second build (no files change)


  ```bash

  > turbo run build

  • Packages in scope: @tedy-talk/monorepo-components, @tedy-talk/presentation, playground
  • Running build in 3 packages

  # Omit the compiling details

  Tasks:    3 successful, 3 total
  Cached:    1 cached, 3 total
    Time:    342ms >>> FULL TURBO

  # First Build 7.82s

  ```

  </div>
</div>

<div v-click="3">

**Remote Caching by Github Action**

* Caching across CI jobs or OS become easy by the feature
* Local Development Convenient with Remote Caching
* Support to Custom Remote Caches


```yaml

# env:
    #  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
    #  TURBO_TEAM: ${{ secrets.TURBO_TEAM }}
    #  TURBO_REMOTE_ONLY: true

```


<span class="remote-config">

 [Complete config Here](https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/ci.yaml#L15)

</span>

</div>

<style>
  .slidev-page-16,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
  .remote-config a {
    font-size: 10px;
    border-bottom: none
  }
</style>
