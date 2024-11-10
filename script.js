let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} PLN`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = `Razem: ${total} PLN`;
}

function goToCheckout() {
    if (cart.length === 0) {
        alert('Twój koszyk jest pusty!');
    } else {
        window.location.hash = '#checkout'; // Przenosi do sekcji zamówienia
    }
}

// Jeżeli użytkownik złoży zamówienie
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    alert(`Dziękujemy za zamówienie, ${name}!\nSzczegóły:\nEmail: ${email}\nAdres: ${address}`);
    // Możesz dodać tutaj kod do wysłania danych zamówienia do serwera, jeśli go masz.
});
