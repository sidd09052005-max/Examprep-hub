const http = require('http');

async function testAuth() {
  const timestamp = Date.now();
  const testEmail = `test${timestamp}@example.com`;
  const password = "password123";

  console.log(`Testing Signup with ${testEmail}...`);
  try {
    const signupRes = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Test User", email: testEmail, password })
    });
    const signupData = await signupRes.json();
    console.log("Signup Result:", signupRes.status, signupData);

    if (signupRes.status === 201) {
      console.log("Signup successful. Testing login...");
      
      const loginParams = new URLSearchParams({
        email: testEmail,
        password: password,
        redirect: 'false'
      });
      
      const loginRes = await fetch("http://localhost:3000/api/auth/callback/credentials", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: loginParams.toString()
      });
      const loginData = await loginRes.json();
      console.log("Login Result:", loginRes.status, loginData);
    }
  } catch (error) {
    console.error("Test script failed:", error);
  }
}

testAuth();
