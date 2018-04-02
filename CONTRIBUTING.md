## Thanks

Thanks for reading this. If you do so - you are probably ready to be an contributor. So lets follow basics setup of development environment.

## Table of contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [IDE](#ide)
  - [Installation](#installation)
  - [<a name="commits"></a> Git Commit Guidelines](#a-namecommitsa-git-commit-guidelines)
  - [Merge requests](#merge-requests)
- [Available commands](#available-commands)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### IDE

> IF you are using the modern IDE please configure it properly

1. VSCode
    1. Install the following plugins:
        * `ext install streetsidesoftware.code-spell-checker` do not commit misspelled words or variables
        * `ext install Orta.vscode-jest` or `ext install WallabyJs.wallaby-vscode` we prefer TDD
        * `ext install esbenp.prettier-vscode` for codeStyle
        * `ext install shinnn.stylelint` for style linting
        * `ext install eg2.tslint` for typescript linting
        * `ext install asvetliakov.snapshot-tools` for checking the snapshot files before committing
1. PHPStorm/WebStorm
    1. Load settings from `config/jetBrains/settings.jar`

### Installation

We are using yarn so respect this. Just type `yarn` and you are ready to go

### <a name="commits"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the our change log**.

The commit message formatting can be added using a typical git workflow or through the use of a CLI
wizard ([Commitizen](https://github.com/commitizen/cz-cli)). To use the wizard, run `yarn cm`
in your terminal after staging your changes in git.

A detailed explanation borrowed from angular and can be found in this [document](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#).

### Merge requests

1. Code should be formated using [prettier](https://github.com/prettier/prettier)
1. All tests should pass before pushing (respect git hooks)

After submitting a merge request you can access a feature demo website available at "deploy/netlify" by clicking on "Details" link
![deploy/netlify](https://i.imgur.com/ni1tq8h.png)

## Available commands
|              Command  | Description                            |
|---------------------: |----------------------------------------|
| `yarn dev`            | Start development environment          |
| `yarn start`          | Start production environment           |
| `yarn start:storybook`| Start storybook                        |
| `yarn lint`           | Lint typescript files                  |
| `yarn lint:css`       | Lint scss/css files                    |
| `yarn test`           | Start test enviroiment for development |
| `yarn test:coverage`  | Display tests coverage                 |
| `yarn start:server`   | Test SSR locally                       |
