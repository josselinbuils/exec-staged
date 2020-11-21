#!/usr/bin/env node

const childProcess = require('child_process');
const path = require('path');
let config;

try {
  config = require(path.join(process.cwd(), 'exec-staged.config.js'));
} catch (error) {
  throw new Error(`Unable to load config file: ${error.stack}`);
}

for (const { regex, commands } of config) {
  for (const command of commands) {
    const execCommand = `LIST=\`git diff-index --cached --name-only --diff-filter=d HEAD | grep -E "${regex}"\`; if [ "$LIST" ]; then echo ${command} $LIST; ${command} $LIST; fi`;

    try {
      childProcess.execSync(execCommand, {
        cwd: process.cwd(),
        stdio: [process.stdin, process.stdout, process.stderr],
      });
    } catch (e) {
      process.exit(1);
    }
  }
}
