const express = require("express");
const path = require("path");
const app = express();

const buildPath = path.join(__dirname, "client", "dist");

// Static dosyalar
app.use(express.static(buildPath));

// Catch-all route (Express 5 uyumlu)
app.use((req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
