// LOGIN HANDLER
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("login-username").value.trim();
      const password = document.getElementById("login-password").value;

      if (username && password) {
        alert(`Login Successful!\nUsername: ${username}`);
        loginForm.reset();
      } else {
        alert("Please fill out all login fields.");
      }
    });
  }

  // REGISTER HANDLER
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("reg-username").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const password = document.getElementById("reg-password").value;
      const confirmPassword = document.getElementById(
        "reg-confirm-password"
      ).value;

      if (!username || !email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
      } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
      } else {
        alert(
          `Registration Successful!\nUsername: ${username}\nEmail: ${email}`
        );
        registerForm.reset();
      }
    });
  }
});
