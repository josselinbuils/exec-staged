module.exports = [
  {
    regex: /\.(js)$/,
    commands: ['prettier --write', 'git add'],
  },
];
