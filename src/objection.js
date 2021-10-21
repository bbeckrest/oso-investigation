import { Model } from 'objection';
import Knex from 'knex';

import knexConfig from './knexfile';

const knex = Knex(knexConfig); // initialize knex
Model.knex(knex); // bind models

export default knex;
