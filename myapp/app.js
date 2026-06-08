require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// データベースの接続設定（今後使う場合）
const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

const messages = [];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { username, text } = req.body;
  const newMessage = { id: messages.length + 1, username, text };
  messages.push(newMessage);
  res.json(newMessage);
});

app.listen(3000, () => {
  console.log('サーバーが起動しました: http://localhost:3000');
});
