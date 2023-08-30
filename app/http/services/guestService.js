const GuestModel = require('../../models/guest');

async function list() {
  return await GuestModel.query().modify('listDefault');
}

async function insert(body) {
  return await GuestModel.query()
      .insert({
        nama: body.nama,
        alamat: body.alamat,
        telp: body.telp,
        catatan: body.catatan,
      });
}

module.exports = {
  insert,
  list,
};
