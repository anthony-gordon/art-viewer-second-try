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
          url:
            "https://lh3.googleusercontent.com/kvJi_B-_7DmvwzwC0JaFARCh1tCSHzDGmtXMxCWBEgqTcHSlVvooy1o9y_kDDS2tAS9RIGovfZA-7jNAnXJ7iQeRW1QFdCy17NQbfs-2-2VtzmjFlU8abK8CvCIYQhUtKZYWZg6hd1JJVZuNl8KVHelTMiNSQOCsqCkBjjHlyBmjRZmnUJuEqL_JB2YKD0Q3izmdIEg3GA2PuICsSC4brLQ_6vnI4bajwUcNbnWW7O8IW2UCP4bc4EPyblPUxPrUOcHSo3KIUd5Wg_AuMovrKTpdaz1d74HctKmcET3KFT-gLXn0qryg7zbkypSyhEsQdqQKdwxxUV1XEgm4nz2n78bx9fkXTYiPiYwzjKCZQC3NQ7Q0_wjXuen4IaLWm2tsMPHThVXqJDxywiuviTsNTMr3THDCAOXciX8lLAh0U9VOxg5RwbsnkloxpicCBWtRxE2CgqHZpxbkcG2ThxkZOuRU5qIabBYrT4ig92mRmR_2ctfypfriDn3pbhg-XHa5iNmBj_OfTuAIyLIk6lvDpEjbQVq0H6KuxouvNpqp0qIdfQtjwVdIT-p3InMae915D8jKuaJE6UI3rnckKzPBs3Z1oLQndiSKq8n7wQsL=w900-h601-no",
          contributor: "Anthony"
        },
        {
          id: 2,
          title: "Background 2",
          description: "Blank wall",
          url:
            "https://lh3.googleusercontent.com/2Ya4kPVZNOCLpG5L4PMpsueTMxZWZW6R7JQfLeP8tiJhmFvreMY_RdUSiQHABZgAYI8LpJUW1AZ-bVHVavIxqcsRiTLYAYlJsjoAwPcECDkrMNlqpstZE_2yyoIAkK2mQFCi4mVVPvGF4vZw5r5X1CPS3mwHDljDwaUWuSvN0l-W3mKm-xpqlGK8NpG7Y57Hex6-ZpiSa5xeYfWHBg2h3oSbukZ1P153nWA710Z3WKuyYdqZm4WUM0nZlswbNSi8dkYEFhAiKjomPQnpKgWMV8bz245pVriZ3b141dd4SX7QifPKtYanurcJfhoQwS3-BD76w9QK-0E-mk-ymJD24Jbso87RjBEcqjA6sap2vSu9wLNrptP_NNplnAiXnEx_CI7CULJ2IoA5244tEOTaKwHZ0UeJt6dWPJ1xEXyt_10V6j0QsUN2LCiiIFcuvgcDMQE7PVFNoR5oooeyZlXpUkCftK0qRgsbnav22nmk1J34QZvshBNt43rfdmkm1abapzllduWBfMqAknMFNsprjcIkWkbB5NSjr39MFMXBjv0s-h1bQaUL9n_FPAIMICRLLwPF73fExxqtqpFeHbWVllRFrdFo4fljlRPNzGTv=w550-h370-no",
          contributor: "Anthony"
        },
        {
          id: 3,
          title: "Background 3",
          description: "Bedroom wall.",
          url:
            "https://lh3.googleusercontent.com/g52C2fz5fu_G9JP3hemUNQTTcc3nnNLrPdLimqOjUQ5C40isJhxGfvIO5_PZWvcRyHJmexlFKqYddZnBlyfhi84L1m-wJuZfXDB9D3tET-8ap1oIzJdbS1gUyP5f8Rd0UNlFIg2vEN3c3Mm9UOrL7eVScWFiPCY64XoQQZM7qoe1R3zmUm6nbABwgTNfDhUoQjhlgW4kZMjqGZ9N2QGLCuULmYk3nvH07jv1az53Dr-Hw88Dp3sc2AlaTyBr37gq-AA5fAq8nqnxyIez6cjOzkMuRq2YNyHUBk-kn6SBaWX1S3Y3AOZJjboUI621XK1mP5KV1NjivW3DYI0RGqRXFVeZ306aocpTu4JRLairiv7fwEz27FcvOgH1A5TSZQm54wDGquqC-K8nPgMZecRXvP97qO2IwwsoRGJU6H9re96PFBXPsZgM5Bt_3ACFWVYjsyB70RfdyRo6HtjaMTL8apHyqyZe29cLEP4voxp3ezKBueB6Y96MqQrEkzaVZAQefRmKOqZi2Mf83rVEuUzNke8grkRRtKmgnChO-lVdf-arytHmg2WmDX2Au9X9gvZ_e91JqyqgPju4Fp26tVDdZ0V1T_WpOLHlKE3Cxi-u=w900-h600-no",
          contributor: "Anthony"
        }
      ]);
    });
};
