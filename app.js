const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <body style="background:black;color:lime;text-align:center;font-family:monospace;">
    <h1>🚀 SECURE DEPLOYMENT ACTIVE 🚀</h1>
    <p>Docker Image Verified ✔</p>
    <p>No Critical Vulnerabilities 🔐</p>
    </body>
    `);
});

app.listen(3000, () => console.log('Server running on port 3000'));