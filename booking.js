// DOM Elements
const bookingForm = document.getElementById('booking-form');
const platesInput = document.getElementById('plates');
const addonsInput = document.getElementById('addons');
const basePriceEl = document.getElementById('base-price');
const addonPriceEl = document.getElementById('addon-price');
const discountEl = document.getElementById('discount');
const totalPriceEl = document.getElementById('total-price');

// Pricing Constants
const BASE_PRICE_PER_PLATE = 150;
const ADDON_PRICE = 25;
const BULK_DISCOUNT_THRESHOLD = 100;
const BULK_DISCOUNT_PERCENT = 10;

// Calculate and Update Pricing
function updatePricing() {
    const plates = parseInt(platesInput.value) || 0;
    const addons = parseInt(addonsInput.value) || 0;
    
    const basePrice = plates * BASE_PRICE_PER_PLATE;
    const addonPrice = addons * ADDON_PRICE;
    const subtotal = basePrice + addonPrice;
    
    // Apply bulk discount if applicable
    let discount = 0;
    if (plates >= BULK_DISCOUNT_THRESHOLD) {
        discount = subtotal * (BULK_DISCOUNT_PERCENT / 100);
    }
    
    const total = subtotal - discount;
    
    // Update UI
    basePriceEl.textContent = `₹${basePrice}`;
    addonPriceEl.textContent = `₹${addonPrice}`;
    discountEl.textContent = `-₹${discount}`;
    totalPriceEl.textContent = `₹${total}`;
}

// Form Submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        plates: platesInput.value,
        addons: addonsInput.value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        total: totalPriceEl.textContent
    };
    
    // In a real app, you would send this data to a server
    console.log('Booking submitted:', formData);
    
    // Show success message
    showNotification(`Booking confirmed! Total: ${totalPriceEl.textContent}`, 5000);
    
    // Reset form
    bookingForm.reset();
    updatePricing();
});

// Event Listeners for Price Calculation
platesInput.addEventListener('input', updatePricing);
addonsInput.addEventListener('input', updatePricing);

// Initialize Pricing
updatePricing();