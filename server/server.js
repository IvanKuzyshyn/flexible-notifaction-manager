import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import passport from 'passport';
import helmet from 'helmet';

import config from './app/config';
import { connectDb } from './app/db/db';
import Builder from './app/builder';

// Bundles
import AuthenticationBundle from './bundles/AuthenticationBundle/AuthenticationBundle';
import TelegramBundle from './bundles/TelegramBundle/TelegramBundle';

const app = express();

app.use(helmet());
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO Refactor with accessible service
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(passport.initialize());
app.use(passport.session());

Builder.registerApp(app);
Builder.registerBundle(AuthenticationBundle);
Builder.registerBundle(TelegramBundle);
Builder.build();

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const startServer = () => {
  app.listen(config.port, () => {
    console.log(`Application started on http://localhost:${config.port}/`);
  });
};

connectDb()
  .on('error', console.error)
  .on('disconnected', connectDb)
  .once('open', startServer);
