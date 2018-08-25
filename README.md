# libraries.io.js [![Build Status](https://api.travis-ci.org/ffflorian/libraries.io.js.svg?branch=master)](https://travis-ci.org/ffflorian/libraries.io.js/) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/libraries.io.js)](https://dependabot.com)

A [libraries.io](https://libraries.io) API client. For a documentation on the API see https://libraries.io/api.

## Usage

A complete documentation is available at https://ffflorian.github.io/libraries.io.js/.

```ts
import {LibrariesIO} from 'libraries.io';

const librariesIO = new LibrariesIO('my-api-key');

librariesIO.api.project.getProject('npm', 'grunt')
  .then(data => {
    // ...
  })

librariesIO.api.github.user.getUser('ffflorian')
  .then(data => {
    // ...
  })

librariesIO.api.platform.getPlatforms({page: 2, perPage: 5})
  .then(data => {
    // ...
  })

```

## Build and test

```
yarn
yarn test
```
