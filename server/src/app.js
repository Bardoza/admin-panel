import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((err, req, res, next) => {
  console.log('unhandled application error: ', err);
  res.status(500).send(err);
});

export default app;
