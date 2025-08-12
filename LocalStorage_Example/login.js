// Khai báo các phần tử DOM để thao tác
let loginForm = document.getElementById('loginForm');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');

// Khai báo các biến toàn cục

// Khai báo các hàm xử lý sự kiện
function login() {
    // Lấy giá trị từ các trường nhập liệu
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    // Kiểm tra tính hợp lệ của dữ liệu
    if (username === '' || password === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Lấy dữ liệu từ localStorage
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    // Kiểm tra thông tin đăng nhập
    if (username === storedUsername && password === storedPassword) {
        alert('Đăng nhập thành công!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html'; // Điều hướng đến trang chào mừng
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
}

// Gán hàm xử lý sự kiện cho các phần tử DOM
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    login();
});

window.onload = function() {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn && isLoggedIn === 'true') {
        // Nếu chưa đăng nhập, điều hướng về trang đăng nhập
        window.location.href = 'index.html';
    }
}