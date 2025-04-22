// DOM Elements
const menuSearch = document.getElementById('menu-search');
const categoryBtns = document.querySelectorAll('.category-btn');

// Filter Menu Items
function filterMenuItems() {
    const searchTerm = menuSearch.value.toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    document.querySelectorAll('.menu-item').forEach(item => {
        const itemName = item.querySelector('.menu-item-title').textContent.toLowerCase();
        const itemCategory = item.dataset.category;
        
        const matchesSearch = itemName.includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || itemCategory === activeCategory;
        
        if (matchesSearch && matchesCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Event Listeners
menuSearch.addEventListener('input', filterMenuItems);

categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        categoryBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterMenuItems();
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', filterMenuItems);