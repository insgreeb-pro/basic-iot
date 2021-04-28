# Simple IOT

Super simple data logging untuk device dengan 4 sensor.

## Cara Menggunakan

### Setup

Tambahkan file `.env` pada proyek berisi lokasi database:

**example**

```env
DB_URL=file:./db.sqlite
```

### Running

**Install and Running pertama kali**

```bash
yarn && yarn start-prod
```

**Running selanjutnya**

```bash
yarn start
```

Note:

> List channel dan api_key akan disimpan di `api.log` setelah proses install dan running.

---

Endpoint Docs: [here](docs/endpoints.md)
