const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

/**
 * Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: ALterar uma informaçõa do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft: SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */
 
app.listen(4545);