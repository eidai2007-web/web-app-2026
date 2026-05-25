app.post('/api/login', (req, res) => {
  // 分割代入でデータを取り出す
  const { email, password } = req.body;
  
  // プロパティ省略記法でオブジェクトを作成しログ出力
  const newItem = { email, password };
  console.log(newItem);
  
  // ワークシートに記載されたレスポンスを返す
  res.json({ message: "ログイン成功" });
});
