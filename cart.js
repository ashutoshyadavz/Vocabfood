// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const cartItems = document.getElementById('cart-items');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDiscount = document.getElementById('cart-discount');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.getElementById('checkout-btn');

// Cart Data
let cart = [];

// Load Menu Items from JSON
async function loadMenuItems() {
    try {
        const response = await fetch('vocabfood_plate_combinations.json');
        const data = await response.json();
        renderMenuItems(data);
    } catch (error) {
        console.error('Error loading menu items:', error);
        menuGrid.innerHTML = '<p class="error">Failed to load menu. Please try again later.</p>';
    }
}

// Render Menu Items
function renderMenuItems(menuItems) {
    menuGrid.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-desc">${item.description}</p>
                <ul class="menu-item-dishes">
                    ${item.dishes.map(dish => `<li>${dish}</li>`).join('')}
                </ul>
                <div class="menu-item-price">
                    <span class="price">₹${item.price}</span>
                    <button class="btn btn-sm add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
    
    // Add event listeners to all add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}

// Add Item to Cart
function addToCart(e) {
    const itemId = e.target.getAttribute('data-id');
    
    // In a real app, we would find the item details from our menu data
    // For this demo, we'll just use the button's parent elements to get the info
    const menuItem = e.target.closest('.menu-item');
    const itemName = menuItem.querySelector('.menu-item-title').textContent;
    const itemPrice = parseInt(menuItem.querySelector('.price').textContent.replace('₹', ''));
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${itemName} added to cart`);
}

// Remove Item from Cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Update Item Quantity in Cart
function updateQuantity(itemId, newQuantity) {
    const item = cart.find(item => item.id === itemId);
    
    if (item) {
        if (newQuantity < 1) {
            removeFromCart(itemId);
        } else {
            item.quantity = newQuantity;
        }
    }
    
    updateCart();
}

// Update Cart UI and Data
function updateCart() {
    // Update cart count in header
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart modal
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">₹${item.price} × ${item.quantity}</span>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="decrement" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increment" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.decrement').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.getAttribute('data-id');
                const item = cart.find(item => item.id === itemId);
                if (item) updateQuantity(itemId, item.quantity - 1);
            });
        });
        
        document.querySelectorAll('.increment').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.getAttribute('data-id');
                const item = cart.find(item => item.id === itemId);
                if (item) updateQuantity(itemId, item.quantity + 1);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.getAttribute('data-id');
                removeFromCart(itemId);
            });
        });
    }
    
    // Calculate totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
    const discount = totalItemsCount >= 100 ? subtotal * 0.1 : 0;
    const total = subtotal - discount;
    
    // Update totals in UI
    cartSubtotal.textContent = `₹${subtotal}`;
    cartDiscount.textContent = `-₹${discount}`;
    cartTotal.textContent = `₹${total}`;
}

// Checkout Button
checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 2000);
        return;
    }
    
    toggleModal(cartModal);
    showNotification('Order placed successfully!', 3000);
    
    // In a real app, you would send the order to a server here
    console.log('Order submitted:', cart);
    
    // Clear cart
    cart = [];
    updateCart();
});

// Initialize Cart
function initCart() {
    // Load saved cart from localStorage if available
    const savedCart = localStorage.getItem('vocabfood_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
    
    // Save cart to localStorage whenever it changes
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('vocabfood_cart', JSON.stringify(cart));
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();
    initCart();
});