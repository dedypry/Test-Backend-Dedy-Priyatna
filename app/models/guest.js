const {Model} = require('objection');
const knex = require('./knex');
const objectionSoftDelete = require('objection-js-soft-delete');

Model.knex(knex);

/**
 * Define Soft Delete Module
 */
const softDelete = objectionSoftDelete.default({
  columnName: 'deleted_at',
  deletedValue: new Date(),
  notDeletedValue: null,
});

/**
 * @extends Model
 */
class GuestModel extends softDelete(Model) {
  /**
   * create action before insert in database
   */
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  /**
   * create action before update in database
   */
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  /**
   * It returns table name
   * @return {string} The table name
   */
  static get tableName() {
    return 'guest';
  }

  static get modifiers() {
    return {
      listDefault(query) {
        query.select(
            'id',
            'nama',
            'catatan',
        );
      },
    };
  }


  static table = this.tableName;
}

module.exports = GuestModel;
