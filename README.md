# React & typescript boilerplate [![Build is passing?](https://travis-ci.org/nfq-eta/react-typescript.svg?branch=master)](https://travis-ci.org/nfq-eta/react-typescript) [![Coverage Status](https://coveralls.io/repos/github/nfq-eta/react-typescript/badge.svg)](https://coveralls.io/github/nfq-eta/react-typescript) [![Waffle.io](https://badge.waffle.io/nfq-eta/react-typescript.svg?columns=Backlog,In%20Progress,Done)](https://waffle.io/nfq-eta/react-typescript)
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

## Why?
Make it fast as possible. Current development environment starts in <10s
Build time as fast as possible ~35s.
Bundle size should be minimum as possible
![performance](https://i.imgur.com/t3AS08T.png)

## Table of contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [How to start](#how-to-start)
    - [What's inside](#whats-inside)
- [Todo](#todo)
- [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### How to start
1. `yarn` Install dependencies
1. Copy `.env.example` to `.env`
1. `yarn start` Start development
1. `yarn start:storybook` Start storybook
1. `yarn build` Build for production
  * **Optional:** Install [wallaby](https://wallabyjs.com/download/) plug-in for you IDE
1. [Configure wallaby test runner](https://wallabyjs.com/docs/intro/install.html)
1. `yarn test` Run tests to check if everything is working
1. `yarn prepush` Run before each push
1. `yarn start:server` Start the server with SR (Server side rendering)

#### What's inside
* webpack v3
    * [dashboard](https://github.com/FormidableLabs/webpack-dashboard)
    * webpack settings with typescript
    * separated settings for development and production
* [typescript](https://www.typescriptlang.org/) v2.8
    * import json supported
    * [tslint](https://palantir.github.io/tslint/) (lint typescript)
    * [prettier](https://github.com/prettier/prettier) Automatic code formatter
* SourceMaps
    * Source maps for typescript
    * Source maps for scss/css modules
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
    * [attributes](https://github.com/nfq-eta/react-typescript/blob/87722dafa58006fa6bf672110ffc6d87fe5ae8a5/.gitattributes)
    * [hooks](https://www.npmjs.com/package/husky) (run tasks before push)
* [travis](https://travis-ci.org) (for [deployment](https://github.com/nfq-eta/react-typescript/blob/6312bdfdbb62130f8df8581c99407f89c20f590c/.travis.yml))
* [yarn](https://yarnpkg.com/) (For better dependencies lock)
    * save [exact version](https://github.com/nfq-eta/react-typescript/blob/6312bdfdbb62130f8df8581c99407f89c20f590c/.yarnrc#L1)
    * [configured](https://github.com/nfq-eta/react-typescript/blob/6312bdfdbb62130f8df8581c99407f89c20f590c/.yarnrc#L2-L3) [releases](https://yarnpkg.com/lang/en/docs/cli/version/) `yarn version`
* [editorconfig](http://editorconfig.org/) (consistent coding styles for different IDE)
* IDE settings
    * [live templates](https://github.com/nfq-eta/react-typescript/blob/41feb9fd606e4f024ff3724703141aa899d595d9/config/jetBrains/settings.jar) for JetBrains
    * [settings](https://github.com/nfq-eta/react-typescript/tree/master/.vscode) for [Visual Studio Code](https://code.visualstudio.com/Download)
* Storybook [Demo](https://nfq-eta.github.io/react-typescript/docs)
    * With actions
    * Addons

## Todo
* [x] Automate Changelist.md
* [ ] E2E Tests
* [ ] i18n
* [ ] Red box for react errors?
* [x] Server side rendering
* [ ] Use redux-observable instead saga
* [ ] Assets (css, js) caching
* [x] HMR route v4
* [ ] PWA

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/468006?v=4" width="100px;"/><br /><sub><b>Vytenis</b></sub>](https://github.com/FDiskas)<br />[🐛](https://github.com/FDiskas/react-typescript/issues?q=author%3AFDiskas "Bug reports") [💻](https://github.com/FDiskas/react-typescript/commits?author=FDiskas "Code") [📖](https://github.com/FDiskas/react-typescript/commits?author=FDiskas "Documentation") [📋](#eventOrganizing-FDiskas "Event Organizing") [💡](#example-FDiskas "Examples") [🤔](#ideas-FDiskas "Ideas, Planning, & Feedback") [🚇](#infra-FDiskas "Infrastructure (Hosting, Build-Tools, etc)") [👀](#review-FDiskas "Reviewed Pull Requests") [🔧](#tool-FDiskas "Tools") | [<img src="https://avatars3.githubusercontent.com/u/12097258?v=4" width="100px;"/><br /><sub><b>Genadij Bojev</b></sub>](https://github.com/gennbo)<br />[🐛](https://github.com/FDiskas/react-typescript/issues?q=author%3Agennbo "Bug reports") [💻](https://github.com/FDiskas/react-typescript/commits?author=gennbo "Code") | [<img src="https://avatars0.githubusercontent.com/u/17545646?v=4" width="100px;"/><br /><sub><b>Aivaras</b></sub>](https://github.com/aivaras-b)<br />[👀](#review-aivaras-b "Reviewed Pull Requests") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
