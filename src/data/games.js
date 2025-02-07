// File: src/data/games.js
const games = [
    {
      name: "8 Ball Pool",
      slug: "8-ball-pool",
      endpoint: "https://cek-id-games.vercel.app/api/game/8-ball-pool",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "ASTRA: Knights of Veda",
      slug: "astra-knights-of-veda",
      endpoint: "https://cek-id-games.vercel.app/api/game/astra-knights-of-veda",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/astra-knights-of-veda"
    },
    {
      name: "AU2 Mobile",
      slug: "au2-mobile",
      endpoint: "https://cek-id-games.vercel.app/api/game/au2-mobile",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Advent of God:Legends",
      slug: "advent-of-godlegends",
      endpoint: "https://cek-id-games.vercel.app/api/game/advent-of-godlegends",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/advent-of-godlegends"
    },
    {
      name: "Aether Gazer",
      slug: "aether-gazer",
      endpoint: "https://cek-id-games.vercel.app/api/game/aether-gazer",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Among Heroes: Fantasy Samkok",
      slug: "among-heroes-fantasy-samkok",
      endpoint: "https://cek-id-games.vercel.app/api/game/among-heroes-fantasy-samkok",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/among-heroes-fantasy-samkok"
    },
    {
      name: "Angel Squad (DG)",
      slug: "angel-squad-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/angel-squad-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "AoV (DG)",
      slug: "aov-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/aov-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Arena Breakout",
      slug: "arena-breakout",
      endpoint: "https://cek-id-games.vercel.app/api/game/arena-breakout",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Arena Mania: Magic Heroes",
      slug: "arena-mania-magic-heroes",
      endpoint: "https://cek-id-games.vercel.app/api/game/arena-mania-magic-heroes",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/arena-mania-magic-heroes"
    },
    {
      name: "Arena of Valor",
      slug: "arena-of-valor",
      endpoint: "https://cek-id-games.vercel.app/api/game/arena-of-valor",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Asphalt 9: Legends",
      slug: "asphalt-9-legends",
      endpoint: "https://cek-id-games.vercel.app/api/game/asphalt-9-legends",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/asphalt-9-legends"
    },
    {
      name: "Astral Guardians: Cyber Fantasy",
      slug: "astral-guardians-cyber-fantasy",
      endpoint: "https://cek-id-games.vercel.app/api/game/astral-guardians-cyber-fantasy",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/astral-guardians-cyber-fantasy"
    },
    {
      name: "Atlantica Online (DG)",
      slug: "atlantica-online-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/atlantica-online-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Auto Chess ",
      slug: "auto-chess",
      endpoint: "https://cek-id-games.vercel.app/api/game/auto-chess",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Azur Lane",
      slug: "azur-lane",
      endpoint: "https://cek-id-games.vercel.app/api/game/azur-lane",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/azur-lane"
    },
    {
      name: "BLEACH Mobile 3D",
      slug: "bleach-mobile-3d",
      endpoint: "https://cek-id-games.vercel.app/api/game/bleach-mobile-3d",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/bleach-mobile-3d"
    },
    {
      name: "Badlanders",
      slug: "badlanders",
      endpoint: "https://cek-id-games.vercel.app/api/game/badlanders",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/badlanders"
    },
    {
      name: "BarbarQ",
      slug: "barbarq",
      endpoint: "https://cek-id-games.vercel.app/api/game/barbarq",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Basketrio",
      slug: "basketrio",
      endpoint: "https://cek-id-games.vercel.app/api/game/basketrio",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/basketrio"
    },
    {
      name: "Battlenet (DG)",
      slug: "battlenet-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/battlenet-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Be The King: Judge Destiny",
      slug: "be-the-king-judge-destiny",
      endpoint: "https://cek-id-games.vercel.app/api/game/be-the-king-judge-destiny",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/be-the-king-judge-destiny"
    },
    {
      name: "Bilibili (DG)",
      slug: "Bilibili-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/Bilibili-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Blade X: Odyssey of Heroes",
      slug: "blade-x-odyssey-of-heroes",
      endpoint: "https://cek-id-games.vercel.app/api/game/blade-x-odyssey-of-heroes",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Bleach Mobile 3D (DG)",
      slug: "bleach-mobile-3d-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/bleach-mobile-3d-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/bleach-mobile-3d-dg"
    },
    {
      name: "Blizzard Gift Card (DG)",
      slug: "blizzard-gift-card-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/blizzard-gift-card-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Blood Strike",
      slug: "blood-strike",
      endpoint: "https://cek-id-games.vercel.app/api/game/blood-strike",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/blood-strike"
    },
    {
      name: "Blood Strike (DG)",
      slug: "blood_strike-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/blood_strike-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Boxing Star (DG)",
      slug: "boxing-star-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/boxing-star-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Call of Duty Mobile",
      slug: "call-of-duty-mobile",
      endpoint: "https://cek-id-games.vercel.app/api/game/call-of-duty-mobile",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Call of Duty Mobile (DG)",
      slug: "call-of-duty-mobile-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/call-of-duty-mobile-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Captain Tsubasa: Ace",
      slug: "captain-tsubasa-ace",
      endpoint: "https://cek-id-games.vercel.app/api/game/captain-tsubasa-ace",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Captain Tsubasa: Dream Team",
      slug: "captain-tsubasa-dream-team",
      endpoint: "https://cek-id-games.vercel.app/api/game/captain-tsubasa-dream-team",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "City of Crime: Gang Wars",
      slug: "city-of-crime-gang-wars",
      endpoint: "https://cek-id-games.vercel.app/api/game/city-of-crime-gang-wars",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Cloud Song: Saga of Skywalkers",
      slug: "cloud-song-saga-of-skywalkers",
      endpoint: "https://cek-id-games.vercel.app/api/game/cloud-song-saga-of-skywalkers",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Cooking Adventure",
      slug: "cooking-adventure",
      endpoint: "https://cek-id-games.vercel.app/api/game/cooking-adventure",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Crasher Origin",
      slug: "crasher-origin",
      endpoint: "https://cek-id-games.vercel.app/api/game/crasher-origin",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/crasher-origin"
    },
    {
      name: "Crisis Action",
      slug: "crisis-action",
      endpoint: "https://cek-id-games.vercel.app/api/game/crisis-action",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/crisis-action"
    },
    {
      name: "DEAD TARGET: Zombie Games 3D",
      slug: "dead-target-zombie-games-3d",
      endpoint: "https://cek-id-games.vercel.app/api/game/dead-target-zombie-games-3d",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "DG Mini Games (DG)",
      slug: "dg-mini-games-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/dg-mini-games-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Dark Continent: Mist",
      slug: "dark-continent-mist",
      endpoint: "https://cek-id-games.vercel.app/api/game/dark-continent-mist",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/dark-continent-mist"
    },
    {
      name: "Diablo: Immortal",
      slug: "diablo-immortal",
      endpoint: "https://cek-id-games.vercel.app/api/game/diablo-immortal",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Disney Magic Kingdoms",
      slug: "disney-magic-kingdoms",
      endpoint: "https://cek-id-games.vercel.app/api/game/disney-magic-kingdoms",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Disorder",
      slug: "disorder",
      endpoint: "https://cek-id-games.vercel.app/api/game/disorder",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/disorder"
    },
    {
      name: "Domino QiuQiu TopFun",
      slug: "domino-qiuqiu-topfun",
      endpoint: "https://cek-id-games.vercel.app/api/game/domino-qiuqiu-topfun",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Dragon City",
      slug: "dragon-city",
      endpoint: "https://cek-id-games.vercel.app/api/game/dragon-city",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Dragon Raja",
      slug: "dragon-raja",
      endpoint: "https://cek-id-games.vercel.app/api/game/dragon-raja",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Dragon Raja (DG)",
      slug: "dragon-raja-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/dragon-raja-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "DreadOut (DG)",
      slug: "dreadout-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/dreadout-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Dynastones (DG)",
      slug: "dynastones-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/dynastones-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "EA SPORTS FC Mobile",
      slug: "ea-sports-fc-mobile",
      endpoint: "https://cek-id-games.vercel.app/api/game/ea-sports-fc-mobile",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "EA Sports FC Mobile (DG)",
      slug: "ea-sports-fc-mobile-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/ea-sports-fc-mobile-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "EGGY PARTY",
      slug: "eggy-party",
      endpoint: "https://cek-id-games.vercel.app/api/game/eggy-party",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/eggy-party"
    },
    {
      name: "EOS RED",
      slug: "eos-red",
      endpoint: "https://cek-id-games.vercel.app/api/game/eos-red",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/eos-red"
    },
    {
      name: "Echocalypse",
      slug: "echocalypse",
      endpoint: "https://cek-id-games.vercel.app/api/game/echocalypse",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/echocalypse"
    },
    {
      name: "Eggy Party (DG)",
      slug: "eggy_party-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/eggy_party-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Elemental Titans: 3D Idle Arena",
      slug: "elemental-titans-3d-idle-arena",
      endpoint: "https://cek-id-games.vercel.app/api/game/elemental-titans-3d-idle-arena",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/elemental-titans-3d-idle-arena"
    },
    {
      name: "Embers: Last Duel",
      slug: "embers-last-duel",
      endpoint: "https://cek-id-games.vercel.app/api/game/embers-last-duel",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Entropy 2099",
      slug: "entropy-2099",
      endpoint: "https://cek-id-games.vercel.app/api/game/entropy-2099",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Era of Celestials",
      slug: "era-of-celestials",
      endpoint: "https://cek-id-games.vercel.app/api/game/era-of-celestials",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/era-of-celestials"
    },
    {
      name: "Fantasi Tiga Kerajaan: Perang",
      slug: "fantasi-tiga-kerajaan-perang",
      endpoint: "https://cek-id-games.vercel.app/api/game/fantasi-tiga-kerajaan-perang",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/fantasi-tiga-kerajaan-perang"
    },
    {
      name: "Farlight 84",
      slug: "farlight-84",
      endpoint: "https://cek-id-games.vercel.app/api/game/farlight-84",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Food Fantasy Crystal",
      slug: "food-fantasy-crystal",
      endpoint: "https://cek-id-games.vercel.app/api/game/food-fantasy-crystal",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Football Master 2",
      slug: "football-master-2",
      endpoint: "https://cek-id-games.vercel.app/api/game/football-master-2",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Football Master 2 (DG)",
      slug: "football-master-2-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/football-master-2-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Fortnite (DG)",
      slug: "fortnite-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/fortnite-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Free Fire",
      slug: "free-fire",
      endpoint: "https://cek-id-games.vercel.app/api/game/free-fire",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Free Fire MAX",
      slug: "free-fire-max",
      endpoint: "https://cek-id-games.vercel.app/api/game/free-fire-max",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Game Speed Up (DG)",
      slug: "game-speed-up-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/game-speed-up-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Game Speed Up Bundling (DG)",
      slug: "game-speed-up-bundling-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/game-speed-up-bundling-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "GameMax COD Warzone  (DG)",
      slug: "gamemax-cod-warzone-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/gamemax-cod-warzone-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "GameQoo Bundling (DG)",
      slug: "gameqoo_bundling-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/gameqoo_bundling-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "GamesMAX Booster DG Rings (DG)",
      slug: "gamesmax-booster-dg-rings-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/gamesmax-booster-dg-rings-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "GamesMax (DG)",
      slug: "gamesmax-booster-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/gamesmax-booster-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Generation Zombie",
      slug: "generation-zombie",
      endpoint: "https://cek-id-games.vercel.app/api/game/generation-zombie",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Genshin Impact",
      slug: "genshin-impact",
      endpoint: "https://cek-id-games.vercel.app/api/game/genshin-impact",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/genshin-impact"
    },
    {
      name: "Genshin Impact (DG)",
      slug: "genshin-crystal-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/genshin-crystal-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/genshin-crystal-dg"
    },
    {
      name: "Gods of Myth (DG)",
      slug: "gods-of-myth-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/gods-of-myth-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Google Play (DG)",
      slug: "google-play-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/google-play-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Google Play Pass (DG)",
      slug: "paket-google-play-pass-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/paket-google-play-pass-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Growtopia",
      slug: "growtopia",
      endpoint: "https://cek-id-games.vercel.app/api/game/growtopia",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Growtopia (DG)",
      slug: "growtopia-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/growtopia-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Hago",
      slug: "hago",
      endpoint: "https://cek-id-games.vercel.app/api/game/hago",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Harry Potter Magic Awakened (DG)",
      slug: "harry-potter-magic-awakened-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/harry-potter-magic-awakened-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/harry-potter-magic-awakened-dg"
    },
    {
      name: "Harry Potter: Magic Awakened",
      slug: "harry-potter-magic-awakened",
      endpoint: "https://cek-id-games.vercel.app/api/game/harry-potter-magic-awakened",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/harry-potter-magic-awakened"
    },
    {
      name: "Heroes Evolved",
      slug: "heroes-evolved",
      endpoint: "https://cek-id-games.vercel.app/api/game/heroes-evolved",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/heroes-evolved"
    },
    {
      name: "Heroes Evolved (DG)",
      slug: "heroes-evolved-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/heroes-evolved-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/heroes-evolved-dg"
    },
    {
      name: "Heroes Evolved - Point Card (DG)",
      slug: "heroes-evolved-point-card-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/heroes-evolved-point-card-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Heroic Uncle Kim: Idle RPG",
      slug: "heroic-uncle-kim-idle-rpg",
      endpoint: "https://cek-id-games.vercel.app/api/game/heroic-uncle-kim-idle-rpg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Higgs Domino",
      slug: "higgs-domino",
      endpoint: "https://cek-id-games.vercel.app/api/game/higgs-domino",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Honkai Impact 3",
      slug: "honkai-impact-3",
      endpoint: "https://cek-id-games.vercel.app/api/game/honkai-impact-3",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Honkai Star Rail (DG)",
      slug: "honkai_star_rail-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/honkai_star_rail-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Honkai: Star Rail",
      slug: "honkai-star-rail",
      endpoint: "https://cek-id-games.vercel.app/api/game/honkai-star-rail",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/honkai-star-rail"
    },
    {
      name: "Honor of Kings",
      slug: "honor-of-kings",
      endpoint: "https://cek-id-games.vercel.app/api/game/honor-of-kings",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Honor of Kings (DG)",
      slug: "honor-of-kings-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/honor-of-kings-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Identity V",
      slug: "identity-v",
      endpoint: "https://cek-id-games.vercel.app/api/game/identity-v",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/identity-v"
    },
    {
      name: "Idle Legends",
      slug: "idle-legends",
      endpoint: "https://cek-id-games.vercel.app/api/game/idle-legends",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/idle-legends"
    },
    {
      name: "Idol Party",
      slug: "idol-party",
      endpoint: "https://cek-id-games.vercel.app/api/game/idol-party",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Indoplay - Capsa Domino QQ Poker",
      slug: "indoplay-capsa-domino-qq-poker",
      endpoint: "https://cek-id-games.vercel.app/api/game/indoplay-capsa-domino-qq-poker",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Invincible: Guarding the Globe",
      slug: "invincible-guarding-the-globe",
      endpoint: "https://cek-id-games.vercel.app/api/game/invincible-guarding-the-globe",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Isekai Feast: Tales of Recipes",
      slug: "isekai-feast-tales-of-recipes",
      endpoint: "https://cek-id-games.vercel.app/api/game/isekai-feast-tales-of-recipes",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/isekai-feast-tales-of-recipes"
    },
    {
      name: "Island King",
      slug: "island-king",
      endpoint: "https://cek-id-games.vercel.app/api/game/island-king",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Jade Legends: Immortal Realm ",
      slug: "jade-legends-immortal-realm",
      endpoint: "https://cek-id-games.vercel.app/api/game/jade-legends-immortal-realm",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/jade-legends-immortal-realm"
    },
    {
      name: "King of Avalon",
      slug: "king-of-avalon",
      endpoint: "https://cek-id-games.vercel.app/api/game/king-of-avalon",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Kingdom: The Blood",
      slug: "kingdom-the-blood",
      endpoint: "https://cek-id-games.vercel.app/api/game/kingdom-the-blood",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Kings Choice",
      slug: "kings-choice",
      endpoint: "https://cek-id-games.vercel.app/api/game/kings-choice",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "LUXY: Domino and Poker",
      slug: "luxy-domino-and-poker",
      endpoint: "https://cek-id-games.vercel.app/api/game/luxy-domino-and-poker",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Langit Musik (DG)",
      slug: "langit-musik-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/langit-musik-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Laplace M",
      slug: "laplace-m",
      endpoint: "https://cek-id-games.vercel.app/api/game/laplace-m",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Laplace Mobile (DG)",
      slug: "laplace-mobile-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/laplace-mobile-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "League of Legends",
      slug: "league-of-legends",
      endpoint: "https://cek-id-games.vercel.app/api/game/league-of-legends",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "League of Legends : Wild Rift (DG)",
      slug: "league-of-legends-wild-rift-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/league-of-legends-wild-rift-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "League of Legends: Wild Rift",
      slug: "league-of-legends-wild-rift",
      endpoint: "https://cek-id-games.vercel.app/api/game/league-of-legends-wild-rift",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Legacy Fate: Sacred and Fearless",
      slug: "legacy-fate-sacred-and-fearless",
      endpoint: "https://cek-id-games.vercel.app/api/game/legacy-fate-sacred-and-fearless",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/legacy-fate-sacred-and-fearless"
    },
    {
      name: "Legend of Mushroom: Rush",
      slug: "legend-of-mushroom-rush",
      endpoint: "https://cek-id-games.vercel.app/api/game/legend-of-mushroom-rush",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/legend-of-mushroom-rush"
    },
    {
      name: "Legends of Runeterra",
      slug: "legends-of-runeterra",
      endpoint: "https://cek-id-games.vercel.app/api/game/legends-of-runeterra",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Life Makeover",
      slug: "life-makeover",
      endpoint: "https://cek-id-games.vercel.app/api/game/life-makeover",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "LifeAfter",
      slug: "lifeafter",
      endpoint: "https://cek-id-games.vercel.app/api/game/lifeafter",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/lifeafter"
    },
    {
      name: "LifeAfter (DG)",
      slug: "life-after-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/life-after-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "LifeAfter (DG)",
      slug: "life-after-replicate-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/life-after-replicate-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/life-after-replicate-dg"
    },
    {
      name: "Lita (DG)",
      slug: "lita-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/lita-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Lokapala (DG)",
      slug: "lokapala-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/lokapala-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Love and Deepspace",
      slug: "love-and-deepspace",
      endpoint: "https://cek-id-games.vercel.app/api/game/love-and-deepspace",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Ludo Club",
      slug: "ludo-club",
      endpoint: "https://cek-id-games.vercel.app/api/game/ludo-club",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Luna Fantasia (DG)",
      slug: "luna_fantasia-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/luna_fantasia-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "MARVEL Duel",
      slug: "marvel-duel",
      endpoint: "https://cek-id-games.vercel.app/api/game/marvel-duel",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "MARVEL SNAP",
      slug: "marvel-snap",
      endpoint: "https://cek-id-games.vercel.app/api/game/marvel-snap",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "MOB RUSH",
      slug: "mob-rush",
      endpoint: "https://cek-id-games.vercel.app/api/game/mob-rush",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: null
    },
    {
      name: "MU ORIGIN 3",
      slug: "mu-origin-3",
      endpoint: "https://cek-id-games.vercel.app/api/game/mu-origin-3",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "MU Origin 2",
      slug: "mu-origin-2",
      endpoint: "https://cek-id-games.vercel.app/api/game/mu-origin-2",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: null
    },
    {
      name: "MU Origin 3 (DG)",
      slug: "mu-origin-3-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/mu-origin-3-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Magnet Majamojo Bundling (DG)",
      slug: "magnet_majamojo_bundling-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/magnet_majamojo_bundling-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Mahjong Soul",
      slug: "mahjong-soul",
      endpoint: "https://cek-id-games.vercel.app/api/game/mahjong-soul",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "MapleStory M",
      slug: "maplestory-m",
      endpoint: "https://cek-id-games.vercel.app/api/game/maplestory-m",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/maplestory-m"
    },
    {
      name: "Maxstream (DG)",
      slug: "maxstream-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/maxstream-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Metal Slug (DG)",
      slug: "metal-slug-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/metal-slug-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Metal Slug: Awakening",
      slug: "metal-slug-awakening",
      endpoint: "https://cek-id-games.vercel.app/api/game/metal-slug-awakening",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Mi-cash (DG)",
      slug: "mi-cash-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/mi-cash-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Minecraft (DG)",
      slug: "minecraft-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/minecraft-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Mirage: Perfect Skyline",
      slug: "mirage-perfect-skyline",
      endpoint: "https://cek-id-games.vercel.app/api/game/mirage-perfect-skyline",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/mirage-perfect-skyline"
    },
    {
      name: "Mobile Legends",
      slug: "mobile-legends",
      endpoint: "https://cek-id-games.vercel.app/api/game/mobile-legends",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: null
    },
    {
      name: "Mobile Legends (DG)",
      slug: "mobile-legends-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/mobile-legends-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: null
    },
    {
      name: "Mobile Legends: Adventure",
      slug: "mobile-legends-adventure",
      endpoint: "https://cek-id-games.vercel.app/api/game/mobile-legends-adventure",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: null
    },
    {
      name: "Modern Combat 5: Blackout",
      slug: "modern-combat-5-blackout",
      endpoint: "https://cek-id-games.vercel.app/api/game/modern-combat-5-blackout",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Modern Strike Online",
      slug: "modern-strike-online",
      endpoint: "https://cek-id-games.vercel.app/api/game/modern-strike-online",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Monster Saga: Evolution",
      slug: "monster-saga-evolution",
      endpoint: "https://cek-id-games.vercel.app/api/game/monster-saga-evolution",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/monster-saga-evolution"
    },
    {
      name: "Moonlight Blade M",
      slug: "moonlight-blade-m",
      endpoint: "https://cek-id-games.vercel.app/api/game/moonlight-blade-m",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "MusicMax (DG)",
      slug: "musicmax-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/musicmax-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "NetEase Pay (DG)",
      slug: "netease-pay-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/netease-pay-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Never After",
      slug: "never-after",
      endpoint: "https://cek-id-games.vercel.app/api/game/never-after",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/never-after"
    },
    {
      name: "Nintendo Membership (DG)",
      slug: "nintendo-membership-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/nintendo-membership-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "OCTOPATH TRAVELER: CotC",
      slug: "octopath-traveler-cotc",
      endpoint: "https://cek-id-games.vercel.app/api/game/octopath-traveler-cotc",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/octopath-traveler-cotc"
    },
    {
      name: "ONE PUNCH MAN: The Strongest",
      slug: "one-punch-man-the-strongest",
      endpoint: "https://cek-id-games.vercel.app/api/game/one-punch-man-the-strongest",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: null
    },
    {
      name: "One Punch Man : The Strongest (DG)",
      slug: "one-punch-man-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/one-punch-man-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: null
    },
    {
      name: "Onmyoji Arena",
      slug: "onmyoji-arena",
      endpoint: "https://cek-id-games.vercel.app/api/game/onmyoji-arena",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "PHANTASY STAR ONLINE 2 NEW GENESIS",
      slug: "phantasy-star-online-2-new-genesis",
      endpoint: "https://cek-id-games.vercel.app/api/game/phantasy-star-online-2-new-genesis",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "PUBG Mobile (DG)",
      slug: "pubg-mobile-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/pubg-mobile-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: null
    },
    {
      name: "Path to Nowhere",
      slug: "path-to-nowhere",
      endpoint: "https://cek-id-games.vercel.app/api/game/path-to-nowhere",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Paw Rumble",
      slug: "paw-rumble",
      endpoint: "https://cek-id-games.vercel.app/api/game/paw-rumble",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Paw Rumble (DG)",
      slug: "paw-rumble-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/paw-rumble-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Perfect World (DG)",
      slug: "perfect-world-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/perfect-world-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/perfect-world-dg"
    },
    {
      name: "Phantom Blade: Executioners",
      slug: "phantom-blade-executioners",
      endpoint: "https://cek-id-games.vercel.app/api/game/phantom-blade-executioners",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Pixel Gun 3D",
      slug: "pixel-gun-3d",
      endpoint: "https://cek-id-games.vercel.app/api/game/pixel-gun-3d",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Point Blank",
      slug: "point-blank",
      endpoint: "https://cek-id-games.vercel.app/api/game/point-blank",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Point Blank (DG)",
      slug: "point-blank-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/point-blank-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Pokemon Unite (DG)",
      slug: "gamesmax-booster-pokemon-unite-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/gamesmax-booster-pokemon-unite-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Punishing: Gray Raven",
      slug: "punishing-gray-raven",
      endpoint: "https://cek-id-games.vercel.app/api/game/punishing-gray-raven",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/punishing-gray-raven"
    },
    {
      name: "RF Classic (DG)",
      slug: "rf-classic-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/rf-classic-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/rf-classic-dg"
    },
    {
      name: "RF Remastered (DG)",
      slug: "rf-remastered-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/rf-remastered-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/rf-remastered-dg"
    },
    {
      name: "Ragnarok M: Eternal Love Big Cat Coin",
      slug: "ragnarok-m-eternal-love-big-cat-coin",
      endpoint: "https://cek-id-games.vercel.app/api/game/ragnarok-m-eternal-love-big-cat-coin",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/ragnarok-m-eternal-love-big-cat-coin"
    },
    {
      name: "Ragnarok Origin",
      slug: "raganarok-origin",
      endpoint: "https://cek-id-games.vercel.app/api/game/raganarok-origin",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/raganarok-origin"
    },
    {
      name: "Ragnarok Retro (DG)",
      slug: "ragnarok-retro-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/ragnarok-retro-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Ragnarok X: Next Generation",
      slug: "ragnarok-x-next-generation",
      endpoint: "https://cek-id-games.vercel.app/api/game/ragnarok-x-next-generation",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/ragnarok-x-next-generation"
    },
    {
      name: "Razer Gold (DG)",
      slug: "razer-gold-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/razer-gold-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Revelation Mobile (DG)",
      slug: "revelation-mobile-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/revelation-mobile-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Revelation: Infinite Journey",
      slug: "revelation-infinite-journey",
      endpoint: "https://cek-id-games.vercel.app/api/game/revelation-infinite-journey",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Saint Seiya: Awakening",
      slug: "saint-seiya-awakening",
      endpoint: "https://cek-id-games.vercel.app/api/game/saint-seiya-awakening",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/saint-seiya-awakening"
    },
    {
      name: "Sausage Man",
      slug: "sausage-man",
      endpoint: "https://cek-id-games.vercel.app/api/game/sausage-man",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Sausage Man (DG)",
      slug: "sausage-man-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/sausage-man-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Scroll of Onmyoji: Sakura & Sword",
      slug: "scroll-of-onmyoji-sakura-and-sword",
      endpoint: "https://cek-id-games.vercel.app/api/game/scroll-of-onmyoji-sakura-and-sword",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/scroll-of-onmyoji-sakura-and-sword"
    },
    {
      name: "Shining Nikki",
      slug: "shining-nikki",
      endpoint: "https://cek-id-games.vercel.app/api/game/shining-nikki",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Sky: Children of the Light",
      slug: "sky-children-of-the-light",
      endpoint: "https://cek-id-games.vercel.app/api/game/sky-children-of-the-light",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Speed Drifters",
      slug: "speed-drifters",
      endpoint: "https://cek-id-games.vercel.app/api/game/speed-drifters",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Speed Drifters (DG)",
      slug: "speed-drifters-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/speed-drifters-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "State of Survival",
      slug: "state-of-survival",
      endpoint: "https://cek-id-games.vercel.app/api/game/state-of-survival",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "State of Survival (DG)",
      slug: "state-of-survival-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/state-of-survival-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Steam Wallet Code - Indonesia",
      slug: "steam-wallet-code-indonesia",
      endpoint: "https://cek-id-games.vercel.app/api/game/steam-wallet-code-indonesia",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Stumble Guys",
      slug: "stumble-guys",
      endpoint: "https://cek-id-games.vercel.app/api/game/stumble-guys",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Super Mecha Champions",
      slug: "super-mecha-champions",
      endpoint: "https://cek-id-games.vercel.app/api/game/super-mecha-champions",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Super Sus",
      slug: "super-sus",
      endpoint: "https://cek-id-games.vercel.app/api/game/super-sus",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Super Sus (DG)",
      slug: "super-sus-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/super-sus-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Tamashi: Rise of Yokai",
      slug: "tamashi-rise-of-yokai",
      endpoint: "https://cek-id-games.vercel.app/api/game/tamashi-rise-of-yokai",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/tamashi-rise-of-yokai"
    },
    {
      name: "Teamfight Tactics Mobile",
      slug: "teamfight-tactics-mobile",
      endpoint: "https://cek-id-games.vercel.app/api/game/teamfight-tactics-mobile",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Teen Patti Gold",
      slug: "teen-patti-gold",
      endpoint: "https://cek-id-games.vercel.app/api/game/teen-patti-gold",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "The Legend of Neverland (DG)",
      slug: "the-legend-of-neverland-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/the-legend-of-neverland-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "The Lord of the Rings: Rise to War",
      slug: "the-lord-of-the-rings-rise-to-war",
      endpoint: "https://cek-id-games.vercel.app/api/game/the-lord-of-the-rings-rise-to-war",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/the-lord-of-the-rings-rise-to-war"
    },
    {
      name: "The Return of Condor Heroes",
      slug: "the-return-of-condor-heroes",
      endpoint: "https://cek-id-games.vercel.app/api/game/the-return-of-condor-heroes",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/the-return-of-condor-heroes"
    },
    {
      name: "Thetan Arena",
      slug: "thetan-arena",
      endpoint: "https://cek-id-games.vercel.app/api/game/thetan-arena",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Time Raiders",
      slug: "time-raiders",
      endpoint: "https://cek-id-games.vercel.app/api/game/time-raiders",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/time-raiders"
    },
    {
      name: "Tinder (DG)",
      slug: "tinder-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/tinder-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Tom and Jerry : Chase (DG)",
      slug: "tom-and-jerry-chase-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/tom-and-jerry-chase-dg",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/tom-and-jerry-chase-dg"
    },
    {
      name: "Tom and Jerry: Chase",
      slug: "tom-and-jerry-chase",
      endpoint: "https://cek-id-games.vercel.app/api/game/tom-and-jerry-chase",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/tom-and-jerry-chase"
    },
    {
      name: "Top Eleven",
      slug: "top-eleven",
      endpoint: "https://cek-id-games.vercel.app/api/game/top-eleven",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Top Up DG Rings (DG)",
      slug: "dg-rings-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/dg-rings-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Top Up FF ( Free Fire) (DG)",
      slug: "freefire-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/freefire-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Top Up Garena Shell (DG)",
      slug: "garena-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/garena-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Uncharted Waters Origin (DG)",
      slug: "uncharted-waters-origin-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/uncharted-waters-origin-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Undawn",
      slug: "undawn",
      endpoint: "https://cek-id-games.vercel.app/api/game/undawn",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Undawn (DG)",
      slug: "undawn-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/undawn-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Unipin (DG)",
      slug: "unipin-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/unipin-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "VALORANT",
      slug: "valorant",
      endpoint: "https://cek-id-games.vercel.app/api/game/valorant",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Vidio (DG)",
      slug: "vidio-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/vidio-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Vision+ (DG)",
      slug: "visionplus-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/visionplus-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Viu (DG)",
      slug: "viu-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/viu-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Voucher PUBG Mobile (DG)",
      slug: "pubg-mobile-voucher-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/pubg-mobile-voucher-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Voucher Steam (DG)",
      slug: "voucher-steam-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/voucher-steam-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "War Planet Online",
      slug: "war-planet-online",
      endpoint: "https://cek-id-games.vercel.app/api/game/war-planet-online",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "WeTV (DG)",
      slug: "wetv-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/wetv-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Westward Adventure",
      slug: "westward-adventure",
      endpoint: "https://cek-id-games.vercel.app/api/game/westward-adventure",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Whisper of Shadow",
      slug: "whisper-of-shadow",
      endpoint: "https://cek-id-games.vercel.app/api/game/whisper-of-shadow",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Wild Hunter: Goddess",
      slug: "wild-hunter-goddess",
      endpoint: "https://cek-id-games.vercel.app/api/game/wild-hunter-goddess",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/wild-hunter-goddess"
    },
    {
      name: "World War Heroes",
      slug: "world-war-heroes",
      endpoint: "https://cek-id-games.vercel.app/api/game/world-war-heroes",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "XBOX Live Gift Card (DG)",
      slug: "xbox-live-dg",
      endpoint: "https://cek-id-games.vercel.app/api/game/xbox-live-dg",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "YS 6 Mobile VNG",
      slug: "ys-6-mobile-vng",
      endpoint: "https://cek-id-games.vercel.app/api/game/ys-6-mobile-vng",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Yong Heroes",
      slug: "yong-heroes",
      endpoint: "https://cek-id-games.vercel.app/api/game/yong-heroes",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/yong-heroes"
    },
    {
      name: "ZEPETO",
      slug: "zepeto",
      endpoint: "https://cek-id-games.vercel.app/api/game/zepeto",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      name: "Zenless Zone Zero",
      slug: "zenless-zone-zero",
      endpoint: "https://cek-id-games.vercel.app/api/game/zenless-zone-zero",
      query: "?id=xxxx&zone=xxx",
      hasZoneId: true,
      listZoneId: "https://cek-id-games.vercel.app/api/game/get-zone/zenless-zone-zero"
    },
    {
      slug: "test5",
      endpoint: "https://cek-id-games.vercel.app/api/game/test5",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    },
    {
      slug: "test95",
      endpoint: "https://cek-id-games.vercel.app/api/game/test95",
      query: "?id=xxxx",
      hasZoneId: false,
      listZoneId: null
    }
];

module.exports = games;