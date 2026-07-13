:root {
  /* Fonts */
  --font-primary: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace;

  /* Brand Colors (Light Mode) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f7;
  --bg-tertiary: #f0f0f2;
  --text-primary: #1d1d1f;
  --text-secondary: #6e6e73;
  --text-tertiary: #a1a1a6;
  --accent: #0071e3;
  --accent-hover: #147ce5;
  --accent-light: rgba(0, 113, 227, 0.08);
  --accent-gradient: linear-gradient(135deg, #635bff 0%, #ff6b00 50%, #0071e3 100%);
  --nike-orange: #ff6b00;
  --stripe-purple: #635bff;
  --stripe-gradient: linear-gradient(135deg, #635bff 0%, #8f00ff 100%);
  --glow-color: rgba(99, 91, 255, 0.35);
  --success: #34c759;
  --error: #ff3b30;
  --warning: #ff9500;
  
  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.72);
  --glass-border: rgba(0, 0, 0, 0.08);
  --glass-blur: 24px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
  --shadow-md: 0 8px 16px rgba(0,0,0,0.06);
  --shadow-lg: 0 16px 32px rgba(0,0,0,0.08);
  --shadow-premium: 0 30px 60px rgba(0,0,0,0.12);
  --shadow-inset: inset 0 2px 4px 0 rgba(0,0,0,0.06);

  /* Borders & Radii */
  --border-color: rgba(0, 0, 0, 0.08);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* Timing & Transitions */
  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: 0.2s var(--ease-premium);
  --transition-normal: 0.4s var(--ease-premium);
  --transition-slow: 0.6s var(--ease-premium);

  /* Layout */
  --container-width: 1440px;
  --header-height: 72px;
  --header-shrink-height: 56px;
}

