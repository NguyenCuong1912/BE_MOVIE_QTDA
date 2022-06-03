const express = require('express');
const { TypeUserRouter } = require('./TypeUser.routers');
const { userRouter } = require('./User.routers');

const rootRouter = express.Router();
rootRouter.use('/typeUsers', TypeUserRouter);
rootRouter.use('/users', userRouter);

module.exports = {
    rootRouter
}