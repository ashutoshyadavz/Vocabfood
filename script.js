// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const loginBtn = document.querySelector('.login-btn');
const authModal = document.getElementById('auth-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const menuContainer = document.getElementById('menu-container');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const chatBtn = document.querySelector('.chat-btn');
const chatModal = document.getElementById('chat-modal');
const orderStatusBtn = document.querySelector('.order-status');
const statusModal = document.getElementById('status-modal');
const statusForm = document.getElementById('status-form');
const statusResult = document.getElementById('status-result');
const bookingForm = document.getElementById('booking-form');
const estimatedCost = document.getElementById('estimated-cost');
const ctaBtn = document.querySelector('.cta-btn');

// Menu Data (would typically come from API in real app)
const menuData = [
    {
        id: 1,
        name: "Veg Thali",
        price: 120,
        category: "veg",
        description: "Delicious vegetarian meal with 4 rotis, rice, dal, 2 vegetables, salad and pickle.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Chicken Curry",
        price: 180,
        category: "non-veg",
        description: "Spicy chicken curry served with 4 rotis or steamed rice.",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Daily Tiffin",
        price: 70,
        category: "tiffin",
        description: "Fresh home-style lunch with 2 rotis, rice, dal, sabzi and salad.",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Biryani Platter",
        price: 200,
        category: "non-veg",
        description: "Flavorful biryani served with raita and salad (chicken or veg options).",
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Paneer Tikka",
        price: 150,
        category: "veg",
        description: "Grilled cottage cheese marinated in spices, served with mint chutney.",
        image: "https://images.unsplash.com/photo-1601050690772-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Bulk Meal (50 people)",
        price: 6750,
        category: "bulk",
        description: "Complete meal for 50 people with veg/non-veg options. 10% discount on 100+ plates.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Dal Tadka",
        price: 100,
        category: "veg",
        description: "Classic Indian lentil dish tempered with ghee and spices.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        name: "Fish Curry",
        price: 220,
        category: "non-veg",
        description: "Traditional fish curry made with fresh catch and coconut milk.",
        image: "https://images.unsplash.com/photo-1601050690772-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        name: "Monthly Tiffin Subscription",
        price: 2100,
        category: "tiffin",
        description: "Subscribe for a month of daily tiffin service with free delivery.",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        name: "Bulk Snacks (100 pieces)",
        price: 2500,
        category: "bulk",
        description: "Assorted snacks for events - samosas, kachoris, sandwiches etc.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
];

// Cart State
let cart = [];

// Initialize the app
function init() {
    // Load menu items
    renderMenuItems(menuData);
    
    // Set up event listeners
    setupEventListeners();
    
    // Update cart count
    updateCartCount();
}

// Set up all event listeners
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Login button click
    loginBtn.addEventListener('click', () => {
        authModal.classList.add('active');
    });
    
    // Close modal buttons
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.modal.active').classList.remove('active');
        });
    });
    
    // Auth tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchAuthTab(tab);
        });
    });
    
    // Login form submission
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const mobile = document.getElementById('login-mobile').value;
        const password = document.getElementById('login-password').value;
        
        if (validateLogin(mobile, password)) {
            alert('Login successful! Redirecting to dashboard...');
            authModal.classList.remove('active');
            // In a real app, you would redirect to dashboard here
        }
    });
    
    // Signup form submission
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const mobile = document.getElementById('signup-mobile').value;
        const password = document.getElementById('signup-password').value;
        const userType = document.getElementById('user-type').value;
        
        if (validateSignup(mobile, password, userType)) {
            alert('Account created successfully! Please login.');
            switchAuthTab('login');
            // Clear signup form
            e.target.reset();
        }
    });
    
    // Cart icon click
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.classList.add('active');
        renderCartItems();
    });
    
    // Filter buttons click
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            filterMenuItems(filter);
        });
    });
    
    // Search input
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterMenuItems('all', searchTerm);
    });
    
    // Chat button click
    chatBtn.addEventListener('click', () => {
        chatModal.classList.add('active');
    });
    
    // Order status button click
    orderStatusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        statusModal.classList.add('active');
    });
    
    // Status form submission
    statusForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const orderId = document.getElementById('order-id').value;
        
        if (orderId) {
            // In a real app, you would check order status from API
            statusResult.innerHTML = `
                <p><strong>Order ID:</strong> ${orderId}</p>
                <p><strong>Status:</strong> Out for delivery</p>
                <p><strong>Estimated Delivery:</strong> Today by 8:00 PM</p>
            `;
            statusResult.style.display = 'block';
        }
    });
    
    // Booking form changes
    bookingForm.addEventListener('change', calculateEstimatedCost);
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed successfully! Our team will contact you shortly.');
        bookingForm.reset();
        calculateEstimatedCost();
    });
    
    // CTA button click
    ctaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });
}

