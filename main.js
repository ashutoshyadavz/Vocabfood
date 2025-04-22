/* Base Styles */
:root {
    --primary: #f5a623;
    --primary-dark: #e69100;
    --secondary: #4CAF50;
    --dark: #222;
    --darker: #111;
    --light: #f9f9f9;
    --lighter: #fff;
    --gray: #777;
    --light-gray: #eee;
    --danger: #e74c3c;
    --success: #2ecc71;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Roboto', sans-serif;
    color: var(--dark);
    background-color: var(--lighter);
    line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.2;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    max-width: 100%;
    height: auto;
}

ul {
    list-style: none;
}

button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 80px 0;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-align: center;
    position: relative;
    color: var(--darker);
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: var(--primary);
    margin: 15px auto;
    border-radius: 2px;
}

.btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: var(--primary);
    color: var(--lighter);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    text-align: center;
    transition: var(--transition);
}

.btn:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
}

.btn-primary {
    background-color: var(--primary);
    color: var(--lighter);
}

.btn-primary:hover {
    background-color: var(--primary-dark);
}

.btn-outline {
    background-color: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background-color: var(--primary);
    color: var(--lighter);
}

.btn-sm {
    padding: 8px 16px;
    font-size: 0.9rem;
}

.btn-block {
    display: block;
    width: 100%;
}

/* Header Styles */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--darker);
    color: var(--lighter);
    z-index: 1000;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary);
}

.nav-list {
    display: flex;
    gap: 30px;
}

.nav-list a {
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-list a:hover {
    color: var(--primary);
}

.nav-list a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: var(--transition);
}

.nav-list a:hover::after {
    width: 100%;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 20px;
}

.cart-icon, .social-icon {
    position: relative;
    font-size: 1.2rem;
    color: var(--lighter);
    transition: var(--transition);
}

.cart-icon:hover, .social-icon:hover {
    color: var(--primary);
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--primary);
    color: var(--lighter);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
}

.nav-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--lighter);
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    height: 100vh;
    min-height: 600px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover;
    color: var(--lighter);
    display: flex;
    align-items: center;
    padding-top: 80px;
}

.hero-content {
    max-width: 600px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

/* About Section */
.about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.about-content p {
    margin-bottom: 40px;
    font-size: 1.1rem;
}

.about-stats {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 5px;
}

.stat-label {
    font-size: 1rem;
    color: var(--gray);
}

/* Menu Section */
.menu-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 20px;
}

.search-box {
    position: relative;
    flex: 1;
    min-width: 250px;
    max-width: 400px;
}

.search-box input {
    width: 100%;
    padding: 12px 20px 12px 45px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    font-size: 1rem;
    transition: var(--transition);
}

.search-box input:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.2);
}

.search-box i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray);
}

.category-filters {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.category-btn {
    padding: 8px 16px;
    background-color: var(--light-gray);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: var(--transition);
}

.category-btn:hover {
    background-color: #ddd;
}

.category-btn.active {
    background-color: var(--primary);
    color: var(--lighter);
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.menu-item {
    background-color: var(--lighter);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.menu-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.menu-item-img {
    height: 200px;
    overflow: hidden;
}

.menu-item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.menu-item:hover .menu-item-img img {
    transform: scale(1.05);
}

.menu-item-content {
    padding: 20px;
}

.menu-item-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--darker);
}

.menu-item-desc {
    color: var(--gray);
    margin-bottom: 15px;
    font-size: 0.9rem;
}

.menu-item-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.price {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary);
}

/* Booking Section */
.booking-form {
    max-width: 800px;
    margin: 0 auto;
    background-color: var(--lighter);
    padding: 30px;
    border-radius: 8px;
    box-shadow: var(--shadow);
}

.form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.form-group {
    flex: 1;
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.2);
}

.price-summary {
    margin: 30px 0;
    border-top: 1px solid var(--light-gray);
    padding-top: 20px;
}

.price-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.price-item.total {
    font-weight: 700;
    font-size: 1.1rem;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid var(--light-gray);
}

.price-item.discount {
    color: var(--success);
}

/* Contact Section */
.contact-content {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.contact-info, .contact-form {
    flex: 1;
    min-width: 300px;
}

.contact-info h3, .contact-form h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: var(--darker);
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.contact-item i {
    font-size: 1.2rem;
    color: var(--primary);
    width: 30px;
    text-align: center;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--light-gray);
    border-radius: 50%;
    transition: var(--transition);
}

.social-links a:hover {
    background-color: var(--primary);
    color: var(--lighter);
}

/* Footer */
.footer {
    background-color: var(--darker);
    color: var(--lighter);
    padding: 60px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-col {
    flex: 1;
    min-width: 200px;
}

.footer-col h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--primary);
}

.footer-col ul li {
    margin-bottom: 10px;
}

