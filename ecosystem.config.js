module.exports = {
  apps: [
    {
      name: 'test',
      script: './dist/src/app.js',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
