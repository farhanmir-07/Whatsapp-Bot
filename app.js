const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Simple test route
app.get("/", (req, res) => {
  res.send("Hii My name is Farhan!. How can i help you??");
});

// Webhook (receives messages)
app.post("/webhook", (req, res) => {
  console.log("Message received:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});