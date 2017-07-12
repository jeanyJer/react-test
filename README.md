## iReading

[![Build Status](https://travis-ci.org/jeanyJer/react-test.svg?branch=master)](https://travis-ci.org/jeanyJer/react-test)

This repo is a boilerplate for React-Babel-Webpack project. You could use it as a base to build your own web app.

## Features

- Equip with React, ES6 & Babel 6
- Lint with ESlint
- Build with Webpack
- Support [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- Auto Open a new browser tab when Webpack loads, and reload the page when you modified the code

## How to use

First, clone the repo.

```bash
$ git clone https://github.com/jeanyJer/react-test.git 
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

From there, you start to develop your own code in the `app` directory. When you finish coding, use `yarn run build` to build the static files.

## License

MIT
