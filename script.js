===== script.js =====
/**
 * ShopTuch Premium E-Commerce Functionality Engine
 * Architecture: Model-View-Controller (MVC) style in Vanilla JavaScript
 * Features: Dark Mode, Loading Overlay, Dynamic Rendering, Wishlist, Cart Drawer, Search, Category Filters, Modals, Responsive Drawers, Countdown
 */

// Model State
const AppState = {
    products: [
        {
            id: "p1",
            title: "Ultra Wireless Noise-Cancelling Headphones V3",
            category: "Electronics",
            tag: "trending",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
            oldPrice: 199.99,
            newPrice: 149.99,
            rating: 4.8,
            reviews: 142,
            desc: "Experience true audio purity. Designed with industry-leading hybrid active noise cancellation, smart adaptive sound presets, and a premium travel pouch."
        },
        {
            id: "p2",
            title: "AMOLED Premium Smart Watch Waterproof V2",
            category: "Smart Watches",
            tag: "bestseller",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
            oldPrice: 249.99,
            newPrice: 189.99,
            rating: 4.9,
            reviews: 310,
            desc: "The next evolution in wearable technology. Track fitness metrics, review real-time GPS locations, check dynamic vitals, and keep a beautifully bright premium display."
        },
        {
            id: "p3",
            title: "Handcrafted Italian Leather Travel Wallet",
            category: "Accessories",
            tag: "featured",
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
            oldPrice: 89.99,
            newPrice: 59.99,
            rating: 4.7,
            reviews: 84,
            desc: "Constructed with authentic full-grain leather. Offers robust RFID-blocking tech, safe spacious currency compartments, and custom artisan stitch patterns."
        },
        {
            id: "p4",
            title: "Minimalist Double-Wall Ceramic Coffee Mug",
            category: "Home & Kitchen",
            tag: "flash",
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80",
            oldPrice: 39.99,
            newPrice: 19.99,
            rating: 4.6,
            reviews: 56,
            desc: "Double-walled premium ceramic protection ensures your coffee stays scorching hot while your hands remain comfortable. Built for pure visual and tactile elegance."
        },
        {
            id: "p5",
            title: "Tactile Mechanical Wireless Keyboard RGB",
            category: "Gaming",
            tag: "featured",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
            oldPrice: 159.99,
            newPrice: 129.99,
            rating: 4.9,
            reviews: 190,
            desc: "Hot-swappable tactile switches wrapped in a durable aircraft-grade aluminum alloy body. Boasts beautiful customization with full addressable RGB support."
        },
        {
            id: "p6",
            title: "Premium Ergonomic Waterproof Backpack",
            category: "Fashion",
            tag: "bestseller",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
            oldPrice: 120.00,
            newPrice: 79.99,
            rating: 4.8,
            reviews: 422,
            desc: "Expertly crafted for modern commuters. Integrated laptop protection sleeves, anti-theft zipper locking mechanisms, and robust heavy waterproof fabrics."
        },
        {
            id: "p7",
            title: "Ionic Professional Hair Dryer & Diffuser",
            category: "Beauty",
            tag: "featured",
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80",
            oldPrice: 179.99,
            newPrice: 139.99,
            rating: 4.7,
            reviews: 115,
            desc: "Advanced high-velocity airflow powered by negative-ion emission tech. Dry your hair in minutes while reducing frizz and locking in premium glow."
        },
        {
            id: "p8",
            title: "Insulated Heavy-Duty Gym Water Bottle",
            category: "Fitness",
            tag: "flash",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80",
            oldPrice: 34.99,
            newPrice: 15.99,
            rating: 4.5,
            reviews: 98,
            desc: "Sturdy vacuum insulation keeps standard liquids cold for 24 hours. Features premium powder-coated steel outer layering to resist dents and drops."
        },
        {
            id: "p9",
            title: "Premium True Wireless Earbuds HD Touch",
            category: "Electronics",
            tag: "bestseller",
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
            oldPrice: 149.99,
            newPrice: 99.99,
            rating: 4.7,
            reviews: 260,
            desc: "Compact wireless buds featuring custom sound equalizer software, robust battery performance, clear calls, and responsive physical gesture sensors."
        },
        {
            id: "p10",
            title: "AMOLED Dual-Band Slim Fitness Band",
            category: "Smart Watches",
            tag: "flash",
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
            oldPrice: 99.99,
            newPrice: 49.99,
            rating: 4.6,
            reviews: 73,
            desc: "Ultra-thin, lightweight band featuring automated heart-rate detection, reliable sleep-quality monitoring, and seamless phone integration."
        },
        {
            id: "p11",
            title: "Pro 7-in-1 Aluminium USB-C Docking Hub",
            category: "Accessories",
            tag: "trending",
            image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500&q=80",
            oldPrice: 69.99,
            newPrice: 45.00,
            rating: 4.8,
            reviews: 135,
            desc: "Expand your productivity. Features brilliant HDMI output supporting 4K, multiple USB 3.0 lines, and standard modern SD/MicroSD card slot integration."
        },
        {
            id: "p12",
            title: "Ultra-Lightweight Wireless Gaming Mouse",
            category: "Gaming",
            tag: "trending",
            image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
            oldPrice: 119.99,
            newPrice: 89.99,
            rating: 4.9,
            reviews: 180,
            desc: "Engineered with modern professional esports gaming sensors. Ultra lightweight honeycomb pattern construction to deliver absolute agility and speed."
        }
    ],
    cart: JSON.parse(localStorage.getItem('shoptuch_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('shoptuch_wishlist')) || [],
    selectedProduct: null,
    currentCategoryFilter: null,
    currentTagFilter: 'all',
    searchQuery: ''
};

// DOM Selectors
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    themeToggle: document.getElementById('theme-toggle'),
    scrollToTop: document.getElementById('scroll-to-top'),
    productsGrid: document.getElementById('products-grid-container'),
    cartTrigger: document.getElementById('cart-trigger'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartDrawerClose: document.getElementById('cart-drawer-close'),
    cartOverlay: document.getElementById('cart-drawer-overlay'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    cartBadge: document.getElementById('cart-badge'),
    drawerCartCount: document.getElementById('drawer-cart-count'),
    cartSubtotalAmount: document.getElementById('cart-subtotal-amount'),
    wishlistTrigger: document.getElementById('wishlist-trigger'),
    wishlistDrawer: document.getElementById('wishlist-drawer'),
    wishlistDrawerClose: document.getElementById('wishlist-drawer-close'),
    wishlistOverlay: document.getElementById('wishlist-drawer-overlay'),
    wishlistItemsContainer: document.getElementById('wishlist-items-container'),
    wishlistBadge: document.getElementById('wishlist-badge'),
    drawerWishlistCount: document.getElementById('drawer-wishlist-count'),
    mobileMenuTrigger: document.getElementById('mobile-menu-trigger'),
    mobileNavDrawer: document.getElementById('mobile-nav-drawer'),
    mobileMenuClose: document.getElementById('mobile-menu-close'),
    drawerOverlay: document.getElementById('drawer-overlay'),
    quickviewModal: document.getElementById('quickview-modal'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalProductImage: document.getElementById('modal-product-image'),
    modalProductTag: document.getElementById('modal-product-tag'),
    modalProductTitle: document.getElementById('modal-product-title'),
    modalStars: document.getElementById('modal-stars'),
    modalReviewsCount: document.getElementById('modal-reviews-count'),
    modalPriceOld: document.getElementById('modal-price-old'),
    modalPriceNew: document.getElementById('modal-price-new'),
    modalProductDescription: document.getElementById('modal-product-description'),
    qtyMinus: document.getElementById('qty-minus'),
    qtyPlus: document.getElementById('qty-plus'),
    qtyVal: document.getElementById('qty-val'),
    modalAddToCartBtn: document.getElementById('modal-add-to-cart-btn'),
    searchForm: document.getElementById('search-form'),
    productSearch: document.getElementById('product-search'),
    mobileSearchForm: document.getElementById('mobile-search-form'),
    mobileSearchInput: document.getElementById('mobile-search-input'),
    toastHub: document.getElementById('toast-hub'),
    filterTabs: document.querySelectorAll('.filter-tab'),
    categoryCards: document.querySelectorAll('.category-card')
};

// Initialization Run
document.addEventListener('DOMContentLoaded', () => {
    // Hide Loading Screen
    setTimeout(() => {
        elements.loadingScreen.classList.add('fade-out');
    }, 600);

    // Dynamic product render
    renderProducts();

    // Init Theme
    initTheme();

    // Register Event Listeners
    setupEventListeners();

    // Start Flash countdown
    startFlashCountdown();

    // Run dynamic scroll animation checker
    setupScrollAnimationObserver();

    // Render Cart / Wishlist totals
    updateCartUI();
    updateWishlistUI();
});

// Theme Logic
function initTheme() {
    const savedTheme = localStorage.getItem('shoptuch_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
        elements.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        elements.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('shoptuch_theme', isDark ? 'dark' : 'light');
    elements.themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    showToast(isDark ? "Dark theme enabled" : "Light theme enabled");
}

// Global Event Listeners Setup
function setupEventListeners() {
    // Theme Toggle
    elements.themeToggle.addEventListener('click', toggleTheme);

    // Scroll to Top action and visibility
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            elements.scrollToTop.classList.add('visible');
        } else {
            elements.scrollToTop.classList.remove('visible');
        }
    });
    elements.scrollToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Drawers Actions
    elements.cartTrigger.addEventListener('click', () => toggleCartDrawer(true));
    elements.cartDrawerClose.addEventListener('click', () => toggleCartDrawer(false));
    elements.cartOverlay.addEventListener('click', () => toggleCartDrawer(false));

    elements.wishlistTrigger.addEventListener('click', () => toggleWishlistDrawer(true));
    elements.wishlistDrawerClose.addEventListener('click', () => toggleWishlistDrawer(false));
    elements.wishlistOverlay.addEventListener('click', () => toggleWishlistDrawer(false));

    elements.mobileMenuTrigger.addEventListener('click', () => toggleMobileDrawer(true));
    elements.mobileMenuClose.addEventListener('click', () => toggleMobileDrawer(false));
    elements.drawerOverlay.addEventListener('click', () => toggleMobileDrawer(false));

    // Search Actions
    elements.searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        triggerSearch(elements.productSearch.value);
    });
    elements.productSearch.addEventListener('input', (e) => {
        triggerSearch(e.target.value);
    });

    elements.mobileSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        triggerSearch(elements.mobileSearchInput.value);
        toggleMobileDrawer(false);
    });

    // Navigation and Categorized filters
    elements.filterTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            elements.filterTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            AppState.currentTagFilter = e.target.getAttribute('data-tag');
            AppState.currentCategoryFilter = null; // Reset category filter on hub tab switch
            renderProducts();
        });
    });

    elements.categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            AppState.currentCategoryFilter = category;
            AppState.currentTagFilter = 'all';
            
            // Sync filter tabs visual UI to 'all'
            elements.filterTabs.forEach(t => {
                if (t.getAttribute('data-tag') === 'all') t.classList.add('active');
                else t.classList.remove('active');
            });

            renderProducts();
            
            // Scroll to catalog section smoothly
            document.getElementById('products-hub').scrollIntoView({ behavior: 'smooth' });
            showToast(`Filtering category: ${category}`);
        });
    });

    // Modal Events
    elements.modalCloseBtn.addEventListener('click', closeQuickView);
    elements.modalBackdrop.addEventListener('click', closeQuickView);

    elements.qtyMinus.addEventListener('click', () => updateModalQty(-1));
    elements.qtyPlus.addEventListener('click', () => updateModalQty(1));

    elements.modalAddToCartBtn.addEventListener('click', () => {
        if (AppState.selectedProduct) {
            const qty = parseInt(elements.qtyVal.textContent);
            addToCart(AppState.selectedProduct.id, qty);
            closeQuickView();
        }
    });

    // Event Delegation inside dynamic container grids
    elements.productsGrid.addEventListener('click', handleProductGridClick);
}

