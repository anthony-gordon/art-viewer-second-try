exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('artworks').del()
      .then(function () {
        // Inserts seed entries
        return knex('artworks').insert([
            {id: 1, title: 'Lady blue', url: 'https://lh3.googleusercontent.com/FNl6Y0IQcus-m_bsYpab677LbhK3h49xyamX0xyWM33qXmmQTQTpeGko3AM2sc-g_8uoB9TARNg8FIbrWH-FT2Ov2nBxogvOCd9RVJkDUdoGjbgJPvfDCAjdm9iVXaaKHD5Czh581hMSzNtRmvE0DjxyDPR1qOvWfreu3E_r1exzcumbmvKw_WDtEUc1mZ4GI_UoAZ0DBGetPXtw5oQbSwPAeZxGjfqpgaj46uftnux9G6ZvcOLrJt1PmJBoKLUrL-9W1hLE89ORf1ja6Kbh1j63ZvDn3WA2jNoeIaW7i4Uv3XZAHvy1vUrnis2ZvKhcB5GvwJ84-JQSXwfWTN8c8q9lObJv1u4yCnjFW70d8LPolk_XQ4GNx_HnPlMCDMCdpi7V4D5B0_pisVISHoExPr-3vcM4dC6n8sJmbuLZVyvTDguSIQPec5DYgFzi7RvcIa1iMv3EqVQ6Y3Yy1lBrtYzfXC1NZ-jreLzNO0bPjqofinuohhtCs-ya1KtOy5S40wKmNbiCEV4js2YjnkxOf6A1OCjEDK2VZ8QwduA62bbr7T1_erAOFbtccel3qAnonSQ-Cyyk0NI074WrQenP1rRyR4snZbo_T6mz5KGr=w227-h297-no', contributor: 'Anthony'},
            {id: 2, title: 'Mauritius', url: 'https://lh3.googleusercontent.com/QOjsL3BDVc_IpH5swz7zjLHGYYT8h4vy88yK2NpIMPa8MGi_5-z5igPZhecpqwAtOKe4E-appWXtP1QNT5zEG40vrvZHH7ASVqwjmOdvgECmXCQULr3_nB_nRzkGy4jeHzq7DVNKnl2GbaP2pNRG9vjR12Da_BwBMO3-h80KtruO6QTall8W426bSI5DbaX4bzWb7cjbxMQdPGoiexklrvN6lRa_Z92xra5OB5WnZt83oBtg-5BZQ8pqCg5eF_-p6Po3LnJpXZ6LUwRYvZWrXcm6IlNgS8YBeGRjSRliCzSvz0h5S3UtxTNRCfhqURiM9sNLypB-AwBXX2QNpjByfvh5PpuPEhVyZJVx3P6VTS5B_C1oPNrGzJ4x9z_QTvGc2JbNmWs9vxgMCHc4a4W7YM877VdtLDUBhfn4hKKftHjR697IltVRzb99iaYxTMQV9gtFwEwR0v9Il8FHS_ljwAv1aP9ED_sMaD8qgzaHGVHKl7blxH5g1bQc2K9wWUMHtxWd0rpsh_iwvVmwPUtnNVLihR3Wu4p5u-FkQRsTcE7X18eqZbAN3BFMMSRhH_QXQi58B8S3Q2vWhbpD51cJa3TSw2Bz9lpr821hKPkP=w525-h698-no', contributor: 'Anthony'},
            {id: 3, title: 'Lady', url: 'https://lh3.googleusercontent.com/WzuoMaAVxPyokJOZOdZ5h1LdOwbiDUWxbnVvFJwF4OcZXfaznIjP8cXbyl75I0u-ieAPtODUYxI5SIDAUTzcEehcwsl6BSRcjjFtN4w0SWwMmRcRKHuanXyFi49UI-Z_4uJaejGgdRt6meyZ409P8ep9KPOOYtmaVoWWxdVCAdSgZgGYHe5jZd-EUbutjtx-dFvX4SwQhtsX2F4Bm2IJlX6sOCceAABYa-P2Ot_n1DjyLAr_JveRYrPjijivJufKFzvaoPl8ODUQDUSG6-ZUkjD14n04mzBKFCguPKD1XUArPs4tAt78rSWhcZKsH-nTfiPWDMf7S5bASG5xuH53UWeyZ1sewfuWRxQ1W0eB11eXldLT5CgMyCxo7KTmBxqPDx2B5fblItapm3NkaVDNrV4-ovHyFtPnQwbOHPm-bRa7M-WiKwN_ehDlQiCNwPuogxP17lTXQ5Bxd_keW6OfZ6ognEtHyUo77j6k9-wKZxx6utZM_nBnHk0yySZYOlk8Hof09NrRbWxOEWYQPVXexEGmCAxY5Zf-U74TlBIiwMv4KZRJLbEmjCBXoZeXH6ogZtggnhKuFxSKmEXMOxARkfjjDRwaXrf_Tosgkbx5=w282-h351-no', contributor: 'Anthony'}
  
         
          ]
        )})
  }