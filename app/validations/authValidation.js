const Joi = require('joi');
const JoiException = require('../exceptions/joiException');

async function loginValidation(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const {error} = schema.validate(req.body, {
    allowUnknown: false,
    abortEarly: false,
  });

  if (error) throw new JoiException(error);

  return next();
}

module.exports ={
  loginValidation,
};