// Render menu items
function renderMenuItems(items) {
    menuContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuContainer.innerHTML = '<p class="no-items">No items found matching your criteria.</p>';
        return;
    }
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.category = item.category;
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <div class="menu-item-content">
                <div class="menu-item-title">
                    <h3>${item.name}</h3>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <span class="menu-item-category">${item.category.toUpperCase()}</span>
                <p class="menu-item-desc">${item.description}</p>
                <button class="btn add-to-cart" data-id="${item.id}">Add to Cart</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
    
    // Add event listeners to Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            addToCart(itemId);
        });
    });
}

// Filter menu items by category and search term
function filterMenuItems(category, searchTerm = '') {
    let filteredItems = menuData;
    
    // Filter by category
    if (category !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === category);
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderMenuItems(filteredItems);
}

// Add item to cart
function addToCart(itemId) {
    const item = menuData.find(item => item.id === itemId);
    
    // Check if item already in cart
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartCount();
    
    // Show feedback to user
    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = `${item.name} added to cart!`;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 2000);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCartItems();
    updateCartCount();
}

// Update item quantity in cart
function updateCartItemQuantity(itemId, newQuantity) {
    const item = cart.find(item => item.id === itemId);
    
    if (item) {
        if (newQuantity < 1) {
            removeFromCart(itemId);
        } else {
            item.quantity = newQuantity;
            renderCartItems();
            updateCartCount();
        }
    }
}

// Render cart items in modal
function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '₹0';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">₹${item.price} x ${item.quantity}</span>
                </div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        
        total += item.price * item.quantity;
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            const item = cart.find(item => item.id === itemId);
            if (item) {
                updateCartItemQuantity(itemId, item.quantity - 1);
            }
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            const item = cart.find(item => item.id === itemId);
            if (item) {
                updateCartItemQuantity(itemId, item.quantity + 1);
            }
        });
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            removeFromCart(itemId);
        });
    });
    
    cartTotal.textContent = `₹${total}`;
}

// Update cart count in navbar
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Switch between login and signup tabs
function switchAuthTab(tab) {
    tabBtns.forEach(btn => {
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    authForms.forEach(form => {
        if (form.id === `${tab}-form`) {
            form.classList.add('active');
        } else {
            form.classList.remove('active');
        }
    });
}

// Validate login form
function validateLogin(mobile, password) {
    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return false;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
    }
    
    return true;
}

// Validate signup form
function validateSignup(mobile, password, userType) {
    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return false;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
    }
    
    if (!userType) {
        alert('Please select user type');
        return false;
    }
    
    return true;
}

// Calculate estimated cost for booking form
function calculateEstimatedCost() {
    const eventType = document.getElementById('event-type').value;
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const addons = document.querySelectorAll('input[name="addon"]:checked').length;
    
    let cost = 0;
    
    if (eventType === 'daily') {
        cost = quantity * 70;
    } else if (eventType === 'monthly') {
        cost = quantity * 70 * 30; // 30 days
        if (document.getElementById('delivery').checked) {
            cost += 600; // Delivery charge
        }
    } else if (eventType === 'event' || eventType === 'corporate') {
        cost = quantity * 150;
        if (quantity >= 100) {
            cost *= 0.9; // 10% discount
        }
    }
    
    // Add addons cost
    cost += addons * 25 * quantity;
    
    estimatedCost.textContent = `₹${cost}`;
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);