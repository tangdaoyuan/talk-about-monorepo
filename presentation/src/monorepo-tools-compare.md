# Monorepo tools

<div v-click-hide>

| **Fast** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Local computation caching | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Local task orchestration | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | ✅ |
| Distributed computation caching | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌| ✅ |
| Distributed task execution | ✅ | ⚠️ | ❌ | ✅ | ✅ | ⚠️ | ❌ | ❌ |
| Transparent remote execution | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ |
| Detecting affected projects/packages | ⚠️ | ✅ | ✅ | ✅ | ✅ | ✅ |✅ | ✅ |

</div>

<v-after>

| **Understandable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Workspace analysis | ⚠️ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dependency graph visualization | ✅ | ⚠️ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ✅ |

<br/>

| **Manageable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Source code sharing | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Consistent tooling | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Code generation | ⚠️ | ⚠️ | ⚠️ | ✅ | ✅ | ✅ | ⚠️ | ⚠️ |
| Project constraints and visibility | ✅ | ⚠️ | ⚠️ | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ |

</v-after>

<style>
  .slidev-page-8,
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
