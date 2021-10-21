const path = require('path');
const { Oso } = require('oso');

// import User from '../models/User'; // this works when class is exported as ES6
const User = require('../models/User'); // this never works

let oso;
let loadFilesPromise;

// eslint-disable-next-line import/prefer-default-export
async function initOso() {
  if (!oso) {
    oso = new Oso();

    oso.registerClass(User);

    if (!loadFilesPromise) {
      // avoid race condition by assigned promise synchronously
      loadFilesPromise = oso.loadFiles([path.join(__dirname, 'main.polar')]);
    }

    await loadFilesPromise;
  }

  return oso;
}

module.exports = {
  initOso,
};
