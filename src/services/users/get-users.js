require('../../objection');
const { initOso } = require('../../oso');
const handler = require('../../utils/handler');
const { USERTYPE_ADMIN } = require('../../constants/users');

const User = require('../../models/User');

const main = handler(async (event) => {
  const oso = await initOso();
  await oso.authorize(new User(USERTYPE_ADMIN), 'view_all_users');

  // const allUsers = await User.query();

  return {
    time: event.requestContext.time,
    // users: allUsers,
  };
});

module.exports = {
  main,
};
