# Github Code Owners

> You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.

You often hear about monorepo

> “It lets other teams will change my code without my knowing.”

Now, solved by `CODEOWNERS`


```bash
# .github/CODEOWNERS
component/* @tangdaoyuan
playground/* @fourtreasure
presentation/* @tangdaoyuan

```

If the developer modifies any file in `presentation` directory, a review pipeline include code owners specified in CODEOWNERS will start automatically in Merge Request phase.
