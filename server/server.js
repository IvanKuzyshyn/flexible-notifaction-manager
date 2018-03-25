import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import passport from 'passport';

import { PORT } from './app/config/server.config';
import { connectDb } from './app/db/db';
// Test features
import authenticatePassport from './bundles/AuthenticationBundle/passport/init';
import authenticationRoutes from './bundles/AuthenticationBundle/routes/api';

const app = express();

// app.use('/*', express.static(path.resolve(__dirname, '../public/index.html')));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO Refactor with accessible service
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(passport.initialize());
app.use(passport.session());

authenticatePassport(passport);

app.use('/', authenticationRoutes(passport));

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