// Render Core Products Engine
function renderProducts() {
    let filteredList = AppState.products;

    // Apply Search Filter
    if (AppState.searchQuery.trim() !== '') {
        const query = AppState.searchQuery.toLowerCase();
        filteredList = filteredList.filter(p => 
            p.title.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query)
        );
    }

    // Apply Tab/Tag Filter
    if (AppState.currentTagFilter !== 'all') {
        filteredList = filteredList.filter(p => p.tag === AppState.currentTagFilter);
    }

    // Apply Category Card Filter
    if (AppState.currentCategoryFilter) {
        filteredList = filteredList.filter(p => p.category === AppState.currentCategoryFilter);
    }

    // Clear Container
    elements.productsGrid.innerHTML = '';

    if (filteredList.length === 0) {
        elements.productsGrid.innerHTML = `
            <div class="no-products-msg" style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--gray);">
                <i class="fa-solid fa-ban" style="font-size: 3rem; margin-bottom: 15px; color: var(--border);"></i>
                <p>No premium dropshipping products matched your current search parameters.</p>
                <button class="btn btn-primary" onclick="resetAllProductFilters()" style="margin-top: 15px;">Reset Catalog Filters</button>
            </div>
        `;
        return;
    }

    filteredList.forEach(product => {
        const isWishlisted = AppState.wishlist.some(item => item.id === product.id);
        const cardHTML = `
            <article class="product-card scroll-anim animate-visible" data-id="${product.id}">
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <span class="discount-badge">SAVE 25%</span>
                    <div class="product-actions">
                        <button class="action-circle-btn wishlist-btn-node ${isWishlisted ? 'wishlisted' : ''}" data-id="${product.id}" aria-label="Add to Wishlist" title="Add to Wishlist">
                            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                        <button class="action-circle-btn quickview-btn-node" data-id="${product.id}" aria-label="Quick View Product" title="Quick View">
                            <i class="fa-regular fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <a href="#" class="product-title product-title-node" data-id="${product.id}">${product.title}</a>
                    <div class="rating-row">
                        <div class="stars">
                            ${generateStarIcons(product.rating)}
                        </div>
                        <span class="review-count">(${product.reviews} reviews)</span>
                    </div>
                    <div class="price-row">
                        <span class="price-old">$${product.oldPrice.toFixed(2)}</span>
                        <span class="price-new">$${product.newPrice.toFixed(2)}</span>
                    </div>
                    <button class="btn-add-cart add-to-cart-node" data-id="${product.id}">
                        <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                    </button>
                </div>
            </article>
        `;
        elements.productsGrid.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Re-trigger visual animations on newly generated items
    const dynamicCards = elements.productsGrid.querySelectorAll('.product-card');
    dynamicCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
}

function generateStarIcons(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fa-solid fa-star"></i>';
        } else if (i === fullStars + 1 && halfStar) {
            stars += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            stars += '<i class="fa-regular fa-star"></i>';
        }
    }
    return stars;
}

