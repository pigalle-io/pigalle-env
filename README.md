[npm-badge]: https://img.shields.io/npm/v/@pigalle/core.env.svg
[npm-badge-url]: https://www.npmjs.com/package/@pigalle/core.env
[npm-downloads-badge]: https://img.shields.io/npm/dt/@pigalle/core.env.svg
[npm-downloads-url]: https://npmjs.org/package/@pigalle/core.env
[travis-badge]: https://img.shields.io/travis/pigalle-io/pigalle.core.env/false.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/pigalle-io/pigalle.core.env
[circle-badge]: https://circleci.com/gh/pigalle-io/pigalle.core.env/tree/false.svg?style=svg&circle-token=
[circle-badge-url]: https://circleci.com/gh/pigalle-io/pigalle.core.env/tree/false
[coveralls-badge]: https://coveralls.io/repos/github/pigalle-io/pigalle.core.env/badge.svg?branch=false
[coveralls-badge-url]: https://coveralls.io/github/pigalle-io/pigalle.core.env?branch=false
[codeclimate-badge]: https://img.shields.io/codeclimate/github/pigalle-io/pigalle.core.env.svg
[codeclimate-badge-url]: https://codeclimate.com/github/pigalle-io/pigalle.core.env
[ember-observer-badge]: http://emberobserver.com/badges/pigalle.core.env.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/pigalle.core.env
[license-badge]: https://img.shields.io/npm/l/@pigalle/core.env.svg
[license-badge-url]: LICENSE
[dependencies-badge]: https://img.shields.io/david/pigalle-io/pigalle.core.env.svg
[dependencies-badge-url]: https://david-dm.org/pigalle-io/pigalle.core.env
[devDependencies-badge]: https://img.shields.io/david/dev/pigalle-io/pigalle.core.env.svg
[devDependencies-badge-url]: https://david-dm.org/pigalle-io/pigalle.core.env#info=devDependencies
[greenkeeper-badge]: https://badges.greenkeeper.io/pigalle-io/pigalle.core.env.svg
[greenkeeper-badge-url]: https://greenkeeper.io/
[standardjs-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standardjs-badge-url]: https://standardjs.com


# pigalle.core.env

Environment variables manager for the Pigalle framework.


---
&#x26A0; <span style="color:red">**__Warning !__ Work in progress...**</span>
---



[![JavaScript Style Guide][standardjs-badge]][standardjs-badge-url]
[![Latest NPM release][npm-badge]][npm-badge-url]
[![NPM Downloads][npm-downloads-badge]][npm-downloads-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Test Coverage][coveralls-badge]][coveralls-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-badge-url]


## Table of Contents

* [Synopsis](#synopsis)
* [Usage](#usage)
* [Installation](#installation)
* [API Reference](#api-reference)
* [Tests](#tests)
  * [Run unit tests](#tests_run-unit-tests)
* [Build](#build)
  * [Documentation](#generate-documentation)
    * [Generate README](#generate-documentation-readme)
    * [Generation API reference](#generate-documentation-api)
* [Compatibility](#compatibility)
  * [Node](#compatibility_node)
  * [Browser](#compatibility_browser)
* [Issues](#issues)
* [Contributing](#contributing)

* [History](#history)
* [License](#license)

## <a name="synopsis"> Synopsis

Environment variables manager for the Pigalle framework.

## <a name="usage"> Usage

``` javascript

const {PigalleEnv} = require('@pigalle/core.env')

const data = {
  NODE_ENV: 'production',
  SECRET_KEY: 'my_secret_key'
}

// Create a {PigalleEnv} instance to store environment variables.
const env = PigalleEnv.factory(data)


```
## <a name="installation"> Installation

```
npm install @pigalle/core.env
```

## <a name="api-reference"> API Reference

Please refer to [API documentation](https://@pigalle/coreenv.readthedocs.io) hosted by [Read the Docs](https://readthedocs.org/).

## <a name="test"> Tests

### <a name="tests_run-unit-tests"> Run unit tests

```
npm test
```
 
## <a name="build"> Build

### <a name="generate-documentation"> Documentation

#### <a name="generate-documentation-readme"> Generate README

**Be careful!** :

* [README](README.md) is generated using [a settings file](./.docgen4.yml) and templates provided by [gulp-docgen4node-readme](https://github.com/9fv/gulp-docgen4node-readme).
* Please **only** modify related [settings](./.docgen4.yml).
* Then you can generate documentation using the following command:
  ```
  npm run docs
  ```

#### <a name="generate-documentation-api"> Generate API documentation

The [API documentation](https://@pigalle/coreenv.readthedocs.io) is automatically generated using [Read the Docs](https://readthedocs.org).

## <a name="compatibility"> Compatibility

### <a name="compatibility_node"> Node


* Tested with [Node 9](https://nodejs.org/dist/latest-v9.x/docs/api/).

### <a name="compatibility_browser"> Browser

N/A


## <a name="issues"> Issues

Feel free to [submit issues](pigalle-io/pigalle.core.env/issues) and enhancement requests.

## <a name="contributing"> Contributing

Please refer to project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

**NOTE**: Be sure to merge the latest from "upstream" before making a pull request!



## <a name="history"> History

Please refer to [the changelog file](docs/CHANGELOG.md).

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c)  [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

