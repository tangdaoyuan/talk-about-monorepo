# Why a Monorepo

## Polyrepo

> A polyrepo is the current standard way of developing applications: a repo for each team, application, or project. And it's common that each repo has a single build artifact, and simple build pipeline.

特点：每个团队、应用程或项目的都有单独的代码仓库，每个仓库都有一套独立的构建工具和构建流程。

<v-click>

### 带来的问题

* 😢 糟糕的代码共享能力
<!-- 要跨存储库共享代码，您可能需要为共享代码创建一个存储库。必须设置工具和CI环境，向repo添加提交，发布，以便其他repo可以依赖它。并且我们可能遭遇第三方库的不兼容问题... -->
* 😢 代码重复
<!-- 没有人愿意经历建立共享仓库的麻烦，因此多数团队选择在每个代码仓库中编写自己的公共服务和组件实现。这浪费了开发前期时间，随着组件和服务的变化，也增加了维护、安全和质量控制的负担。 -->
* 😢 对共享仓库和开发者来说都代价高昂的跨仓库更新
<!-- 考虑共享库中的一个严重bug 或 破坏性改动：开发人员需要设置其环境，在多个没什么关联的的修改记录中，进行验证和更新。更不用说版本控制和发布包的协调工作了。 -->
* 😢 不一致的工具体验
<!-- 每个项目都使用自己的一组命令来运行测试、构建、服务、linting、部署等等。不一致性造成了记住在项目之间使用哪些命令的心智负担。  -->

</v-click>

<style>
  div {
    background-size: contain;
  }
</style>