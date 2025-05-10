const cluster = require('cluster');
const os = require('os');
const path = require('path');

const numCPUs = os.cpus().length;

console.log(`Primary pid=${process.pid}`);

cluster.setupPrimary({
  exec: path.join(__dirname, 'index.js'),
});

for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}

cluster.on('exit', (worker, code, signal) => {
  console.log(`Worker ${worker.process.pid} has terminated.`);
  console.log('Initiating replacement worker.');
  cluster.fork();
});
