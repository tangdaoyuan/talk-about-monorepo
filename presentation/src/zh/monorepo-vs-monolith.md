---
title: Monorepo vs Monolith
---

# Monorepo vs Monolith

<div v-click-hide>

## Monolith
<br/>

* ❌ `Monorepo` 迫使我们必须要一起进行版本发布.
* ❌ `Monorepo` 允许其他团队在我不知情的情况下更改我的代码.
* ❌ `Monorepo` 导致了一个大泥球. 使得应用难以理解和维护.
* ❌ `Monorepo` 无法伸缩或拓展.

如果我们遇到上述问题，我们可以称之为一次糟糕的Monorepo实践，或是“Monolith”

事实上，当我们谈论我们的monorepo时，我们经常受到 **lerna** 的影响，但是这不是google、Facebook、Microsoft或Uber在定义的Monorepos.

</div>

<v-after>

## 真正的Monorepo
<br/>

* ✅ 拥有一个健全的CI/CD来支撑，构建，缓存，部署应用
* ✅ 基于文件目录来验证代码仓库权限的能力.
* ✅ 帮助甄别工程间依赖关系，移除冗余依赖，或者进行通用API合并的能力.
* ✅ 基于上述，无法伸缩或拓展，已然变成伪命题。

</v-after>

<v-click at="2">

## 带来的挑战
<br/>

* 💪🏻 基于主干的开发要重要得多
<!-- Monorepos and long-lived feature branches do not play together nicely. Chances are you will have to adopt some form of trunk-based development. Transitioning to this style of development can be challenging for some teams, partially because they have to adopt new practices such as feature toggles.

I believe that trunk-based development results in better quality code and higher velocity, regardless of the size of the repo, but it is still something you must take into account. -->
* 💪🏻 并非所有的服务都能与monorepos良好配合
<!-- Since monorepos are not mainstream yet, some services do not work well with them. They might expect a single deployment artifact or a coverage report per repo. Having said that, you can work around most issues.
CI -->
* 💪🏻 需要更老练的CI工程师
<!-- Moving to a monorepo requires you to rethink how you do continuous integration. After all, you are no longer building a single app. You are only building the things that are affected by your change.

Even though popular CI solutions (e.g., Azure, Circle, and Jenkins) are flexible enough to be used with say Nx, it is still something you might need some time to figure out.
-->
* 💪🏻 要求考虑大规模的影响范围
<!-- Monorepos make some large-scale changes a lot simpler: you can refactor ten apps made out of a hundred libs, verify that they all work before committing the change.

But they force you to think through large-scale changes more and make some of them more difficult. For instance, if you change a shared library, you will affect all the applications that depend on it. If it is a breaking change, and it cannot be automated, you will have to make the change in a backward-compatible way. You will have to create two versions of the parameter/method/class/package and help folks move from the old version to the new one. -->

</v-click>

<style>
.slidev-page-4,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: opacity 300ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
    display: none;
  }
}
</style>

