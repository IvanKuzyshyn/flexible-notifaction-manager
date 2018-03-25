import express from 'express';

const router = express.Router();

export default function(passport) {
  router.post('/api/sign-up', passport.authenticate('sign-up'), (req, res) => {
    res.status(200).send(req.body);
  });

  router.post('/api/sign-in', passport.authenticate('sign-in'), (req, res) => {
    res.status(200).send(req.body);
  });

  return router;
}
