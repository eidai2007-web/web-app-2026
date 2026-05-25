// メッセージ送信
const response = await fetch('http://localhost:3000/api/v1/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ room_id: 'room1', user_id: 'user1', content: 'Hello!' })
});
const data = await response.json();
console.log(data);
