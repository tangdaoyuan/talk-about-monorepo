# Monorepo tools

<div v-click-hide>

| **Fast** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| 本地计算缓存 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| 本地任务编排 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | ✅ |
| 分布式计算缓存 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌| ✅ |
| 分布式任务编排 | ✅ | ⚠️ | ❌ | ✅ | ✅ | ⚠️ | ❌ | ❌ |
| 透明的远程执行 | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ |
| 检测受影响的项目/包 | ⚠️ | ✅ | ✅ | ✅ | ✅ | ✅ |✅ | ✅ |

</div>

<v-after>

| **Understandable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Workspace分析 | ⚠️ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 依赖图可视化 | ✅ | ⚠️ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ✅ |

<br/>

| **Manageable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| 源代码共享 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 一致的工具 (跨语言) | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| 代码生成 | ⚠️ | ⚠️ | ⚠️ | ✅ | ✅ | ✅ | ⚠️ | ⚠️ |
| 项目约束和可见性 | ✅ | ⚠️ | ⚠️ | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ |

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
