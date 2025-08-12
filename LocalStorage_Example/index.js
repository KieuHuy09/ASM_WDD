// --- Code đăng xuất và kiểm tra đăng nhập ---
let welcomeMessage = document.getElementById('welcomeMessage');
let logoutButton = document.getElementById('logoutButton');

function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
}
logoutButton.addEventListener('click', logout);

window.onload = function() {
    if (welcomeMessage) welcomeMessage.style.display = 'none';

    let buttons = document.querySelectorAll('button, a');
    let contactBtn = null;
    buttons.forEach(btn => {
        if (btn.textContent.trim() === 'Liên hệ') {
            contactBtn = btn;
        }
    });
    if (logoutButton && contactBtn && contactBtn.parentNode) {
        contactBtn.parentNode.insertBefore(logoutButton, contactBtn);
    }

    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!(isLoggedIn && isLoggedIn === 'true')) {
        alert('Bạn chưa đăng nhập.');
        window.location.href = 'login.html';
    }
};

// --- Hàm thêm sản phẩm vào giỏ hàng ---
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Thêm vào giỏ hàng thành công!');
}
