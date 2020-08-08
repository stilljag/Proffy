import Knex from 'knex';

export async function up (knex:Knex){
  return knex.schema.createTable('connections',table=>{
 
    table.integer('user_id').notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') //CASO SEJA ALTERADO O ID altera em todas tabelas
      .onDelete('CASCADE');//CASO SEJA DELETADO O ID altera em todas tabelas    

      table.timestamp('created_at')
      .defaultTo('now()')
      .notNullable();      
  });
}

export async function down(knex:Knex){
  return knex.schema.dropTable('connections');
}