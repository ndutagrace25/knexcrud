exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sticker")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("sticker").insert([
        {
          title: "Test sticker",
          description: "This is a test sticker",
          rating: 4.2,
          url: "anything",
        },
      ]);
    });
};
