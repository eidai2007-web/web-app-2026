// メッセージを送信する関数
async function sendMessage(roomId, userId, content) {
  const response = await fetch('http://localhost:3000/api/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ room_id: roomId, user_id: userId, content: content })
  });
  const data = await response.json();
  console.log('送信成功:', data);
  return data;
}

// メッセージ履歴を取得する関数
async function getMessages(roomId, limit = 10, offset = 0) {
  const response = await fetch(`http://localhost:3000/api/v1/messages?room_id=${roomId}&limit=${limit}&offset=${offset}`);
  const data = await response.json();
  console.log('メッセージ一覧:', data);
  return data;
}

// チャットルームを作成する関数
async function createRoom(roomName) {
  const response = await fetch('http://localhost:3000/api/v1/rooms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: roomName })
  });
  const data = await response.json();
  console.log('ルーム作成:', data);
  return data;
}

// 実行例
(async () => {
  await sendMessage('room1', 'user1', 'Hello!');
  await getMessages('room1');
  await createRoom('General Chat');
})();
