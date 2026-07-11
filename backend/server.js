require("dotenv").config();

console.log("SERVER.JS TERBARU BERHASIL DIJALANKAN");

const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend KopGen berhasil berjalan 🚀",
  });
});

// Tes koneksi database
app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      success: true,
      serverTime: result.rows[0].now,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

app.get("/tes", (req, res) => {
  res.send("TES BERHASIL");
});

app.get("/create-table", async (req, res) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS yang_penting_daftar_reports (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(100) NOT NULL,
        judul VARCHAR(255) NOT NULL,
        deskripsi TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    res.json({
      success: true,
      message: "Tabel berhasil dibuat"
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

app.get("/tables", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
      ORDER BY table_schema, table_name;
    `);

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});