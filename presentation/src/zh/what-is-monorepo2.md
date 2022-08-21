# 随着技术迭代, 什么是Monorepo?

随着一些monorepo工具（如bazel、gradle、Lerna、Nx等）的出现，MonoRepo的定义也与时俱进。

> "A monorepo is a single repository containing **multiple distinct projects**, with well-defined relationships."
> 
> [—— nrwl](https://github.com/nrwl/monorepo.tools)

<br/>

- 💡  Monorepo是一种策略，而不单指一种技术.
- 🔑 Monorepo的前提是将多个项目的代码保存在同一代码仓库库中.
- 🔑 特别注意: 如果项目之间没有 **良好的关系**，我们不会称之为Monorepo

<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
blockquote  {
  p:last-child {
    text-align: right;
  }
}
</style>