/* Dark Mode Overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #000000;
    --bg-secondary: #0c0c0d;
    --bg-tertiary: #161617;
    --text-primary: #f5f5f7;
    --text-secondary: #86868b;
    --text-tertiary: #48484a;
    --accent: #2997ff;
    --accent-hover: #4fb0ff;
    --accent-light: rgba(41, 151, 255, 0.15);
    --accent-gradient: linear-gradient(135deg, #7a73ff 0%, #ff7d26 50%, #2997ff 100%);
    --nike-orange: #ff7d26;
    --stripe-purple: #7a73ff;
    --stripe-gradient: linear-gradient(135deg, #7a73ff 0%, #b046ff 100%);
    --glow-color: rgba(122, 115, 255, 0.45);
    --border-color: rgba(255, 255, 255, 0.08);
    --glass-bg: rgba(0, 0, 0, 0.72);
    --glass-border: rgba(255, 255, 255, 0.08);
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
    --shadow-md: 0 8px 16px rgba(0,0,0,0.5);
    --shadow-lg: 0 16px 32px rgba(0,0,0,0.6);
    --shadow-premium: 0 30px 60px rgba(0,0,0,0.8);
  }
}

/* Explicit selector Dark Mode support */
[data-theme="dark"] {
  --bg-primary: #000000;
  --bg-secondary: #0c0c0d;
  --bg-tertiary: #161617;
  --text-primary: #f5f5f7;
  --text-secondary: #86868b;
  --text-tertiary: #48484a;
  --accent: #2997ff;
  --accent-hover: #4fb0ff;
  --accent-light: rgba(41, 151, 255, 0.15);
  --accent-gradient: linear-gradient(135deg, #7a73ff 0%, #ff7d26 50%, #2997ff 100%);
  --nike-orange: #ff7d26;
  --stripe-purple: #7a73ff;
  --stripe-gradient: linear-gradient(135deg, #7a73ff 0%, #b046ff 100%);
  --glow-color: rgba(122, 115, 255, 0.45);
  --border-color: rgba(255, 255, 255, 0.08);
  --glass-bg: rgba(0, 0, 0, 0.72);
  --glass-border: rgba(255, 255, 255, 0.08);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
  --shadow-md: 0 8px 16px rgba(0,0,0,0.5);
  --shadow-lg: 0 16px 32px rgba(0,0,0,0.6);
  --shadow-premium: 0 30px 60px rgba(0,0,0,0.8);
}

/* --- Base & Reset Styles --- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-family: var(--font-primary);
  font-size: 16px;
  scroll-behavior: smooth;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

body {
  overflow-x: hidden;
  min-height: 100vh;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
}

/* Optimized Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}
::-webkit-scrollbar-thumb {
  background: var(--text-tertiary);
  border-radius: var(--radius-full);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  background: none;
  border: none;
  font-family: inherit;
  cursor: pointer;
  outline: none;
}

/* Focus Visible Keyboard Navigation */
*:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

/* --- Loading Screen --- */
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
}
.loader-container.fade-out {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.loader {
  position: relative;
  width: 64px;
  height: 64px;
}
.loader::before, .loader::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 4px solid transparent;
}
.loader::before {
  top: 0; left: 0; right: 0; bottom: 0;
  border-top-color: var(--stripe-purple);
  animation: spin 1s linear infinite;
}
.loader::after {
  top: 8px; left: 8px; right: 8px; bottom: 8px;
  border-bottom-color: var(--nike-orange);
  animation: spin-reverse 1.5s linear infinite;
}

/* --- Keyframe Animations --- */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes spin-reverse {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes gradientBg {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(99, 91, 255, 0.2); }
  50% { box-shadow: 0 0 40px rgba(99, 91, 255, 0.5); }
}
@keyframes rippleEffect {
  0% { transform: scale(0); opacity: 0.5; }
  100% { transform: scale(4); opacity: 0; }
}

/* Animation Classes */
.fade-up {
  animation: fadeInUp var(--transition-slow) forwards;
  will-change: transform, opacity;
}
.fade-left {
  animation: fadeInLeft var(--transition-slow) forwards;
  will-change: transform, opacity;
}
.fade-right {
  animation: fadeInRight var(--transition-slow) forwards;
  will-change: transform, opacity;
}
.zoom {
  animation: zoomIn var(--transition-slow) forwards;
  will-change: transform, opacity;
}
.floating {
  animation: floating 6s ease-in-out infinite;
  will-change: transform;
}
.glow-effect {
  animation: pulseGlow 4s infinite ease-in-out;
}

/* --- Container Utility --- */
.container {
  max-width: var(--container-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

/* --- Premium Header & Nav --- */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 1000;
  background-color: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-bottom: 1px solid var(--glass-border);
  transition: height var(--transition-normal), background-color var(--transition-normal);
  display: flex;
  align-items: center;
}
.header.scrolled {
  height: var(--header-shrink-height);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-logo {
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-item {
  position: relative;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 8px 0;
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-fast);
}
.nav-link:hover {
  color: var(--text-primary);
}
.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Actions Group */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Animated Search Bar */
.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  padding: 6px 16px;
  width: 200px;
  transition: width var(--transition-normal), box-shadow var(--transition-normal);
  border: 1px solid transparent;
}
.search-bar:focus-within {
  width: 320px;
  background: var(--bg-primary);
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.15);
}
.search-input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 0.85rem;
  color: var(--text-primary);
  outline: none;
}
.search-icon {
  color: var(--text-secondary);
  cursor: pointer;
}

/* Nav Buttons */
.nav-btn {
  position: relative;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background var(--transition-fast), transform var(--transition-fast);
}
.nav-btn:hover {
  background: var(--bg-tertiary);
  transform: scale(1.05);
}
.nav-btn:active {
  transform: scale(0.95);
}
.badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: var(--nike-orange);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  box-shadow: 0 0 0 2px var(--bg-primary);
}

