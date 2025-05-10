const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', async (req, res) => {
    res.status(200).send('Hello World');
  }
);

app.listen(PORT, () => {
  console.log(`App (PID: ${process.pid}) is listening on port ${PORT}`);
});