// Product Grid Action Delegations
function handleProductGridClick(e) {
    const target = e.target;

    // Add to Wishlist Action Node
    const wishlistBtn = target.closest('.wishlist-btn-node');
    if (wishlistBtn) {
        e.preventDefault();
        const id = wishlistBtn.getAttribute('data-id');
        toggleWishlist(id);
        return;
    }

    // Quick View Action Node
    const quickviewBtn = target.closest('.quickview-btn-node');
    if (quickviewBtn) {
        e.preventDefault();
        const id = quickviewBtn.getAttribute('data-id');
        openQuickView(id);
        return;
    }

    // Add to Cart Action Node
    const addToCartBtn = target.closest('.add-to-cart-node');
    if (addToCartBtn) {
        e.preventDefault();
        const id = addToCartBtn.getAttribute('data-id');
        addToCart(id, 1);
        return;
    }

    // Title Click QuickView
    const titleNode = target.closest('.product-title-node');
    if (titleNode) {
        e.preventDefault();
        const id = titleNode.getAttribute('data-id');
        openQuickView(id);
        return;
    }
}

// Search Logic
function triggerSearch(val) {
    AppState.searchQuery = val;
    renderProducts();
}

function resetAllProductFilters() {
    AppState.currentCategoryFilter = null;
    AppState.currentTagFilter = 'all';
    AppState.searchQuery = '';
    elements.productSearch.value = '';
    elements.mobileSearchInput.value = '';

    elements.filterTabs.forEach(tab => {
        if (tab.getAttribute('data-tag') === 'all') tab.classList.add('active');
        else tab.classList.remove('active');
    });

    renderProducts();
    showToast("Product catalog filters cleared successfully.");
}

