function addCard() {
  // 1. inputタグから値を取得
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;

  // 2. 入力チェック（空の場合）
  if (name === "" || age === "") {
    alert("名前と年齢を入力してください");
    return;
  }

  // 3. 年齢が数字かどうかチェック
  if (isNaN(age)) {
    alert("年齢は数字で入力してください");
    return;
  }

  // 4. カードリスト要素を取得
  const cardList = document.getElementById("cardList");

  // 5. 新しいdiv要素（カード）を作成
  const card = document.createElement("div");
  card.className = "card";

  // 6. カードの内容をテンプレートリテラルで作成
  card.innerHTML = `
    <h3>${name} さん</h3>
    <p>年齢：${age} 歳</p>
    <button onclick="deleteCard(this)">削除</button>
  `;

  // 7. カードをリストに追加
  cardList.appendChild(card);

  // 8. フォームをクリア
  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
}