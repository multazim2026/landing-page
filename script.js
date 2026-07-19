// Cart Counter Logic
let count = 0;

function addToCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    
    // একটি সুন্দর পপ-আপ অ্যালার্ট বা অ্যানিমেশন
    alert("পণ্যটি আপনার কার্টে যোগ করা হয়েছে!");
}