// Navigation helpers
function scrollToProductsTag(tag) {
    AppState.currentTagFilter = tag;
    AppState.currentCategoryFilter = null;
    elements.filterTabs.forEach(tab => {
        if (tab.getAttribute('data-tag') === tag) tab.classList.add('active');
        else tab.classList.remove('active');
    });
    renderProducts();
    document.getElementById('products-hub').scrollIntoView({ behavior: 'smooth' });
}

// Drawers Toggle Controllers
function toggleCartDrawer(open = null) {
    const shouldOpen = open !== null ? open : !elements.cartDrawer.classList.contains('open');
    if (shouldOpen) {
        elements.cartDrawer.classList.add('open');
        elements.cartOverlay.classList.add('open');
    } else {
        elements.cartDrawer.classList.remove('open');
        elements.cartOverlay.classList.remove('open');
    }
}

function toggleWishlistDrawer(open = null) {
    const shouldOpen = open !== null ? open : !elements.wishlistDrawer.classList.contains('open');
    if (shouldOpen) {
        elements.wishlistDrawer.classList.add('open');
        elements.wishlistOverlay.classList.add('open');
    } else {
        elements.wishlistDrawer.classList.remove('open');
        elements.wishlistOverlay.classList.remove('open');
    }
}

function toggleMobileDrawer(open = null) {
    const shouldOpen = open !== null ? open : !elements.mobileNavDrawer.classList.contains('open');
    if (shouldOpen) {
        elements.mobileNavDrawer.classList.add('open');
        elements.drawerOverlay.classList.add('open');
    } else {
        elements.mobileNavDrawer.classList.remove('open');
        elements.drawerOverlay.classList.remove('open');
    }
}

