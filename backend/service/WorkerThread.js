
const app = express();

app.get('/rent', function (req, res) {
  const worker = new Worker(__dirname + '/worker.js', {
    workerData: { ping: 'pong' },
  });
  worker.on('message', (total) => {
    
    res.status(200).json({ total :total});
  });
  worker.on('error', (err) => {
    res.status({ status: 500 }).json({ message: err.message });
  });
  worker.on('exit', (code) => {
    if (code !== 0) {
      res.status({ status: 500 }).json({ message: code });
    }
  });
  worker.postMessage('getMeThetotalValue');
});

app.get('/hello', function (req, res) {
  res.send(`hello world`);
});

