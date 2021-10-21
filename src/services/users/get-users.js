import '../../objection';
import { initOso } from '../../oso';
import handler from '../../utils/handler';
import { USERTYPE_ADMIN } from '../../constants/users';

const User = require('../../models/User');

// eslint-disable-next-line import/prefer-default-export
export const main = handler(async (event) => {
  const oso = await initOso();
  await oso.authorize(new User(USERTYPE_ADMIN), 'view_all_users');

  // const allUsers = await User.query();

  return {
    time: event.requestContext.time,
    // users: allUsers,
  };
});
