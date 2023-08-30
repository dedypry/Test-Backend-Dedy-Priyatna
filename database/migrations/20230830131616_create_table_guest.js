
exports.up = async function(knex) {
  await knex.schema.createTable('guest', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('nama', 100);
    table.string('alamat');
    table.string('telp', 14);
    table.text('catatan');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at');
  });
};


exports.down = function(knex) {

};
