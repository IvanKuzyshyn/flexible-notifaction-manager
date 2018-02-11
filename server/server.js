import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { PORT } from './app/config/server.config';
import { connectDb } from './app/db/db';

// Test features
import User from './bundles/UserBundle/models/User';

const app = express();

// app.use('/*', express.static(path.resolve(__dirname, '../public/index.html')));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO: Replace to UserBundle controllers
app.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if(err) res.status(500).send('Error occurred when try to find users');

    res.send(users);
  });
});

const startServer = () => {
  app.listen(process.env.PORT || PORT, () => {
    console.log('Application started!');
  });
};

connectDb()
  .on('error', console.error)
  .on('disconnected', connectDb)
  .once('open', startServer);
