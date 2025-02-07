// File: src/GameChecker.js
const axios = require('axios');
const NodeCache = require('node-cache');
const games = require('./data/games');

class GameChecker {
  constructor(options = {}) {
    this.cache = new NodeCache({ stdTTL: options.cacheDuration || 3600 }); // Cache 1 jam
  }

  /**
   * Mendapatkan informasi game berdasarkan slug
   * @param {string} slug - Slug nama game
   * @returns {Object} Informasi game
   */
  getGameInfo(slug) {
    const game = games.find(g => g.slug === slug);
    if (!game) {
      throw new Error(`Game dengan slug "${slug}" tidak ditemukan`);
    }
    return game;
  }

  /**
   * Mengecek ID game
   * @param {string} slug - Slug nama game
   * @param {string} userId - ID user game
   * @param {string} zoneId - ID zone (opsional)
   * @returns {Promise<Object>} Informasi user game
   */
  async checkId(slug, userId, zoneId = null) {
    const game = this.getGameInfo(slug);
    
    // Validasi zoneId jika diperlukan
    if (game.hasZoneId && !zoneId) {
      throw new Error(`Game ${game.name} membutuhkan Zone ID`);
    }

    // Buat URL request
    const url = game.endpoint + game.query
      .replace('xxxx', userId)
      .replace('xxx', zoneId || '');

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Gagal mengecek ID: ${error.message}`);
    }
  }

  /**
   * Mendapatkan daftar zone untuk game tertentu
   * @param {string} slug - Slug nama game
   * @returns {Promise<Array>} Daftar zone
   */
  async getZoneList(slug) {
    const game = this.getGameInfo(slug);
    
    if (!game.hasZoneId) {
      throw new Error(`Game ${game.name} tidak memiliki Zone ID`);
    }

    // Cek cache
    const cacheKey = `zone_${slug}`;
    const cachedZones = this.cache.get(cacheKey);
    if (cachedZones) {
      return cachedZones;
    }

    try {
      const response = await axios.get(game.listZoneId);
      this.cache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      throw new Error(`Gagal mengambil daftar zone: ${error.message}`);
    }
  }

  /**
   * Mendapatkan daftar semua game yang tersedia
   * @returns {Array} Daftar game
   */
  getAllGames() {
    return games.map(({ name, slug, hasZoneId }) => ({
      name,
      slug,
      hasZoneId
    }));
  }
}

module.exports = GameChecker;