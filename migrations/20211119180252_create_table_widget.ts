import { Knex } from 'knex'

const table = 'widget'

export async function up(knex: Knex) {
  await knex.schema.createTable(table, (table) => {
    table.increments()
    table.text('name')
    table.text('description')
  })
}

export async function down(knex: Knex) {
  await knex.schema.dropTable(table)
}
