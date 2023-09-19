const API_KEY = "5038a6366a98b8732265de28ec065915";
const requests = {
    // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, 
    fetchupcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,

};

export default requests;


    // https://api.themoviedb.org/3/trending/all/week?api_key=136b638c5beb3a351b1632c6291d5f56$&language=en-US

    // https://api.themoviedb.org/3/discover/tv?api_key=5038a6366a98b8732265de28ec065915&with_networks=213
    // 136b638c5beb3a351b1632c6291d5f56
//5038a6366a98b8732265de28ec065915

// const x = {
//     "page": 1,
//     "results": [
//       {
//         "backdrop_path": "/foGkPxpw9h8zln81j63mix5B7m8.jpg",
//         "first_air_date": "2019-12-20",
//         "genre_ids": [
//           18,
//           10759,
//           10765
//         ],
//         "id": 71912,
//         "name": "The Witcher",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "The Witcher",
//         "overview": "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
//         "popularity": 663.246,
//         "poster_path": "/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
//         "vote_average": 8.1,
//         "vote_count": 5035
//       },
//       {
//         "backdrop_path": "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
//         "first_air_date": "2016-07-15",
//         "genre_ids": [
//           18,
//           10765,
//           9648
//         ],
//         "id": 66732,
//         "name": "Stranger Things",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Stranger Things",
//         "overview": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
//         "popularity": 620.252,
//         "poster_path": "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
//         "vote_average": 8.6,
//         "vote_count": 15931
//       },
//       {
//         "backdrop_path": "/nh3n0jQeS0FgWH84kzyc8q5yLEp.jpg",
//         "first_air_date": "2012-06-03",
//         "genre_ids": [
//           37,
//           80,
//           18
//         ],
//         "id": 43901,
//         "name": "Longmire",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Longmire",
//         "overview": "A Wyoming sheriff rebuilds his life and career following the death of his wife. Based on the “Walt Longmire” series of mystery novels written by best-selling author Craig Johnson.",
//         "popularity": 509.614,
//         "poster_path": "/yrdt5lscyJ5j5GSbhl99x3SRN66.jpg",
//         "vote_average": 7.8,
//         "vote_count": 234
//       },
//       {
//         "backdrop_path": "/mAXOCbZzvmDa6PCh5dcIPOB51Qc.jpg",
//         "first_air_date": "2016-01-25",
//         "genre_ids": [
//           80,
//           10765
//         ],
//         "id": 63174,
//         "name": "Lucifer",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Lucifer",
//         "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
//         "popularity": 481.557,
//         "poster_path": "/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
//         "vote_average": 8.5,
//         "vote_count": 13747
//       },
//       {
//         "backdrop_path": "/iZu83GB1IM7VXL2X90m7iLHYUHU.jpg",
//         "first_air_date": "2018-09-24",
//         "genre_ids": [
//           18,
//           9648,
//           10765
//         ],
//         "id": 79696,
//         "name": "Manifest",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Manifest",
//         "overview": "After landing from a turbulent but routine flight, the crew and passengers of Montego Air Flight 828 discover five years have passed in what seemed like a few hours. As their new realities become clear, a deeper mystery unfolds and some of the returned passengers soon realize they may be meant for something greater than they ever thought possible.",
//         "popularity": 451.322,
//         "poster_path": "/eTemCphrglLKrXOsNRhYezHA7H9.jpg",
//         "vote_average": 7.7,
//         "vote_count": 1268
//       },
//       {
//         "backdrop_path": "/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg",
//         "first_air_date": "2018-05-02",
//         "genre_ids": [
//           10759,
//           18,
//           35
//         ],
//         "id": 77169,
//         "name": "Cobra Kai",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Cobra Kai",
//         "overview": "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.",
//         "popularity": 383.552,
//         "poster_path": "/m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
//         "vote_average": 8.2,
//         "vote_count": 5691
//       },
//       {
//         "backdrop_path": "/eVBJ5GYZT6Dt4MpN7sOd1UbtxRm.jpg",
//         "first_air_date": "2023-08-08",
//         "genre_ids": [
//           10764
//         ],
//         "id": 217945,
//         "name": "Zombieverse",
//         "origin_country": [
//           "KR"
//         ],
//         "original_language": "ko",
//         "original_name": "좀비버스",
//         "overview": "In Seoul, where a zombie virus outbreak has run amok, who will outwit the undead in the face of challenging quests and come out alive? In this exciting variety show, a group of celebrities complete quests and work together to survive a zombie virus outbreak.",
//         "popularity": 379.466,
//         "poster_path": "/wSJp469uR5nKuhDfMJgFWS58ATn.jpg",
//         "vote_average": 7.6,
//         "vote_count": 14
//       },
//       {
//         "backdrop_path": "/8UVzqlBMG3azowsi7f8lqZwhcBZ.jpg",
//         "first_air_date": "2016-09-21",
//         "genre_ids": [
//           18,
//           10768
//         ],
//         "id": 67026,
//         "name": "Designated Survivor",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Designated Survivor",
//         "overview": "Tom Kirkman, a low-level cabinet member is suddenly appointed President of the United States after a catastrophic attack during the State of the Union kills everyone above him in the Presidential line of succession.",
//         "popularity": 372.195,
//         "poster_path": "/5R125JAIh1N38pzHp2dRsBpOVNY.jpg",
//         "vote_average": 7.2,
//         "vote_count": 805
//       },
//       {
//         "backdrop_path": "/3Aj7j0xHXwGntChU1VaL9seBGIe.jpg",
//         "first_air_date": "2021-09-30",
//         "genre_ids": [
//           16,
//           10759
//         ],
//         "id": 129600,
//         "name": "Baki Hanma",
//         "origin_country": [
//           "JP"
//         ],
//         "original_language": "ja",
//         "original_name": "範馬刃牙",
//         "overview": "To gain the skills he needs to surpass his powerful father, Baki enters Arizona State Prison to take on the notorious inmate known as Mr. Unchained.",
//         "popularity": 366.455,
//         "poster_path": "/x145FSI9xJ6UbkxfabUsY2SFbu3.jpg",
//         "vote_average": 8.1,
//         "vote_count": 371
//       },
//       {
//         "backdrop_path": "/uCqXSfHymdbDMsFx8t0u0OPSuve.jpg",
//         "first_air_date": "2015-10-10",
//         "genre_ids": [
//           10759,
//           18,
//           10768
//         ],
//         "id": 63333,
//         "name": "The Last Kingdom",
//         "origin_country": [
//           "GB"
//         ],
//         "original_language": "en",
//         "original_name": "The Last Kingdom",
//         "overview": "A show of heroic deeds and epic battles with a thematic depth that embraces politics, religion, warfare, courage, love, loyalty and our universal search for identity. Combining real historical figures and events with fictional characters, it is the story of how a people combined their strength under one of the most iconic kings of history in order to reclaim their land for themselves and build a place they call home.",
//         "popularity": 361.363,
//         "poster_path": "/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
//         "vote_average": 8.3,
//         "vote_count": 1460
//       },
//       {
//         "backdrop_path": "/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
//         "first_air_date": "2017-07-21",
//         "genre_ids": [
//           80,
//           18
//         ],
//         "id": 69740,
//         "name": "Ozark",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Ozark",
//         "overview": "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
//         "popularity": 358.363,
//         "poster_path": "/m73bD8VjibSKuTWg597GQVyVhSb.jpg",
//         "vote_average": 8.2,
//         "vote_count": 1930
//       },
//       {
//         "backdrop_path": "/qFYDJUIFh8zgEDy3EvnHwhgOl0S.jpg",
//         "first_air_date": "2014-08-22",
//         "genre_ids": [
//           16,
//           35,
//           18
//         ],
//         "id": 61222,
//         "name": "BoJack Horseman",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "BoJack Horseman",
//         "overview": "Meet the most beloved sitcom horse of the 90s - 20 years later. BoJack Horseman was the star of the hit TV show \"Horsin' Around,\" but today he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
//         "popularity": 355.863,
//         "poster_path": "/pB9L0jAnEQLMKgexqCEocEW8TA.jpg",
//         "vote_average": 8.6,
//         "vote_count": 2025
//       },
//       {
//         "backdrop_path": "/wZMY9X8jtSS5GXFue2lvhgaJkii.jpg",
//         "first_air_date": "2011-12-04",
//         "genre_ids": [
//           10765,
//           18,
//           9648
//         ],
//         "id": 42009,
//         "name": "Black Mirror",
//         "origin_country": [
//           "GB"
//         ],
//         "original_language": "en",
//         "original_name": "Black Mirror",
//         "overview": "Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone - a black mirror of our 21st Century existence.",
//         "popularity": 342.772,
//         "poster_path": "/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg",
//         "vote_average": 8.3,
//         "vote_count": 4285
//       },
//       {
//         "backdrop_path": "/m6eRgkR1KC6Mr6gKx6gKCzSn6vD.jpg",
//         "first_air_date": "2008-10-03",
//         "genre_ids": [
//           10759,
//           16,
//           10765
//         ],
//         "id": 4194,
//         "name": "Star Wars: The Clone Wars",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Star Wars: The Clone Wars",
//         "overview": "Yoda, Obi-Wan Kenobi, Anakin Skywalker, Mace Windu and other Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.",
//         "popularity": 316.793,
//         "poster_path": "/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
//         "vote_average": 8.5,
//         "vote_count": 1724
//       },
//       {
//         "backdrop_path": "/138GLKdHorsdiG2pqHrIMw05Nc8.jpg",
//         "first_air_date": "2023-07-07",
//         "genre_ids": [
//           9648,
//           80,
//           18
//         ],
//         "id": 227975,
//         "name": "Fatal Seduction",
//         "origin_country": [
//           "ZA"
//         ],
//         "original_language": "en",
//         "original_name": "Fatal Seduction",
//         "overview": "A married professor is pulled into a passionate affair with a younger man that uncovers a path of tragedy and betrayal from those closest to her.",
//         "popularity": 309.158,
//         "poster_path": "/k98kivV3e8G0s6u2mdRXNhwoCQw.jpg",
//         "vote_average": 7.3,
//         "vote_count": 39
//       },
//       {
//         "backdrop_path": "/hMjvf1xGcCbbobFuM2iYR9Tj0Yr.jpg",
//         "first_air_date": "2022-04-22",
//         "genre_ids": [
//           18
//         ],
//         "id": 124834,
//         "name": "Heartstopper",
//         "origin_country": [
//           "GB"
//         ],
//         "original_language": "en",
//         "original_name": "Heartstopper",
//         "overview": "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
//         "popularity": 289.547,
//         "poster_path": "/p0AtD0ivSlHq2MHY6JFgyhNqAQY.jpg",
//         "vote_average": 8.7,
//         "vote_count": 954
//       },
//       {
//         "backdrop_path": "/qbxoEhlxNcyr7GjG2SXTShWn32m.jpg",
//         "first_air_date": "2018-06-26",
//         "genre_ids": [
//           16,
//           10759,
//           80,
//           18
//         ],
//         "id": 80623,
//         "name": "BAKI",
//         "origin_country": [
//           "JP"
//         ],
//         "original_language": "ja",
//         "original_name": "バキ",
//         "overview": "While martial arts champion Baki Hanma trains hard to surpass his legendary father, five violent death row inmates descend upon Tokyo to take him on.",
//         "popularity": 283.433,
//         "poster_path": "/j4bL0G8h8k49MuXKYfZqhXqk2rI.jpg",
//         "vote_average": 8.1,
//         "vote_count": 1134
//       },
//       {
//         "backdrop_path": "/50AYD7qqIz26oxjbZIsuNDqJFgb.jpg",
//         "first_air_date": "2013-07-11",
//         "genre_ids": [
//           35,
//           18
//         ],
//         "id": 1424,
//         "name": "Orange Is the New Black",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Orange Is the New Black",
//         "overview": "A crime she committed in her youthful past sends Piper Chapman to a women's prison, where she trades her comfortable New York life for one of unexpected camaraderie and conflict in an eccentric group of fellow inmates.",
//         "popularity": 283.107,
//         "poster_path": "/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg",
//         "vote_average": 7.7,
//         "vote_count": 2193
//       },
//       {
//         "backdrop_path": "/tl0mg7lOnS6tP8ngH0QwgMLQdpV.jpg",
//         "first_air_date": "2018-10-05",
//         "genre_ids": [
//           80,
//           9648,
//           18
//         ],
//         "id": 76669,
//         "name": "Elite",
//         "origin_country": [
//           "ES"
//         ],
//         "original_language": "es",
//         "original_name": "Élite",
//         "overview": "When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy.",
//         "popularity": 262.775,
//         "poster_path": "/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
//         "vote_average": 8.1,
//         "vote_count": 8792
//       },
//       {
//         "backdrop_path": "/mM3hsSMcfSEjREV3G8bC4o5EE4T.jpg",
//         "first_air_date": "2013-02-01",
//         "genre_ids": [
//           18
//         ],
//         "id": 1425,
//         "name": "House of Cards",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "House of Cards",
//         "overview": "Set in present day Washington, D.C., House of Cards is the story of Frank Underwood, a ruthless and cunning politician, and his wife Claire who will stop at nothing to conquer everything. This wicked political drama penetrates the shadowy world of greed, sex and corruption in modern D.C.",
//         "popularity": 258.973,
//         "poster_path": "/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg",
//         "vote_average": 8.1,
//         "vote_count": 2370
//       }
//     ],
//     "total_pages": 91,
//     "total_results": 1810
//   }