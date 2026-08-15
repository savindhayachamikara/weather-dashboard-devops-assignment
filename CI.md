# Continuous Integration (CI)

## Overview

This project uses GitHub Actions to automatically validate the Weather Dashboard whenever changes are pushed to the repository or a pull request is created.

## CI Workflow

The workflow is located at:

`.github/workflows/ci.yml`

The CI pipeline performs the following steps:

1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs dependencies using `npm ci`.
4. Runs the lint check.
5. Runs the test command.
6. Builds the application.

## Local Verification

The following commands were successfully executed locally:

```bash
npm run lint
npm test
npm run build

```

All commands completed successfully without errors.

## GitHub Actions

The GitHub Actions CI workflow completed successfully with a green status.

This confirms that the application can be installed, validated, tested, and built automatically in the CI environment.
