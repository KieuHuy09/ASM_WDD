// register.js

let registerForm = document.getElementById('registerForm');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');
let emailInput = document.getElementById('email');

function register() {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();
    let email = emailInput.value.trim();

    if (username === '' || password === '' || confirmPassword === '' || email === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp.');
        return;
    }

    // Lưu thông tin đăng ký
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('isLoggedIn', 'false'); // Chưa đăng nhập

    alert('Đăng ký thành công! Mời bạn đăng nhập.');

    // Chuyển đến login.html
    window.location.href = 'login.html';
}

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    register();
});

window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && isLoggedIn === 'true') {
        // Nếu đã đăng nhập thì chuyển về trang chủ luôn
        window.location.href = 'index.html';
    }
}
