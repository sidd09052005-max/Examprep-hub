const http = require('http');
const testEmail = "testuser_admin@example.com";
const data = JSON.stringify({ name: "Testing Admin", email: testEmail, password: "password123" });

const req = http.request(
  {
    hostname: 'localhost',
    port: 3000,
    path: '/api/auth/register',
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
  },
  (res) => {
    let raw = "";
    res.on('data', chunk => raw += chunk);
    res.on('end', () => {
       console.log("Register Route Response:", res.statusCode, raw);
    });
  }
);

req.on('error', e => console.error("Error:", e.message));
req.write(data);
req.end();
