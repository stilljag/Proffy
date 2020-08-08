import Knex from 'knex';

export async function up (knex:Knex){
  return knex.schema.createTable('class_schedule',table=>{
    table.increments('id').primary();
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id').notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE') //CASO SEJA ALTERADO O ID altera em todas tabelas
      .onDelete('CASCADE');//CASO SEJA DELETADO O ID altera em todas tabelas    
  });
}

export async function down(knex:Knex){
  return knex.schema.dropTable('class_schedule');
}