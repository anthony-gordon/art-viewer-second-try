exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("backgrounds")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("backgrounds").insert([
        {
          id: 1,
          title: "Background 1",
          description: "Gallery wall",
          url: "https://i.imgur.com/9hD9lp5.jpg",
          contributor: "Anthony"
        },
        {
          id: 2,
          title: "Background 2",
          description: "Office wall",
          url: "https://i.imgur.com/AagTDTP.jpg",
          contributor: "Anthony"
        },
        {
          id: 3,
          title: "Background 3",
          description: "Bedroom wall.",
          url: "https://i.imgur.com/J9RSTHX.jpg",
          contributor: "Anthony"
        },
        {
          id: 4,
          title: "Background 4",
          description: "Pink wall.",
          url: "https://i.imgur.com/svZqZVq.jpg",
          contributor: "Anthony"
        }
      ]);
    });
};
