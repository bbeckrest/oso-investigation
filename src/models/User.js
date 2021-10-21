const { Model } = require('objection');

const { USERTYPE_ADMIN } = require('../constants/users');

module.exports = class User extends Model {
  #userType;

  constructor(userType) {
    super();

    this.#userType = userType;
  }

  get userType() {
    return this.#userType;
  }

  get isAdmin() {
    return this.userType === USERTYPE_ADMIN;
  }

  // objection stuff
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'user_id';
  }
};
