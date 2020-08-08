import Knex from 'knex';

export async function up (knex:Knex){
  return knex.schema.createTable('classes',table=>{
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id').notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') //CASO SEJA ALTERADO O ID altera em todas tabelas
      .onDelete('CASCADE');//CASO SEJA DELETADO O ID altera em todas tabelas    
  });
}

export async function down(knex:Knex){
  return knex.schema.dropTable('classes');
}