import express from 'express';


const app = express();

// test express

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((err, req, res, next) => {
  console.log('unhandled application error: ', err);
  res.status(500).send(err);
});

export default app
