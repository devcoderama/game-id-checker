// File: README.md
# @devcoderama/game-id-checker

Module untuk mengecek ID game dan zone server.

## Instalasi

\`\`\`bash
npm install @devcoderama/game-id-checker
\`\`\`

## Penggunaan

\`\`\`javascript
const GameChecker = require('@devcoderama/game-id-checker');

const checker = new GameChecker();

// Cek ID game tanpa zone
async function checkGameId() {
  try {
    const result = await checker.checkId('8-ball-pool', '12345');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Cek ID game dengan zone
async function checkGameWithZone() {
  try {
    const result = await checker.checkId('astra-knights-of-veda', '12345', '1');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Dapatkan daftar zone
async function getZones() {
  try {
    const zones = await checker.getZoneList('astra-knights-of-veda');
    console.log(zones);
  } catch (error) {
    console.error(error);
  }
}

// Dapatkan daftar game
const games = checker.getAllGames();
console.log(games);
\`\`\`