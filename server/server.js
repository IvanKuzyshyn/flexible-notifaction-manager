import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { PORT } from './app/config/server.config';
import { connectDb } from './app/db/db';

const app = express();

app.use('/*', express.static(path.resolve(__dirname, '../public/index.html')));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const startServer = () => {
  app.listen(process.env.PORT || PORT, () => {
    console.log('Application started!');
  });
};

connectDb()
  .on('error', console.error)
  .on('disconnected', connectDb)
  .once('open', startServer);