.footer-col ul li a {
    transition: var(--transition);
}

.footer-col ul li a:hover {
    color: var(--primary);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    color: var(--gray);
}

/* Modal Styles */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
}

.modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background-color: var(--lighter);
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-20px);
    transition: var(--transition);
}

.modal.active .modal-content {
    transform: translateY(0);
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid var(--light-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    font-size: 1.5rem;
    color: var(--darker);
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--gray);
    transition: var(--transition);
}

.modal-close:hover {
    color: var(--dark);
}

.modal-body {
    padding: 20px;
}

.auth-tabs {
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--light-gray);
}

.tab-btn {
    padding: 10px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: var(--gray);
    position: relative;
    transition: var(--transition);
}

.tab-btn.active {
    color: var(--primary);
}

.tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary);
}

.auth-form {
    display: none;
}

.auth-form.active {
    display: block;
}

/* Cart Styles */
.cart-items {
    margin-bottom: 20px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid var(--light-gray);
}

.cart-item:last-child {
    border-bottom: none;
}

.cart-item-info {
    flex: 1;
}

.cart-item-title {
    font-weight: 500;
    margin-bottom: 5px;
}

.cart-item-price {
    color: var(--primary);
    font-weight: 500;
}

.cart-item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart-item-quantity button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--light-gray);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.cart-item-quantity button:hover {
    background-color: #ddd;
}

.empty-cart {
    text-align: center;
    padding: 40px 0;
}

.empty-cart i {
    font-size: 3rem;
    color: var(--light-gray);
    margin-bottom: 20px;
}

.empty-cart p {
    color: var(--gray);
}

.cart-summary {
    border-top: 1px solid var(--light-gray);
    padding-top: 20px;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.summary-item.total {
    font-weight: 700;
    font-size: 1.1rem;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid var(--light-gray);
}

.summary-item.discount {
    color: var(--success);
}

/* Dashboard Styles */
.welcome-message {
    margin-bottom: 30px;
    text-align: center;
}

.welcome-message h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.order-item {
    background-color: var(--light-gray);
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
}

.order-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: var(--gray);
}

.order-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.order-status {
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
}

.order-status.delivered {
    background-color: rgba(46, 204, 113, 0.2);
    color: var(--success);
}

.partner-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.stat-card {
    flex: 1;
    min-width: 150px;
    background-color: var(--light-gray);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}

.stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 5px;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--gray);
}

.partner-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
}

/* Timeline Styles */
.timeline {
    position: relative;
    padding-left: 30px;
    margin-top: 20px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--light-gray);
}

.timeline-item {
    position: relative;
    margin-bottom: 20px;
}

.timeline-dot {
    position: absolute;
    left: -30px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;
}

.timeline-item.active .timeline-dot {
    background-color: var(--primary);
}

.timeline-dot::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--lighter);
}

.timeline-content p {
    font-weight: 500;
    margin-bottom: 5px;
}

.timeline-content span {
    font-size: 0.9rem;
    color: var(--gray);
}

/* Chat Button */
.chat-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background-color: var(--primary);
    color: var(--lighter);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: var(--transition);
}

.chat-btn:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
}

.chat-modal .modal-content {
    max-width: 400px;
}

.chat-message {
    background-color: var(--light-gray);
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.chat-actions {
    display: flex;
    gap: 10px;
}

/* Notification */
.notification {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background-color: var(--success);
    color: var(--lighter);
    padding: 15px 25px;
    border-radius: 4px;
    box-shadow: var(--shadow);
    z-index: 3000;
    transition: var(--transition);
    opacity: 0;
}

.notification.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}

/* Responsive Styles */
@media (max-width: 992px) {
    .section {
        padding: 60px 0;
    }

    .section-title {
        font-size: 2rem;
    }

    .hero h1 {
        font-size: 2.8rem;
    }

    .form-row {
        flex-direction: column;
        gap: 0;
    }
}

@media (max-width: 768px) {
    .nav {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: var(--darker);
        padding: 20px;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: var(--transition);
    }

    .nav.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .nav-list {
        flex-direction: column;
        gap: 15px;
    }

    .nav-toggle {
        display: block;
    }

    .hero {
        padding-top: 80px;
        text-align: center;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .menu-controls {
        flex-direction: column;
        align-items: stretch;
    }

    .search-box {
        max-width: 100%;
    }

    .category-filters {
        justify-content: center;
    }

    .contact-content {
        flex-direction: column;
    }

    .footer-col {
        min-width: 100%;
    }
}

@media (max-width: 576px) {
    .section {
        padding: 40px 0;
    }

    .section-title {
        font-size: 1.8rem;
        margin-bottom: 30px;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .stat-number {
        font-size: 2rem;
    }

    .menu-grid {
        grid-template-columns: 1fr;
    }

    .modal-content {
        max-width: 95%;
    }
}