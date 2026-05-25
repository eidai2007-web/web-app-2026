fetch('/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: "test@example.com",
        password: "1234"
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
});
