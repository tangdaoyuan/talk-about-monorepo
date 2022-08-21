# Workspaces

<div v-click-hide>

在 npm-cli 官方文档中:

> Workspaces is a generic term that refers to the set of features in the npm cli that provides support to **managing multiple packages** from your local file system from within a singular top-level, root package.

> This set of features makes up for a much more streamlined workflow handling linked packages from the local file system. Automating the linking process as part of npm install and avoiding manually having to use npm link in order to add references to packages that should be symlinked into the current node_modules folder.

> We also refer to these packages being auto-symlinked during npm install as a single workspace, meaning it's a nested package within the current local file system that is explicitly defined in the package.json workspaces configuration.

<!--
1. 是一个通用术语，是npm cli提供的一个功能集合
2. 能从root-level, root package中直接管理目录下的多个packages
3. 避免手动使用npm link子package到node_modules下
4. 提供了显示声明的配置方法

 -->

<br/>

基本配置 （package.json）

```json {all|4-5|all}
{
  "name": "my-workspaces-powered-project",
  "workspaces": [
    "packages/a",
    "packages/b",
  ]
}
```
</div>

<v-after>

💡 结论

`Workspaces` 能帮助构建Monorepo (npm >= 7)

</v-after>

<style>
  .slidev-page-10,
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