/* Mobile Menu Trigger */
.mobile-menu-trigger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
}
.mobile-menu-trigger span {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: var(--radius-full);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}
.mobile-menu-trigger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.mobile-menu-trigger.active span:nth-child(2) {
  opacity: 0;
}
.mobile-menu-trigger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* --- Hero Section --- */
.hero {
  position: relative;
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 40px);
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  background: radial-gradient(circle at 80% 20%, var(--accent-light) 0%, transparent 60%);
  overflow: hidden;
}
.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 60px;
}
.hero-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.hero-tag {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--stripe-purple);
  margin-bottom: 16px;
}
.hero-title {
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 24px;
  color: var(--text-primary);
}
.hero-title span {
  background: var(--stripe-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 520px;
}
.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Premium Buttons */
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--text-primary);
  color: var(--bg-primary);
  padding: 16px 36px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: var(--radius-full);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s var(--ease-premium);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15), var(--shadow-sm);
  background: var(--accent);
}
.btn-primary:hover::before {
  transform: translateX(100%);
}
.btn-primary:active {
  transform: translateY(1px);
}

.btn-secondary {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 16px 36px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: var(--radius-full);
  transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
}
.btn-secondary:hover {
  background: var(--bg-secondary);
  border-color: var(--text-primary);
}
.btn-secondary:active {
  transform: scale(0.98);
}

/* Hero Image and Glow Background */
.hero-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-image-bg {
  position: absolute;
  width: 500px;
  height: 500px;
  background: var(--stripe-gradient);
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  z-index: 1;
}
.hero-image {
  position: relative;
  z-index: 2;
  max-width: 100%;
  border-radius: var(--radius-lg);
  transform: rotate(-5deg);
  transition: transform var(--transition-slow);
}
.hero-image:hover {
  transform: rotate(0deg) scale(1.03);
}

/* --- Category Cards Section --- */
.section-header {
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}
.section-subtitle {
  color: var(--text-secondary);
  margin-top: 8px;
  font-size: 1.1rem;
}

.categories {
  padding: 80px 0;
}
.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.category-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 380px;
  cursor: pointer;
  background-color: var(--bg-tertiary);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  display: flex;
  align-items: flex-end;
  padding: 32px;
}
.category-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
  z-index: 2;
  transition: opacity var(--transition-normal);
}
.category-img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  z-index: 1;
}
.category-content {
  position: relative;
  z-index: 3;
  color: white;
  transition: transform var(--transition-normal);
}
.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}
.category-count {
  font-size: 0.85rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-premium);
}
.category-card:hover .category-img {
  transform: scale(1.08);
}
.category-card:hover .category-content {
  transform: translateY(-4px);
}

/* --- Product Cards Section --- */
.products {
  padding: 80px 0;
  background-color: var(--bg-secondary);
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}
.product-card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-fast);
  position: relative;
  display: flex;
  flex-direction: column;
}
.product-img-wrapper {
  position: relative;
  padding-bottom: 110%;
  overflow: hidden;
  background-color: var(--bg-secondary);
}
.product-img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent);
}
.product-card:hover .product-img {
  transform: scale(1.05);
}

/* Badges */
.product-badges {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 3;
}
.product-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  letter-spacing: 0.05em;
  color: white;
}
.product-badge.sale { background: var(--error); }
.product-badge.new { background: var(--success); }
.product-badge.exclusive { background: var(--stripe-purple); }

/* Quick Interaction Buttons */
.product-actions {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateX(20px);
  opacity: 0;
  transition: transform var(--transition-normal), opacity var(--transition-normal);
  z-index: 3;
}
.product-card:hover .product-actions {
  transform: translateX(0);
  opacity: 1;
}
.btn-wishlist, .btn-quickview {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}
.btn-wishlist:hover, .btn-quickview:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
  transform: scale(1.1);
}
.btn-wishlist.active {
  background: #ff2d55;
  border-color: #ff2d55;
  color: white;
}

/* Product Info */
.product-info {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.product-category {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}
.product-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 46px;
}
.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}
.product-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
}
.product-price del {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-tertiary);
}
.btn-add-to-cart {
  background: var(--bg-secondary);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}
.btn-add-to-cart:hover {
  background: var(--accent);
  color: white;
  transform: scale(1.1);
}
.btn-add-to-cart:active {
  transform: scale(0.95);
}

/* --- Wishlist & Cart Drawer --- */
.drawer-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1100;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
}
.drawer-overlay.active {
  opacity: 1;
  visibility: visible;
}

