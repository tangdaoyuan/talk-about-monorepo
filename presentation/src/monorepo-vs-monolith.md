# Monorepo vs Monolith

<div v-click-hide>

## Monolith
<br/>

* ❌ It forces us to release together.
* ❌ It lets other teams will change my code without my knowing.
* ❌ It creates a big ball of mud. It makes applications hard to understand and maintain.
* ❌ It doesn’t scale.

If we encounter above problems, we might call it bad pratice, or a bad monorepo, or "monolith"

Actually, we are often affected by lerna when we talk about our monorepo, it is not what Google, Facebook, Microsoft, or Uber mean when they talk about their monorepos.

</div>

<v-after>

## A Good Monorepo
<br/>

* ✅ A good CI/CD practice to build and store artifacts, and deploy them.
* ✅ Configure ownership on the folder basis for Auth.
* ✅ Remove unexpected dependencies and Public Api Management
* ✅ False proposition. you don't need to rebuild and retest what is affected.

</v-after>

<v-click at="2">

## Real Challenges
<br/>

* 💪🏻 Trunk-based development is a lot more important
* 💪🏻 Not all services work well with monorepos
* 💪🏻 Require more sophisticated CI setup
* 💪🏻 Require you to think about large-scale changes

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