// Cart Mechanics
function addToCart(productId, qty = 1) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const existingCartItemIndex = AppState.cart.findIndex(item => item.id === productId);

    if (existingCartItemIndex > -1) {
        AppState.cart[existingCartItemIndex].quantity += qty;
    } else {
        AppState.cart.push({
            ...product,
            quantity: qty
        });
    }

    localStorage.setItem('shoptuch_cart', JSON.stringify(AppState.cart));
    updateCartUI();
    toggleCartDrawer(true);
    showToast(`Added ${qty}x ${product.title.substring(0, 20)}... to Cart`);
}

function removeFromCart(productId) {
    AppState.cart = AppState.cart.filter(item => item.id !== productId);
    localStorage.setItem('shoptuch_cart', JSON.stringify(AppState.cart));
    updateCartUI();
    showToast("Removed product from shopping cart.");
}

function updateCartItemQty(productId, increment) {
    const item = AppState.cart.find(p => p.id === productId);
    if (!item) return;

    item.quantity += increment;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    localStorage.setItem('shoptuch_cart', JSON.stringify(AppState.cart));
    updateCartUI();
}

function updateCartUI() {
    // Badges count
    const totalItemsCount = AppState.cart.reduce((accum, item) => accum + item.quantity, 0);
    elements.cartBadge.textContent = totalItemsCount;
    elements.drawerCartCount.textContent = totalItemsCount;

    // Subtotal math calculation
    const totalSubtotalAmount = AppState.cart.reduce((accum, item) => accum + (item.newPrice * item.quantity), 0);
    elements.cartSubtotalAmount.textContent = `$${totalSubtotalAmount.toFixed(2)}`;

    // Build Cart list items inside drawer
    elements.cartItemsContainer.innerHTML = '';
    
    if (AppState.cart.length === 0) {
        elements.cartItemsContainer.innerHTML = `
            <div class="cart-empty-message">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Your shopping cart is currently empty.</p>
                <button class="btn btn-primary" onclick="toggleCartDrawer(false)">Explore Our Catalog</button>
            </div>
        `;
        return;
    }

    AppState.cart.forEach(item => {
        const itemRowHTML = `
            <div class="cart-item-row">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <span class="cart-item-price">$${item.newPrice.toFixed(2)}</span>
                    <div class="cart-item-qty-row">
                        <div class="cart-qty-picker">
                            <button onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease Quantity"><i class="fa-solid fa-minus"></i></button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase Quantity"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')">
                            <i class="fa-regular fa-trash-can"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `;
        elements.cartItemsContainer.insertAdjacentHTML('beforeend', itemRowHTML);
    });
}

// Wishlist Mechanics
function toggleWishlist(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = AppState.wishlist.findIndex(item => item.id === productId);
    let added = false;

    if (existingIndex > -1) {
        AppState.wishlist.splice(existingIndex, 1);
    } else {
        AppState.wishlist.push(product);
        added = true;
    }

    localStorage.setItem('shoptuch_wishlist', JSON.stringify(AppState.wishlist));
    updateWishlistUI();
    renderProducts(); // Refresh active state classes in standard grids

    showToast(
        added ? `Added to wishlist` : `Removed from wishlist`, 
        "wishlist"
    );
}

