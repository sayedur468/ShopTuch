/* ==========================================================================
ShopTuch Premium JavaScript Architecture
Pattern: Module Pattern (Clean Namespace Isolation)
Performance Optimized: Debounced search, passive listeners, CSS accelerated,
Intersection Observer for Reveal/Lazy Loading.
========================================================================== */

// ==========================================================================
// 1. Curated Product Database (Local Data Storage Object)
// ==========================================================================
const products = [
{
id: 1,
title: "The Monolith Stand",
category: "workspace",
price: 245,
oldPrice: 290,
rating: 4.9,
reviews: 142,
badge: "NEW",
image: "images/product1.jpg",
description: "Meticulously milled from aircraft-grade aerospace aluminum. Elevates your studio workspace to the optimal viewing angle with a design inspired by structural architectures."
},
{
id: 2,
title: "Aether Studio Monitors",
category: "audio",
price: 890,
oldPrice: 1050,
rating: 5.0,
reviews: 89,
badge: "SALE",
image: "images/product2.jpg",
description: "Precision-tuned passive audio drivers encased in premium structural walnut housing. Designed for pristine fidelity, flat acoustic signatures, and clean low frequencies."
},
{
id:
