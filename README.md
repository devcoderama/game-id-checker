```markdown
# @devcoderama/game-id-checker

![npm](https://img.shields.io/npm/v/@devcoderama/game-id-checker)
![license](https://img.shields.io/npm/l/@devcoderama/game-id-checker)
![downloads](https://img.shields.io/npm/dt/@devcoderama/game-id-checker)

**@devcoderama/game-id-checker** adalah modul Node.js untuk mengecek ID game dan zone server dari berbagai game online. Modul ini dirancang untuk membantu developer dalam integrasi sistem validasi ID game dengan mudah dan cepat.

## ✨ Fitur Utama

- ✅ Validasi ID game dengan atau tanpa zone server  
- ✅ Mendukung berbagai game populer  
- ✅ Mendapatkan daftar zone server  
- ✅ Mendapatkan daftar game yang tersedia  

## 📦 Instalasi

Install package ini menggunakan npm:

```bash
npm install @devcoderama/game-id-checker
```

## 🚀 Penggunaan

### **1. Import dan Inisialisasi**
```javascript
const GameChecker = require('@devcoderama/game-id-checker');

const checker = new GameChecker();
```

### **2. Cek ID Game Tanpa Zone**
```javascript
async function checkGameId() {
  try {
    const result = await checker.checkId('8-ball-pool', '12345');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

checkGameId();
```
**Contoh Output:**
```json
{
  "game": "8-ball-pool",
  "id": "12345",
  "valid": true
}
```

### **3. Cek ID Game dengan Zone**
```javascript
async function checkGameWithZone() {
  try {
    const result = await checker.checkId('astra-knights-of-veda', '12345', '1');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

checkGameWithZone();
```
**Contoh Output:**
```json
{
  "game": "astra-knights-of-veda",
  "id": "12345",
  "zone": "1",
  "valid": true
}
```

### **4. Dapatkan Daftar Zone Server**
```javascript
async function getZones() {
  try {
    const zones = await checker.getZoneList('astra-knights-of-veda');
    console.log(zones);
  } catch (error) {
    console.error(error);
  }
}

getZones();
```
**Contoh Output:**
```json
[
  { "zoneId": "1", "name": "Asia" },
  { "zoneId": "2", "name": "Europe" }
]
```

### **5. Dapatkan Daftar Game yang Didukung**
```javascript
const games = checker.getAllGames();
console.log(games);
```
**Contoh Output:**
```json
[
  "8-ball-pool",
  "astra-knights-of-veda",
  "mobile-legends",
  "pubg-mobile"
]
```

## 📝 Lisensi

Proyek ini menggunakan lisensi **MIT**. Lihat [LICENSE](./LICENSE) untuk informasi lebih lanjut.

---

Jika ada pertanyaan atau ingin berkontribusi, silakan buka issue di [GitHub](https://github.com/devcoderama/game-id-checker/issues).  

💡 **Dukung proyek ini dengan memberi bintang di GitHub!** ⭐  
```

---

**Perbedaan & Perbaikan:**  
✅ **Deskripsi lebih profesional**  
✅ **Menambahkan badge status (npm version, downloads, dll.)**  
✅ **Menambahkan daftar fitur utama**  
✅ **Contoh output JSON agar lebih jelas**  
✅ **Menambahkan link ke GitHub dan lisensi**  

Kalau masih ada yang perlu diperbaiki, kasih tahu saya! 🚀
