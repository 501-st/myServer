const Router = require('express');
const apiController = require("../contollers/index");

const apiRouter = new Router();

apiRouter.post('/form', apiController.sendForm);

module.exports = apiRouter;
