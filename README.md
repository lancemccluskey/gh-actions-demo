# GH Actions Demo

GitHub Actions gives us a way to manage CI pipelines in one logical place to improve developer workflows and increase efficiency.

GitHub workflows live in the root directory under `.github/workflows/` and use YAML syntax.

These two branches show different ways we can use GH Actions:

1. `end` - This branch only runs tests for specific directories that have changes in PRs opened against it. For example, a change to one of the components or changing a single page.

2. `end-all-tests` - This branch runs all tests for every PR opened against it.

Example build:

```yaml
name: <workflow-name>

on:
  pull_request:
    paths: <path/to/files>

jobs:
  <job-name>:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install && npm test
```

// TODO: Make some diagrams from drawio to show how gh actions works
