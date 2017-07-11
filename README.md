This repo is a boilerplate for React-Babel-Webpack project. You could use it as a base to build your own web app.

## Features

- Equip with React, ES6 & Babel 6
- Lint with ESlint and Airbnb's style sheet.
- Build with Webpack（support Webpack 1 & Webpack 2）
- Support [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- Auto Open a new browser tab when Webpack loads, and reload the page when you modified the code
- Use [Commitizen](https://github.com/commitizen/cz-cli) to produce commit message according to [AngularJS convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)

## How to use

First, clone the repo.

```bash
$ git clone https://github.com/ruanyf/react-babel-webpack-boilerplate.git <yourAppName>
$ cd <yourAppName>
```

**Important**: `master` branch only supports Webpack 1. If you want to use Webpack 2, please switch to `webpack2` branch which will be the default branch in the near future.

```bash
# only run the command when you want to use Webpack 2
$ git checkout webpack2
```

Second, delete the old `.git` history and initialize new history.

```bash
$ rm -rf .git
$ git init
```


Third, install the dependencies.

```bash
$ yarn
```

Then, launch the boilerplate app.

```bash
$ yarn start
```

Last, You need update `package.json` and modify fields like `name`, `version`, `description`, `keywords`, `author`, `license` and so on to fit your project.

From there, you start to develop your own code in the `app` directory. When you finish coding, use `npm run build` or `npm run deploy` to build the static files.

Attention, when committing your code, you should use [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines). Otherwise, the repo will throw an error. If you use `npm run commit` instead of `git commit`, the command will help you to produce a formatted commit message.

## License

MIT
