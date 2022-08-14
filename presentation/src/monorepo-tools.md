# Monorepo tools try to solve

<div class="grid grid-cols-2">

<div>

## 🚀 Fast

<br/>

  - Local computation caching
  <!-- The ability to store and replay file and process output of tasks. On the same machine, you will never build or test the same thing twice. -->
  - Local task orchestration
  <!-- The ability to run tasks in the correct order and in parallel. All the listed tools can do it in about the same way, except Lerna, which is more limited. -->
  - Distributed computation caching
  <!-- The ability to share cache artifacts across different environments. This means that your whole organisation, including CI agents, will never build or test the same thing twice. -->
  - Distributed task execution
  <!-- The ability to distribute a command across many machines, while largely preserving the dev ergonomics of running it on a single machine.  -->
  - Transparent remote execution
  <!-- The ability to execute any command on multiple machines while developing locally. -->
  - Detecting affected projects/packages
  <!-- Determine what might be affected by a change, to run only build/test affected projects. -->

</div>

<div v-click>

## 🤔 Understandable

<br/>

  - Workspace analysis
  - Dependency graph visualization

## 💡 Manageable

<br/>

  - Source code sharing
  <!-- Facilitates sharing of discrete pieces of source code.
  -->
  - Consistent tooling
  - Code generation
  - Project constraints and visibility

</div>

</div>
