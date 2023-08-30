const SuccessResult = require('../../utils/SuccessResult');
const {list, insert} = require('../services/guestService');

async function index(req, res) {
  const data = await list();
  return SuccessResult.make(res).send(data);
}

async function store(req, res) {
  const data = await insert(req.body);
  return SuccessResult.make(res).sendMessageData(data, 'data berhasil disimpan');
}


module.exports = {
  index,
  store,
};
