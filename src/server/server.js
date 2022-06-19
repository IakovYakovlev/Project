import express from 'express';
import ReactDOM from 'react-dom/server';
import { Header } from '../shared/Header';

const app = express();

app.get('/', (req, res) => {
  res.send(
    ReactDOM.renderToString(Header()),
  );
});

app.listen(3000, () => {
  console.log('server started on http://localhost:3000');
});