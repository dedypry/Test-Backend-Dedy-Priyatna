const Joi = require('joi');
const JoiException = require('../exceptions/joiException');

async function insertValidation(req, res, next) {
  const schema = Joi.object({
    nama: Joi.string().required(),
    alamat: Joi.string().optional(),
    telp: Joi.string().optional(),
    catatan: Joi.string().optional(),
  });

  const {error} = schema.validate(req.body, {
    allowUnknown: false,
    abortEarly: false,
  });

  if (error) throw new JoiException(error);

  return next();
}

module.exports ={
  insertValidation,
};

