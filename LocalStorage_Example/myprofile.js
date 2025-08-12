window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!(isLoggedIn && isLoggedIn === 'true')) {
        alert('Bạn chưa đăng nhập.');
        window.location.href = 'login.html';
        return;
    }

    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');

    document.getElementById('name').value = username;
    document.getElementById('email').value = email;
};
