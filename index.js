const pkg = require('./package.json');
setInterval(() => console.log(pkg.name, Date.now()), 60000);