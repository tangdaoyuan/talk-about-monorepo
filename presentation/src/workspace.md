# Workspaces

<div v-click-hide>

In npm-cli official docs:
<br/>

> Workspaces is a generic term that refers to the set of features in the npm cli that provides support to **managing multiple packages** from your local file system from within a singular top-level, root package.
>
> This set of features makes up for a much more streamlined workflow handling linked packages from the local file system. Automating the linking process as part of npm install and avoiding manually having to use npm link in order to add references to packages that should be symlinked into the current node_modules folder.

<br/>

Simple Configuration

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

💡 Conclusion

`Workspaces` can help to build a monorepo (npm >= 7)

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
