const express = require('express');

const app = express();

app.use(express.json());

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    console.log({
        email,
        password
    });

    res.json({
        message: 'ログイン成功'
    });
});

app.listen(3000, () => {
    console.log('サーバー起動中');
});