.cart-drawer, .wishlist-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 460px;
  height: 100%;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  z-index: 1200;
  box-shadow: var(--shadow-premium);
  border-left: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform var(--transition-normal);
}
.cart-drawer.active, .wishlist-drawer.active {
  transform: translateX(0);
}

.drawer-header {
  padding: 24px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.drawer-title {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.drawer-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-fast), transform var(--transition-fast);
}
.drawer-close:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
}

.drawer-body {
  padding: 24px;
  overflow-y: auto;
  flex-grow: 1;
}

/* Drawer Cart/Wishlist Item */
.cart-item, .wishlist-item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 16px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}
.cart-item-img, .wishlist-item-img {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-md);
  object-fit: cover;
  background: var(--bg-tertiary);
}
.cart-item-info, .wishlist-item-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cart-item-title, .wishlist-item-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 6px;
  line-height: 1.3;
}
.cart-item-price, .wishlist-item-price {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}
.cart-item-qty {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}
.qty-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  transition: background var(--transition-fast);
}
.qty-btn:hover {
  background: var(--bg-tertiary);
}
.qty-val {
  font-size: 0.9rem;
  font-weight: 600;
}
.cart-item-remove, .wishlist-item-remove {
  background: none;
  border: none;
  color: var(--text-tertiary);
  cursor: pointer;
  align-self: center;
  transition: color var(--transition-fast);
}
.cart-item-remove:hover, .wishlist-item-remove:hover {
  color: var(--error);
}

.drawer-footer {
  padding: 24px;
  border-top: 1px solid var(--border-color);
  background: var(--bg-secondary);
}
.cart-total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
  font-weight: 600;
}
.cart-total-val {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--accent);
}
.btn-checkout, .btn-view-cart {
  width: 100%;
  padding: 16px;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
}
.btn-checkout {
  background: var(--stripe-gradient);
  color: white;
  margin-bottom: 12px;
  box-shadow: 0 4px 14px var(--glow-color);
}
.btn-checkout:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

/* --- Quick View Modal --- */
.modal {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1300;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal.active {
  opacity: 1;
  visibility: visible;
}
.modal-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.modal-content {
  position: relative;
  z-index: 2;
  background: var(--bg-primary);
  width: 100%;
  max-width: 900px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-premium);
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  overflow: hidden;
  animation: zoomIn var(--transition-normal) forwards;
}
.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-fast), transform var(--transition-fast);
}
.modal-close:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
  transform: rotate(90deg);
}
.modal-gallery {
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.modal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal-details {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.modal-title {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
}
.modal-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 24px;
}
.modal-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 32px;
}

/* --- Testimonials Section --- */
.testimonials {
  padding: 80px 0;
  background: var(--bg-primary);
}
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.testimonial-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: 40px;
  border: 1px solid var(--border-color);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}
.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}
.testimonial-stars {
  color: #ffcc00;
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: 28px;
}
.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}
.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.author-name {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-primary);
}
.author-role {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

/* --- Newsletter Section --- */
.newsletter {
  padding: 100px 0;
  background: var(--bg-secondary);
}
.newsletter-inner {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.newsletter-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}
.newsletter-desc {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
}
.newsletter-form {
  display: flex;
  gap: 12px;
  max-width: 600px;
  margin: 0 auto;
  background: var(--bg-primary);
  padding: 8px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  transition: focus-within var(--transition-normal), box-shadow var(--transition-normal);
}
.newsletter-form:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.15);
}
.newsletter-input {
  flex-grow: 1;
  border: none;
  background: transparent;
  padding: 0 24px;
  font-size: 1rem;
  outline: none;
  color: var(--text-primary);
}
.btn-subscribe {
  background: var(--stripe-gradient);
  color: white;
  font-weight: 700;
  padding: 16px 36px;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 14px var(--glow-color);
  transition: transform var(--transition-fast), filter var(--transition-fast);
}
.btn-subscribe:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}
.btn-subscribe:active {
  transform: translateY(1px);
}

/* --- Premium Footer --- */
.footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  padding: 80px 0 40px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}
.footer-brand .footer-logo {
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}
.footer-brand .brand-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 0.95rem;
}
.social-links {
  display: flex;
  gap: 16px;
}
.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}
.social-link:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
  transform: translateY(-3px);
}

