# GH Actions Demo

GitHub Actions gives us a way to manage CI pipelines in one logical place to improve developer workflows and increase efficiency.

GitHub workflows live in the root directory under `.github/workflows/` and use YAML syntax.

These two branches show different ways we can use GH Actions:

1. `end` - This branch only runs tests for specific directories that have changes in PRs opened against it. 
    For example, a change to one of the components or changing a single page. 
    To test out, create a new PR against this branch and you will see only the tests running for the specific files you edited. 

2. `end-all-tests` - This branch runs all tests for every PR opened against it.
    To test out, create a new PR against this branch and you will see that all of the tests are ran.

***

## The workflow file

```yaml
# Name of the workflow as it appears in the Actions
# tab of the gh repo
name: <workflow-name> 

# Specify the event(s) in which you want to trigger
on: [push] 

# jobs group all the jobs that will run in this workflow
jobs:
  <job-name>:
    # Configure the machine to run the workflow on
    runs-on: ubuntu-latest
    # Groups all the steps under this job name
    steps:
      # This action checks out your repo and downloads it to the runner
      - uses: actions/checkout@v2
      - run: npm install && npm test
```

## GH Actions Terminology

**Workflows** - 
  Automated procedure made up of one or more jobs to be triggered and ran by an event. 

**Events** - 
  Activity that triggers a workflow. 
  Can be scheduled, manual, or through a webhook thats fired when a PR is opened for example.
  A list of all events can be found [here](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows)

**Jobs** - 
  Set of steps to execute on a runner by a workflow. 
  Multiple jobs run concurrently by default.
  Can be found in the docs [here](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobs)

**Steps** - 
  Task that runs commands inside of a runner. 
  Every step within the same job uses the same runner.
  Can be found in the docs [here](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps)

**Actions** - 
  Standalone commands combined into steps to create a job. 
  Each line within steps is an individual action.
  More information can be found in the docs [here](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)

**Runners** - 
  Server that runs our tests. 
  You can use self hosted runners, but gh provides its own for MacOS, Windows, and Ubuntu.
  A list of GH hosted runners can be found [here](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)



