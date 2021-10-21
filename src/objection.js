const { Model } = require('objection');
const Knex = require('knex');

const knexConfig = require('./knexfile');

const knex = Knex(knexConfig); // initialize knex
Model.knex(knex); // bind models

module.exports = knex;
