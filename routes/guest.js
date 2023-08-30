const express = require('express');
const routes = new express.Router();
const version = process.env.VERSION_CONTROL || 'v1';

const guestController = require('../app/http/controllers/guestController');
const {handlerException} = require('../app/exceptions/handler');
const {auth} = require('../app/http/middleware/auth');
const {insertValidation} = require('../app/validations/guestValidation');

/* GET home page. */
routes.group('/api/'+version+'/guest', (router)=> {
  router.get('/',
      auth(),
      handlerException(guestController.index),
  );
  router.post('/',
      handlerException(insertValidation),
      handlerException(guestController.store),
  );
});
module.exports = routes;
