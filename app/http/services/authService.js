const {DURATION, SHORT_HAND_UNIT} = require('../../enums/jwt');
const DataNotFound = require('../../exceptions/DataNotFound');
const userModel = require('../../models/user');
const {setToken} = require('../../utils/jwtToken');
const {comparePassword} = require('../../utils/string');


async function signInWithEmail(body) {
  const user = await userModel.query()
      .findOne({username: body.username});
  if (!user) throw new DataNotFound('Username Not Registered');
  //   compare password
  await comparePassword(user.password, body.password);
  const paramToken = {
    id: user.id,
    username: user.username,
  };
  return {
    ...paramToken,
    token: setToken(paramToken, {duration: DURATION, shorthandUnit: SHORT_HAND_UNIT}),
  };
}


module.exports ={
  signInWithEmail,
};
