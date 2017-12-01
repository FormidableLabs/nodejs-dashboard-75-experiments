console.log(`Node version: ${process.version}`);
console.log(`Number of env vars: ${Object.keys(process.env).length}`);
console.log("Env: node dashboard keys:");
Object.keys(process.env)
  .filter((k) => /nodejs[-_]dashboard_/.test(k))
  .forEach((k) => {
    console.log(`${k}: ${process.env[k]}`);
  });
console.log("Env: DONE");
