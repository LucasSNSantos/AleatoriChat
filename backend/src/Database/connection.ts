import * as config from '../../knexfile';
import knex from 'knex';



export default knex(config.default.development);
