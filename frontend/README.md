# Frontend

## Getting started

- `yarn install --ignore-optional`
- `yarn dev`

## Tools

- [plopjs](https://plopjs.com)
- [@a9g/plop-generator-react-atomic-component](https://www.npmjs.com/package/@a9g/plop-generator-react-atomic-component)
- [dependency-cruiser](https://github.com/sverweij/dependency-cruiser)
- [loki](https://storybook.js.org/addons/loki)

## Hooks

```json
{
  "husky": {
    "hooks": {
      "pre-commit: "lint-staged && yarn run visualize && git add ./.visualization/*"
    }
  }
}
```

## Scripts

- `dev` start development environment
- `dist` distribute current version
- `export` export current build
- `build` build
- `start` run via server
- `fix` fix codestyle
- `lint` lint code
- `lint:eslint` lint style and extended rules
- `lint:tsc` lint via compiler,
- `visualize` visualize all architecture variants,
- `visualize:architecture-raw` generate raw architecture data
- `visualize:architecture-overview` create architecture representation
- `visualize:architecture-detailed` create detailed architecture representation
- `storybook` start storybook
- `test` run tests
- `test:ci` run tests in ci environment,
- `test:visual` test visual regression,
- `test:visual:update` update visual regression base to current status

## Known quirks

### Failed to load SWC binary for darwin/arm64

You are running an M1 Mac, right?
To make `swc` work you need to install `@next/swc-linux-arm-gnueabihf` which is marked
as an optional dependency. You can install it via `yarn install` without the
` --ignore-optional` flag.
