const UserModel = require('../../app/models/user');
const {generatePassword} = require('../../app/utils/string');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await UserModel.query().insert({
    username: 'admin',
    password: generatePassword('123456'),
  });
};
