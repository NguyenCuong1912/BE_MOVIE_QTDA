const express = require('express');
const { cinemasRouter } = require('./Cinema.router');
const { filmsRouter } = require('./Film.routers');
const { groupCinemasRouter } = require('./GroupCinema.router');
const { roomRouter } = require('./Room.router');
const { TypeUserRouter } = require('./TypeUser.routers');
const { userRouter } = require('./User.routers');
const { seatRouter } = require('./Seat.router');


const rootRouter = express.Router();
rootRouter.use('/typeUsers', TypeUserRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/films', filmsRouter);
rootRouter.use('/cinemas', cinemasRouter);
rootRouter.use('/groupCinemas', groupCinemasRouter);
rootRouter.use('/rooms', roomRouter);
rootRouter.use('/seats', seatRouter);



module.exports = {
    rootRouter
}