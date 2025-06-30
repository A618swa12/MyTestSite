function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('captcha-text').innerText = captcha;
}

function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const userCaptcha = document.getElementById('captcha').value;
  const realCaptcha = document.getElementById('captcha-text').innerText;

  if (username !== "Hacker009") {
    document.getElementById('message').innerText = 'نام کاربری اشتباه است.';
    generateCaptcha();
    return;
  }
  if (password !== "123456789") {
    document.getElementById('message').innerText = 'رمز عبور اشتباه است.';
    generateCaptcha();
    return;
  }
  if (userCaptcha !== realCaptcha) {
    document.getElementById('message').innerText = 'کپچا اشتباه است. دوباره تلاش کنید';
    generateCaptcha();
    return;
  }
  // اگر همه درست بود وارد صفحه خوش آمدید شو
  window.location.href = 'welcome.html';
}

window.onload = generateCaptcha;