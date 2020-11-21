# exec-staged

Zero dependency lib to exec commands on staged files.

## Install

```bash
yarn add -D @josselinbuils/exec-staged
npm install --save-dev @josselinbuils/exec-staged
```

## Configuration

```js
// exec-staged.config.js

module.exports = [
  {
    regex: /\.(js)$/,
    commands: ['prettier --write', 'git add'],
  },
];
```

## Usage

```bash
exec-staged
```