function updateWishlistUI() {
    const itemsCount = AppState.wishlist.length;
    elements.wishlistBadge.textContent = itemsCount;
    elements.drawerWishlistCount.textContent = itemsCount;

    elements.wishlistItemsContainer.innerHTML = '';

    if (AppState.wishlist.length === 0) {
        elements.wishlistItemsContainer.innerHTML = `
            <div class="cart-empty-message">
                <i class="fa-regular fa-heart"></i>
                <p>Your wishlist is empty.</p>
                <button class="btn btn-primary" onclick="toggleWishlistDrawer(false)">Add Elite Products</button>
            </div>
        `;
        return;
    }

    AppState.wishlist.forEach(item => {
        const wishlistHTML = `
            <div class="wishlist-item-row">
                <img src="${item.image}" alt="${item.title}" class="wishlist-item-img">
                <h4 class="wishlist-item-title">${item.title}</h4>
                <button class="wishlist-add-to-cart-action" onclick="addToCart('${item.id}', 1); toggleWishlist('${item.id}');" aria-label="Add Item to Cart">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                </button>
                <button class="wishlist-remove-btn" onclick="toggleWishlist('${item.id}')" aria-label="Remove Item">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
        elements.wishlistItemsContainer.insertAdjacentHTML('beforeend', wishlistHTML);
    });
}

// Quick View Modal Controller logic
function openQuickView(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    AppState.selectedProduct = product;
    
    // Set parameters
    elements.modalProductImage.src = product.image;
    elements.modalProductImage.alt = product.title;
    elements.modalProductTag.textContent = product.tag.toUpperCase() + " ITEM";
    elements.modalProductTitle.textContent = product.title;
    elements.modalStars.innerHTML = generateStarIcons(product.rating);
    elements.modalReviewsCount.textContent = `(${product.reviews} Verified Customer Reviews)`;
    elements.modalPriceOld.textContent = `$${product.oldPrice.toFixed(2)}`;
    elements.modalPriceNew.textContent = `$${product.newPrice.toFixed(2)}`;
    elements.modalProductDescription.textContent = product.desc;
    
    // Reset modal counter
    elements.qtyVal.textContent = '1';

    // Open Drawer Backdrop and Content
    elements.quickviewModal.classList.add('open');
    elements.modalBackdrop.classList.add('open');
}

function closeQuickView() {
    elements.quickviewModal.classList.remove('open');
    elements.modalBackdrop.classList.remove('open');
    AppState.selectedProduct = null;
}

function updateModalQty(increment) {
    let currentQty = parseInt(elements.qtyVal.textContent);
    currentQty += increment;
    if (currentQty < 1) currentQty = 1;
    elements.qtyVal.textContent = currentQty;
}

// Toast System
function showToast(message, type = "success") {
    const toastNode = document.createElement('div');
    toastNode.classList.add('toast');
    if (type === "wishlist") {
        toastNode.classList.add('wishlist-toast');
    }
    
    const icon = type === "wishlist" ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-solid fa-check-double"></i>';
    toastNode.innerHTML = `${icon} <span>${message}</span>`;
    
    elements.toastHub.appendChild(toastNode);

    // Self cleanup sequence
    setTimeout(() => {
        toastNode.remove();
    }, 3000);
}

// Scroll Animation Observer Setup
function setupScrollAnimationObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const hiddenNodes = document.querySelectorAll('.scroll-anim');
    hiddenNodes.forEach(node => observer.observe(node));
}

// Countdown Clock Engine logic (Midnight Sale)
function startFlashCountdown() {
    // Generate static target date: midnight tonight
    const targetDate = new Date();
    targetDate.setHours(24, 0, 0, 0);

    function updateClock() {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if (difference <= 0) {
            // reset to next midnight
            targetDate.setDate(targetDate.getDate() + 1);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateClock();
    setInterval(updateClock, 1000);
}

// Newsletter subscription toast
function handleNewsletterSubscribe() {
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput && emailInput.value.trim() !== '') {
        showToast("Welcome to ShopTuch VIP club! Check inbox soon.");
        emailInput.value = '';
    }
}

// Checkout simulation handler
function triggerCheckoutAlert() {
    if (AppState.cart.length === 0) {
        showToast("Cart is empty! Choose items first.");
        return;
    }
    alert("🔒 Secure Checkout Redirection\n\nYou are being routed safely to the integrated payments platform. Rest easy knowing transactions are encrypted via 256-bit Secure Sockets Layer (SSL).");
    // Clear cart post checkout trigger mock
    AppState.cart = [];
    localStorage.removeItem('shoptuch_cart');
    updateCartUI();
    toggleCartDrawer(false);
}
