// DOM Elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const dashboardModal = document.getElementById('dashboard-modal');
const customerDashboard = document.getElementById('customer-dashboard');
const partnerDashboard = document.getElementById('partner-dashboard');
const dashboardTitle = document.getElementById('dashboard-title');
const userName = document.getElementById('user-name');

// Dummy User Data
const users = [
    { mobile: '9876543210', password: 'password123', name: 'John Doe', type: 'customer' },
    { mobile: '9876543211', password: 'password123', name: 'Vocab Partner', type: 'partner' }
];

// Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const mobile = document.getElementById('login-mobile').value;
    const password = document.getElementById('login-password').value;
    
    // Find user in dummy data
    const user = users.find(u => u.mobile === mobile && u.password === password);
    
    if (user) {
        // Show success notification
        showNotification('Login successful! Redirecting...');
        
        // Close login modal
        toggleModal(loginModal);
        
        // Set user name in dashboard
        userName.textContent = user.name;
        
        // Show appropriate dashboard
        if (user.type === 'customer') {
            customerDashboard.style.display = 'block';
            partnerDashboard.style.display = 'none';
            dashboardTitle.textContent = 'Customer Dashboard';
        } else {
            customerDashboard.style.display = 'none';
            partnerDashboard.style.display = 'block';
            dashboardTitle.textContent = 'Partner Dashboard';
        }
        
        // Show dashboard after delay
        setTimeout(() => {
            toggleModal(dashboardModal);
        }, 1000);
    } else {
        showNotification('Invalid mobile number or password', 3000);
    }
});

// Signup Form Submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const mobile = document.getElementById('signup-mobile').value;
    const password = document.getElementById('signup-password').value;
    const userType = document.getElementById('user-type').value;
    
    // Check if mobile already exists
    if (users.some(u => u.mobile === mobile)) {
        showNotification('Mobile number already registered', 3000);
        return;
    }
    
    // Add new user to dummy data
    users.push({
        mobile,
        password,
        name,
        type: userType
    });
    
    // Show success notification
    showNotification('Account created successfully! Please login.');
    
    // Switch to login tab
    document.querySelector('.tab-btn[data-tab="login"]').click();
    
    // Clear form
    signupForm.reset();
});

// New Order Button in Dashboard
document.getElementById('new-order-btn')?.addEventListener('click', () => {
    toggleModal(dashboardModal);
    window.location.hash = '#menu';
});