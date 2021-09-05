const Router = require('express');
const apiController = require("../contollers/index");
/*const {check} = require("express-validator");

const formCheck = [
    check('name', "Name cannot be empty").notEmpty(),
    check('phoneNumber', "Phone number cannot be empty").notEmpty(),
    check('message', "Message cannot be empty").notEmpty(),
]*/

const apiRouter = new Router();

/*apiRouter.post('/form', ...formCheck, apiController.sendForm);*/

apiRouter.post('/form', apiController.sendForm);

module.exports = apiRouter;
