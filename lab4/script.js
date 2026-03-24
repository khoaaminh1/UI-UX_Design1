// Menu Data with banner paths
const menuData = {
    burger: {
        banner: 'assets/images/food/burgers/burgerBanner.jpg',
        items: [
            {
                id: 'burger-1',
                name: 'Classic Burger',
                description: 'Beef patty, lettuce, tomato, c...',
                price: 8.99,
                image: 'assets/images/food/burgers/classicBurger.jpg'
            },
            {
                id: 'burger-2',
                name: 'Cheese Burger',
                description: 'Double cheese, bacon, speci...',
                price: 10.99,
                image: 'assets/images/food/burgers/cheeseBurger.jpg'
            },
            {
                id: 'burger-3',
                name: 'Chicken Burger',
                description: 'Grilled chicken, mayo, lettuce...',
                price: 9.49,
                image: 'assets/images/food/burgers/chickenBurger.jpg'
            },
            {
                id: 'burger-4',
                name: 'Veggie Burger',
                description: 'Plant-based patty, fresh veg...',
                price: 8.49,
                image: 'assets/images/food/burgers/veggieBurger.jpg'
            }
        ]
    },
    pizza: {
        banner: 'assets/images/food/pizzas/pizzaBanner.jpg',
        items: [
            {
                id: 'pizza-1',
                name: 'Margherita Pizza',
                description: 'Fresh mozzarella, basil, tom...',
                price: 12.99,
                image: 'assets/images/food/pizzas/margheritaPizza.jpg'
            },
            {
                id: 'pizza-2',
                name: 'Pepperoni Pizza',
                description: 'Loaded with pepperoni, extr...',
                price: 13.99,
                image: 'assets/images/food/pizzas/pepperoniPizza.jpg'
            },
            {
                id: 'pizza-3',
                name: 'Veggie Pizza',
                description: 'Bell peppers, mushrooms, olio...',
                price: 11.99,
                image: 'assets/images/food/pizzas/veggiePizza.jpg'
            },
            {
                id: 'pizza-4',
                name: 'Seafood Pizza',
                description: 'Shrimp, squid, white sauce...',
                price: 14.99,
                image: 'assets/images/food/pizzas/seafoodPizza.jpg'
            }
        ]
    },
    sushi: {
        banner: 'assets/images/food/sushis/sushibanner.jpg',
        items: [
            {
                id: 'sushi-1',
                name: 'California Roll',
                description: 'Crab, avocado, cucumber...',
                price: 10.99,
                image: 'assets/images/food/sushis/californiaRoll.jpg'
            },
            {
                id: 'sushi-2',
                name: 'Spicy Tuna Roll',
                description: 'Spicy tuna, mayo, sriracha...',
                price: 11.49,
                image: 'assets/images/food/sushis/spicytunaRoll.jpg'
            },
            {
                id: 'sushi-3',
                name: 'Dragon Roll',
                description: 'Eel, avocado, sesame seeds...',
                price: 12.99,
                image: 'assets/images/food/sushis/dragonRoll.jpg'
            },
            {
                id: 'sushi-4',
                name: 'Philadelphia Roll',
                description: 'Salmon, cream cheese, cucumber...',
                price: 11.99,
                image: 'assets/images/food/sushis/philadelphiaRoll.jpg'
            }
        ]
    }
};

// Cart State
let cart = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems('burger');
    setupTabListeners();
    setupQuantityListeners();
    setupNavigation();
});

// Render menu items
function renderMenuItems(category) {
    const menuItems = document.getElementById('menu-items');
    const items = menuData[category].items;

    menuItems.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <div>
                        <div class="menu-item-name">${item.name}</div>
                        <div class="menu-item-desc">${item.description}</div>
                    </div>
                    <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="quantity-control">
                    <button class="qty-btn qty-minus" data-id="${item.id}">−</button>
                    <div class="qty-display" data-id="${item.id}">${getQuantity(item.id)}</div>
                    <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
                    <button class="add-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">+</button>
                </div>
            </div>
        </div>
    `).join('');

    setupQuantityListeners();
    updateTotalPrice();
}

// Setup tab listeners
function setupTabListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get category and update banner + menu
            const category = btn.dataset.category;
            
            // Update banner
            const heroBanner = document.getElementById('hero-banner');
            if (heroBanner) {
                heroBanner.src = menuData[category].banner;
                heroBanner.alt = category.charAt(0).toUpperCase() + category.slice(1) + ' Banner';
            }
            
            // Render new category items
            renderMenuItems(category);
        });
    });
}

// Setup quantity listeners
function setupQuantityListeners() {
    // Minus buttons
    document.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const itemId = btn.dataset.id;
            if (cart[itemId]) {
                if (typeof cart[itemId] === 'object') {
                    cart[itemId].quantity--;
                    if (cart[itemId].quantity <= 0) delete cart[itemId];
                } else {
                    cart[itemId]--;
                    if (cart[itemId] <= 0) delete cart[itemId];
                }
            }
            updateDisplay();
        });
    });

    // Plus buttons
    document.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const itemId = btn.dataset.id;
            if (!cart[itemId]) {
                // find item details from menuData
                const found = findMenuItemById(itemId);
                if (found) {
                    cart[itemId] = { name: found.name, price: found.price, quantity: 1 };
                }
            } else {
                if (typeof cart[itemId] === 'object') cart[itemId].quantity++;
                else cart[itemId]++;
            }
            updateDisplay();
        });
    });

    // Add to cart buttons (explicit add)
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const itemId = btn.dataset.id;
            const itemName = btn.dataset.name;
            const itemPrice = parseFloat(btn.dataset.price);

            if (!cart[itemId]) {
                cart[itemId] = {
                    name: itemName,
                    price: itemPrice,
                    quantity: 1
                };
            } else {
                if (typeof cart[itemId] === 'object') cart[itemId].quantity++;
                else cart[itemId]++;
            }

            updateDisplay();
            
            // Visual feedback
            btn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// Helper: find item in menuData by id
function findMenuItemById(id) {
    for (const key in menuData) {
        const found = menuData[key].items.find(i => i.id === id);
        if (found) return found;
    }
    return null;
}

// Get quantity for display
function getQuantity(itemId) {
    if (cart[itemId]) {
        return typeof cart[itemId] === 'number' ? cart[itemId] : cart[itemId].quantity;
    }
    return 0;
}

// Update display
function updateDisplay() {
    // Update all quantity displays
    document.querySelectorAll('.qty-display').forEach(display => {
        const itemId = display.dataset.id;
        display.textContent = getQuantity(itemId);
    });

    updateTotalPrice();
}

// Update total price
function updateTotalPrice() {
    let total = 0;

    Object.values(cart).forEach(item => {
        if (typeof item === 'object') {
            total += item.price * item.quantity;
        }
    });

    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Setup navigation
function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
        });
    });

    // View cart button
    document.querySelector('.view-cart-btn').addEventListener('click', () => {
        if (Object.keys(cart).length === 0) {
            alert('Your cart is empty!');
            return;
        }

        let cartSummary = 'Your Cart:\n\n';
        let total = 0;

        Object.entries(cart).forEach(([id, item]) => {
            if (typeof item === 'object') {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                cartSummary += `${item.name} x${item.quantity} - $${subtotal.toFixed(2)}\n`;
            }
        });

        cartSummary += `\nTotal: $${total.toFixed(2)}`;
        alert(cartSummary);
    });
}
