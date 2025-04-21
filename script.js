// Vocabfood - script.js

// Sample food data
const foodData = [
  { name: 'North Indian Thali', price: 150, category: 'Veg', image: 'https://source.unsplash.com/400x300/?north-indian' },
  { name: 'South Indian Meals', price: 140, category: 'Veg', image: 'https://source.unsplash.com/400x300/?south-indian' },
  { name: 'Chicken Biryani', price: 250, category: 'Non-Veg', image: 'https://source.unsplash.com/400x300/?biryani' },
  { name: 'Tiffin (1 Day)', price: 70, category: 'Tiffin', image: 'https://source.unsplash.com/400x300/?tiffin' },
  { name: 'Monthly Plan (No Delivery)', price: 1500, category: 'Tiffin', image: 'https://source.unsplash.com/400x300/?mealbox' },
  { name: 'Monthly Plan (With Delivery)', price: 2100, category: 'Tiffin', image: 'https://source.unsplash.com/400x300/?tiffin-service' },
  { name: 'Bulk Veg Catering', price: 135, category: 'Bulk', image: 'https://source.unsplash.com/400x300/?catering' },
  { name: 'Bulk Non-Veg Catering', price: 200, category: 'Bulk', image: 'https://source.unsplash.com/400x300/?non-veg-thali' },
  { name: 'Paneer Masala Combo', price: 160, category: 'Veg', image: 'https://source.unsplash.com/400x300/?paneer' },
  { name: 'Family Thali (4 Person)', price: 599, category: 'Veg', image: 'https://source.unsplash.com/400x300/?thali' }
];

const menuSection = document.getElementById('menu');
const cartCount = document.getElementById('cart-count');

let cartItems = [];

function renderMenu(data) {
  menuSection.innerHTML = '';
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick='addToCart("${item.name}", ${item.price})'>Book Now</button>
    `;
    menuSection.appendChild(card);
  });
}

function addToCart(name, price) {
  cartItems.push({ name, price });
  cartCount.textContent = cartItems.length;
  alert(`Added ${name} to cart.`);
}

function filterMenu(category) {
  if (category === 'All') {
    renderMenu(foodData);
  } else {
    const filtered = foodData.filter(item => item.category === category);
    renderMenu(filtered);
  }
}

function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function toggleAuth() {
  alert('Login/Register modal will appear here.');
}

function toggleCart() {
  let total = cartItems.reduce((acc, item) => acc + item.price, 0);
  let message = cartItems.map(item => `• ${item.name} – ₹${item.price}`).join('\n');
  alert(`Cart:\n${message}\n\nTotal: ₹${total}`);
}

function showOrderStatus() {
  const orderId = prompt('Enter your order ID to track:');
  if (orderId) {
    alert(`Tracking Order ID: ${orderId}\nStatus: Preparing your food!`);
  }
}

// Initialize
renderMenu(foodData);