.footer-column-title {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  margin-bottom: 24px;
}
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer-link {
  font-size: 0.95rem;
  color: var(--text-secondary);
}
.footer-link:hover {
  color: var(--accent);
  padding-left: 4px;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-tertiary);
  font-size: 0.85rem;
}
.footer-copyright {
  color: var(--text-secondary);
}
.footer-bottom-links {
  display: flex;
  gap: 24px;
}

/* --- Scroll To Top Button --- */
.scroll-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 999;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  color: var(--text-primary);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity var(--transition-normal), transform var(--transition-normal), visibility var(--transition-normal), background var(--transition-fast);
}
.scroll-to-top.scroll-to-top-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.scroll-to-top:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
}

/* --- Toast Notifications --- */
.toast-container {
  position: fixed;
  bottom: 40px;
  left: 40px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.toast {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  border-radius: var(--radius-md);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-lg);
  color: var(--text-primary);
  font-weight: 600;
  min-width: 300px;
  animation: fadeInLeft var(--transition-normal) forwards;
}
.toast::before {
  content: '';
  width: 4px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-top-left-radius: var(--radius-md);
  border-bottom-left-radius: var(--radius-md);
}
.toast-success::before { background: var(--success); }
.toast-error::before { background: var(--error); }
.toast-info::before { background: var(--accent); }

/* --- Responsive Breakpoints --- */

/* 1920px+ (Ultra Wide Screens) */
@media (min-width: 1920px) {
  --container-width: 1600px;
  .hero-title {
    font-size: 5.5rem;
  }
}

/* 1440px (Standard Large Desktops) */
@media (max-width: 1440px) {
  --container-width: 1200px;
  .hero-title {
    font-size: 4rem;
  }
  .categories-grid, .products-grid {
    gap: 24px;
  }
}

/* 1200px (Laptops) */
@media (max-width: 1200px) {
  --container-width: 960px;
  .hero-title {
    font-size: 3.5rem;
  }
  .hero-content {
    gap: 40px;
  }
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .testimonials-grid {
    gap: 20px;
  }
}

/* 992px (Tablets Landscape) */
@media (max-width: 992px) {
  --container-width: 720px;
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-text-container {
    align-items: center;
  }
  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-image-wrapper {
    order: -1;
  }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .modal-content {
    grid-template-columns: 1fr;
    max-height: 85vh;
    overflow-y: auto;
  }
  .modal-gallery {
    height: 350px;
  }
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 768px (Tablets Portrait) */
@media (max-width: 768px) {
  --container-width: 100%;
  
  /* Mobile Menu Styles */
  .mobile-menu-trigger {
    display: flex;
  }
  .nav-menu {
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    z-index: 999;
    transform: translateY(-100%);
    opacity: 0;
    transition: transform var(--transition-normal), opacity var(--transition-normal);
    pointer-events: none;
    border-top: 1px solid var(--border-color);
  }
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
  .search-bar {
    display: none; /* Hide on small screens or adjust */
  }
  
  .hero-title {
    font-size: 3rem;
  }
  .categories-grid {
    grid-template-columns: 1fr;
  }
  .cart-drawer, .wishlist-drawer {
    width: 100%;
  }
}

/* 576px (Smartphones Landscape) */
@media (max-width: 576px) {
  .section-title {
    font-size: 2rem;
  }
  .products-grid {
    grid-template-columns: 1fr;
  }
  .newsletter-form {
    flex-direction: column;
    background: transparent;
    padding: 0;
    border: none;
    box-shadow: none;
  }
  .newsletter-input {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-full);
    padding: 16px 24px;
    margin-bottom: 12px;
    width: 100%;
  }
  .btn-subscribe {
    width: 100%;
  }
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

/* 480px (Smartphones Portrait) */
@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .btn-primary, .btn-secondary {
    width: 100%;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

/* 360px (Ultra Compact Devices) */
@media (max-width: 360px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .section-title {
    font-size: 1.8rem;
  }
}

/* --- Accessibility Modifications --- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .floating {
    animation: none !important;
  }
}
