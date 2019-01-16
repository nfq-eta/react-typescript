submitting## Thanks

Thanks for reading this. If you do so - you are probably ready to be an contributor. So lets follow basics setup of development environment.

## IDE

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

### Merge requests

1. Code should be formated using [prettier](https://github.com/prettier/prettier)
1. All tests should pass before pushing

After submitting a merge request you can access a feature demo website available at "deploy/netlify" by clicking on "Details" link
![deploy/netlify](https://i.imgur.com/ni1tq8h.png)

### Committing changes
 Always use `yarn cm` command to commit chances
