const { parentPort, workerData } = require('worker_threads');

function gettotal() {
    const selectedCategory = await Category.findById(req.body.type);
            
    const total= selectedCategory.rent * req.body.duration;
  
  return total;
}

parentPort.on('message', (param) => {
  console.log(param); // getMeThePiValue
  console.log(workerData); // { ping: 'pong'}
  const total = gettotal();
  parentPort.postMessage(total);
});