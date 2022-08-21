# Github Code Owners

> You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.

你可能经常听到以下关于monorepo的描述：

> “其他团队在我不知情的情况下更改我的代码.”

现在，我们通过`CODEOWNERS`来解决它


```bash
# .github/CODEOWNERS
component/* @tangdaoyuan
playground/* @fourtreasure
presentation/* @tangdaoyuan

```

如果开发人员修改了 <i>presentation</i> 目录中的任何文件，则在<b>MR</b>阶段将自动发起包含<i>CODEOWNERS 文件</i>中指定的owners的review流程
