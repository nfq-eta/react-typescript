# React & typescript boilerplate [![Build is passing?](https://travis-ci.org/nfq-eta/react-typescript.svg?branch=master)](https://travis-ci.org/nfq-eta/react-typescript) [![Coverage Status](https://coveralls.io/repos/github/nfq-eta/react-typescript/badge.svg)](https://coveralls.io/github/nfq-eta/react-typescript) [![Waffle.io](https://badge.waffle.io/nfq-eta/react-typescript.svg?columns=Backlog,In%20Progress,Done)](https://waffle.io/nfq-eta/react-typescript)

## Why?
Make it fast as possible. Current development environment starts in <10s
Build time as fast as possible ~35s.
Bundle size should be minimum as possible
![performance](https://i.imgur.com/t3AS08T.png)

### How to start
1. `yarn` Install dependencies
1. Copy `.env.example` to `.env`
1. `yarn start` Start development
1. `yarn start:storybook` Start storybook
1. `yarn build` Build for production
1. Install [wallaby](https://wallabyjs.com/download/) plugin for you IDE
1. [Configure wallaby test runner](https://wallabyjs.com/docs/intro/install.html)
1. `yarn test` Run tests to check if everything is working
1. `yarn prepush` Run before each push
1. `yarn start:server` Start the server with SR (Server side rendering)

#### What's inside
* webpack v3
    * [dashboard](https://github.com/FormidableLabs/webpack-dashboard)
    * webpack settings with typescript
    * separated settings for development and production
* [typescript](https://www.typescriptlang.org/) v2.6
    * [tslint](https://palantir.github.io/tslint/) (lint typescript)
    * import json supported
    * [airbnb](https://github.com/airbnb/javascript) [coding style rules](https://github.com/progre/tslint-config-airbnb)
* react v16
    * [react hot loader](https://github.com/gaearon/react-hot-loader)
* redux
    * react-redux
    * redux-loger
    * hot reload
* scss/css [module](https://github.com/css-modules/css-modules)
    * [stylelint](https://github.com/stylelint/stylelint) (lint scss and css)
    * [auto typings](https://github.com/Quramy/typed-css-modules) for [css modules](https://github.com/Jimdo/typings-for-css-modules-loader)
    * [scss/css hot loader](https://github.com/shepherdwind/css-hot-loader)
* [jest](https://facebook.github.io/jest/) (for tests)
    * [enzyme](http://airbnb.io/enzyme/)
    * [wallaby](https://wallabyjs.com/) (for fast tests development)
* git
    * perfect [attributes](https://github.com/nfq-eta/react-typescript/blob/87722dafa58006fa6bf672110ffc6d87fe5ae8a5/.gitattributes)
    * [hooks](https://www.npmjs.com/package/husky) (run tasks before push)
* [travis](https://travis-ci.org) (for [deployment](https://github.com/nfq-eta/react-typescript/blob/6312bdfdbb62130f8df8581c99407f89c20f590c/.travis.yml))
* [yarn](https://yarnpkg.com/) (For better dependencies lock)
    * save [exact version](https://github.com/nfq-eta/react-typescript/blob/6312bdfdbb62130f8df8581c99407f89c20f590c/.yarnrc#L1)
    * [configured](https://github.com/nfq-eta/react-typescript/blob/6312bdfdbb62130f8df8581c99407f89c20f590c/.yarnrc#L2-L3) [releases](https://yarnpkg.com/lang/en/docs/cli/version/) `yarn version`
* [editorconfig](http://editorconfig.org/) (consistent coding styles for different IDE)
* IDE settings
    * [live templates](https://github.com/nfq-eta/react-typescript/blob/41feb9fd606e4f024ff3724703141aa899d595d9/config/jetBrains/settings.jar) for JetBrains
    * [settings](https://github.com/nfq-eta/react-typescript/tree/master/.vscode) for [Visual Studio Code](https://code.visualstudio.com/Download)
* SourceMaps
    * Source maps for typescript
    * Source maps for scss/css modules
* Storybook [Demo](https://nfq-eta.github.io/react-typescript/docs)
    * With actions
    * Addons

## Available commands
|              Command  | Description                            |
|---------------------: |----------------------------------------|
| `yarn start`          | Start development enviroiment          |
| `yarn start:storybook`| Start storybook                        |
| `yarn lint`           | Lint typescript files                  |
| `yarn lint:css`       | Lint scss/css files                    |
| `yarn test`           | Start test enviroiment for development |
| `yarn test:coverage`  | Display tests coverage                 |
| `yarn start:server`   | Test SSR locally                       |

## Contribute
## <a name="commits"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the our change log**.

The commit message formatting can be added using a typical git workflow or through the use of a CLI
wizard ([Commitizen](https://github.com/commitizen/cz-cli)). To use the wizard, run `yarn run cm`
in your terminal after staging your changes in git.

A detailed explanation borrowed from angular and can be found in this [document][commit-message-format].

## Todo
* [x] Automate Changelist.md
* [ ] E2E Tests
* [ ] i18n
* [ ] Red box for react errors?
* [x] Server side rendering
* [ ] Use redux-observable instead saga
* [ ] Assets (css, js) caching
* [ ] HMR route v4
* [ ] PWA

[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
