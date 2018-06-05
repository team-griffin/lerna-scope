# lerna-scope
Run scoped commands within lerna packages

This is a super simple tool that lets you run scripts from within a package

## Example
```
# we're currently in "project/packages/my-package"
lerna-scope test
```
this is the equivalent to writing
```
cd ../../
yarn lerna --scope=my-package exec yarn test
cd packages/my-package
```

## Installation
```
npm i -g @team-griffin/lerna-scope
```

## Usage
You can pass any valid lerna command and it will use it:
```
lerna-scope run someScript
lerna-scope exec someCommand
lerna-scope add someDependency
```
if you don't provide a lerna command, it will assume you want to do `exec yarn`. For example:
```
lerna-scope test
# equivalent to
lerna-scope exec yarn test
```

## Prerequesits
- You must be using lerna in your project (obviously)
- By default, we use the locally-installed lerna (i.e. `yarn lerna ...`). If you want to use a globally installed version, you must provide a `mode` flag
- By default, we assume your packages live in a `packages` directory. If you want to point to a different locaiton, you must provide a `dir` flag

## Flags
### mode
`'local' | 'global'`
Whether to use a local installation of lerna or a global one. Set to `local` by default.

### dir
`string`  
The directory that your packages live in. `packages` by default.
