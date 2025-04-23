/**
 * Vocabfood - Main JavaScript File
 * Combines all core functionality with responsive improvements
 */

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('.nav');
const loginBtn = document.getElementById('login-btn');
const cartIcon = document.getElementById('cart-icon');
const modalCloses = document.querySelectorAll('.modal-close');
const chatBtn = document.getElementById('chat-btn');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');

// Mobile Navigation
function initMobileNav() {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        navToggle.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking links
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        });
    });
}

// Modal System
function initModals() {
    const toggleModal = (modal) => {
        modal.classList.toggle('active');
        document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
    };

    // Modal triggers
    if (loginBtn) loginBtn.addEventListener('click', () => toggleModal(document.getElementById('login-modal')));
    if (cartIcon) cartIcon.addEventListener('click', () => toggleModal(document.getElementById('cart-modal')));
    if (chatBtn) chatBtn.addEventListener('click', () => toggleModal(document.getElementById('chat-modal')));

    // Close modals
    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            toggleModal(modal);
        });
    });

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            toggleModal(e.target);
        }
    });
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile nav if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    document.body.style.overflow = '';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Notification System
function showNotification(message, duration = 3000) {
    notificationMessage.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

// Form Helpers
function initForms() {
    // Set min date for booking
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) dateInput.min = today;

    // Prevent zoom on input focus (iOS)
    document.body.addEventListener('focusin', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            window.scrollTo(0, 0);
            document.body.style.zoom = "100%";
        }
    });
}

// Lazy Loading
function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.add('lazyloaded');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            lazyImageObserver.observe(img);
        });
    }
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initModals();
    initSmoothScroll();
    initForms();
    initLazyLoad();
});

// Make notification function available globally
window.showNotification = showNotification;
