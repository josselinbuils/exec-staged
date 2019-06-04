# exec-staged

Zero dependency lib to exec commands on staged files.

## Install

```bash
yarn add --dev @josselinbuils/exec-staged
npm install --save-dev @josselinbuils/exec-staged
```

## Usage

```bash
exec-staged 'command' 'regex-filter'
```

Example of npm script:
```json
{
  "prettier:staged": "exec-staged 'prettier --write' '.*\\.js$'"
}
```
