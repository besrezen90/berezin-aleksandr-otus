module.exports = {
  apps: [
    {
      name: 'test-api-for-otus',
      script: 'dist/main.js',
      instances: 'max -1',
      watch: ['main'],
      watch_delay: 1000,
      ignore_watch: ['node_modules'],
    },
  ],
};
