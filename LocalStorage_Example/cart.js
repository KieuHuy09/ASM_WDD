let cartItemsContainer = document.getElementById('cartItems');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + '₫';
}

function renderCart() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <tr>
                <td colspan="6">Giỏ hàng của bạn đang trống</td>
            </tr>
        `;
    } else {
        cart.forEach((item, index) => {
            let row = document.createElement('tr');

            row.innerHTML = `
                <td><img src="${item.image}" width="100"></td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${formatCurrency(item.price)}</td>
                <td>${formatCurrency(item.price * item.quantity)}</td>
                <td>
                    <button class="delete-btn" data-index="${index}">Xóa</button>
                </td>
            `;

            cartItemsContainer.appendChild(row);
        });

        // Gán sự kiện xóa
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                let index = this.dataset.index;
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            });
        });
    }
}

renderCart();
