
exports.up = function(knex) {
  knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNulltable();
    table.string('email').notNulltable();
    table.string('whatsapp').notNulltable();
    table.string('city').notNulltable();
    table.string('uf', 2).notNulltable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
