import express from 'express';
const router = express.Router();
import animalRouter from './animal.router';

router.use('/animal', animalRouter);

router.use('*', (req, res, next) => {
    return  res.status(404)
        .send('Sorry page not found!  :(404');
});

export = router