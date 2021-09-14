exports.up = function (knex) {
  return knex.schema.createTable("sticker",  (table)=> {
    table.increments("id").primary();
    table.text("title").notNullable();
    table.text("description");
    table.float("rating");
    table.text("url");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("sticker");
};
