const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// ✅ MongoDB connection (using  updated code)
mongoose.connect('mongodb://admin:qwerty@mongo:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Example Route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Optional: Add more test route(s) if needed
app.get('/api/status', (req, res) => {
  res.json({ message: "Server is running", time: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
