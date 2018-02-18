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

// TODO Refactor with accessible service
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// TODO: Replace to UserBundle controllers
app.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if(err) res.status(500).send('Error occurred when try to find users');

    res.send(users);
  });
});

// TODO: Replace to AuthenticateBundle controllers
app.post('/api/sign-up', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    console.log('SAVED USER', savedUser);

    res.status(200).send('User created!');
  } catch(error) {
    res.status(500).send(error);
  }
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
