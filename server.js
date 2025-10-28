// Import Express
const express = require('express');
const cors = require('cors');
const app = express();

// Define a port
const PORT = 3002;

app.use(cors());

// 1️⃣ Hello World API
app.get('/hello', (req, res) => {
  res.json({ msg: "Hello World" });
});

// 2️⃣ Server Time API
app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});

// 3️⃣ Server Date API
app.get('/date', (req, res) => {
  const currentDate = new Date().toLocaleDateString();
  res.json({ date: currentDate });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
