import { Model } from 'objection';

import { USERTYPE_ADMIN } from '../constants/users';

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
