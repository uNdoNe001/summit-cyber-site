module.exports = {
  apps: [
    {
      name: "summit",
      cwd: "/var/www/summit",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
        HOST: "0.0.0.0"
      }
    }
  ]
}
