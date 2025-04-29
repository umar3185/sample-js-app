module.exports = {
    apps: [
      {
        name: 'my-app',           // Name of your app shown in PM2 process list
        script: 'app.js',         // Entry point of your app
        instances: 1,             // Number of instances to run (use 'max' for all CPU cores)
        autorestart: true,        // Automatically restart on crash
        watch: false,             // Set to true if you want PM2 to restart on file changes
        max_memory_restart: '200M', // Restart if memory exceeds 512MB
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  