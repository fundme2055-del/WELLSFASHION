// store.js
// demo products

const PRODUCTS = [
  { id: 'p1', title: 'WF NBA.YB Tee', price: 45000, img: 'image/photo_1.jpg', category: 'T-Shirt' },
  { id: 'p2', title: 'WF NBA.YB Tee', price: 45000, img: 'image/photo_2.jpg', category: 'T-Shirt' },
  { id: 'p3', title: 'WF Tee', price: 45000, img: 'image/photo_3.jpg', category: 'T-Shirt' },
  { id: 'p4', title: 'WF Tee', price: 45000, img: 'image/photo_4.jpg', category: 'T-Shirt' },
  { id: 'p5', title: 'WF Tee', price: 45000, img: 'image/photo_5.jpg', category: 'T-Shirt' },
  { id: 'p6', title: 'WF Tee', price: 45000, img: 'image/photo_6.jpg', category: 'T-Shirt' },
  { id: 'p7', title: 'WF Tee', price: 45000, img: 'image/photo_7.jpg', category: 'T-Shirt' },
  { id: 'p8', title: 'WF Tee Jersey', price: 45000, img: 'image/photo_8.jpg', category: 'T-Shirt' },
  { id: 'p9', title: 'My Tee', price: 45000, img: 'image/photo_9.jpg', category: 'T-Shirt' },
  { id: 'p10', title:'WF Tee', price: 45000, img: 'image/photo_10.jpg', category: 'T-Shirt' },
  { id: 'p11', title:'WF Tee', price: 45000, img: 'image/photo_11.jpg', category: 'T-Shirt' },
  { id: 'p12', title: 'WF Tee', price: 45000, img: 'image/photo_12.jpg', category: 'T-Shirt' },
  { id: 'p13', title: 'WF Tee', price: 45000, img: 'image/photo_13.jpg', category: 'T-Shirt' },
  { id: 'p14', title: 'WF Tee Jersey', price: 45000, img: 'image/photo_14.jpg', category: 'T-Shirt' },
  { id: 'p15', title: 'WF Tee', price: 45000, img: 'image/photo_15.jpg', category: 'T-Shirt' },
  { id: 'p16', title: 'WF Tee', price: 45000, img: 'image/photo_16.jpg', category: 'T-Shirt' },
  { id: 'p17', title: 'WF Tee', price: 45000, img: 'image/photo_17.jpg', category: 'T-Shirt' },
  { id: 'p18', title: 'WF Tee', price: 45000, img: 'image/photo_18.jpg', category: 'T-Shirt' },
  { id: 'p19', title: 'WF Tee', price: 45000, img: 'image/photo_19.jpg', category: 'T-Shirt' },

  { id: 'p20', title: 'WF Double layer Thunbsout', price: 47000, img: 'image/photo_DD1.jpg', category: 'Long sleeve' },
  { id: 'p21', title: 'WF Double layer Thunbsout', price: 47000, img: 'image/photo_DD2.jpg', category: 'Long sleeve' },
  { id: 'p22', title: 'WF Double layer Thunbsout', price: 47000, img: 'image/photo_DD3.jpg', category: 'Long sleeve' },

   { id: 'p23', title: 'WF Essential Hoodie F', price: 50000, img: 'image/photo_HD1.jpg', category: 'Hoodie' },
  { id: 'p24', title: 'WF Essential Hoodie B', price: 50000, img: 'image/photo_HD2.jpg', category: 'Hoodie' },
  { id: 'p25', title: 'WF Hoodie', price: 50000, img: 'image/photo_HD3.jpg', category: 'Hoodie' },
  { id: 'p26', title: 'WF YB Hoodie', price: 53000, img: 'image/photo_HD4.jpg', category: 'Hoodie' },
  { id: 'p27', title: 'WF lambo Hoodie', price: 50000, img: 'image/photo_HD5.jpg', category: 'Hoodie' },
  { id: 'p28', title: 'WF Alive Hoodie', price: 50000, img: 'image/photo_HD6.jpg', category: 'Hoodie' },

  { id: 'p29', title: 'WF Short', price: 35000, img: 'image/photo_ST1.jpg', category: ' Short' },
  { id: 'p30', title: 'WF Short', price: 35000, img: 'image/photo_ST2.jpg', category: ' Short' },
  { id: 'p31', title: 'WF Short', price: 35000, img: 'image/photo_ST3.jpg', category: ' Short' },

  { id: 'p32', title: 'WF Vest', price: 30000, img: 'image/photo_VT1.jpg', category: 'vest' },
  { id: 'p33', title: 'WF Vest', price: 30000, img: 'image/photo_VT2.jpg', category: 'vest' },
  { id: 'p34', title: 'WF Vest', price: 30000, img: 'image/photo_VT3.jpg', category: 'vest' },
  { id: 'p35', title: 'WF Vest', price: 30000, img: 'image/photo_VT4.jpg', category: 'vest' },
  { id: 'p36', title: 'WF Vest', price: 30000, img: 'image/photo_VT5.jpg', category: 'vest' },
  { id: 'p37', title: 'WF Vest', price: 30000, img: 'image/photo_VT6.jpg', category: 'vest' },
  { id: 'p38', title: 'WF Vest', price: 30000, img: 'image/photo_VT7.jpg', category: 'vest' },
  { id: 'p39', title: 'WF Vest', price: 30000, img: 'image/photo_VT8.jpg', category: 'vest' },

  { id: 'p40', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ1.jpg', category: 'COZY SET' },
   { id: 'p41', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ2.jpg', category: 'COZY SET' },
  { id: 'p42', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ3.jpg', category: 'COZY SET' },
  { id: 'p43', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ4.jpg', category: 'COZY SET' },
  { id: 'p44', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ5.jpg', category: 'COZY SET' },
  { id: 'p45', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ6.jpg', category: 'COZY SET' },
   { id: 'p46', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ7.jpg', category: 'COZY SET' },
  { id: 'p47', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ8.jpg', category: 'COZY SET' },
  { id: 'p48', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ9.jpg', category: 'COZY SET' },
  { id: 'p49', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ10.jpg', category: 'COZY SET' },
 { id: 'p50', title: 'WF COZY SET', price: 60000, img: 'image/photo_CZ11.jpg', category: 'COZY SET' },

  { id: 'p51', title: 'WF Scarf 🧣', price: 30000, img: 'image/photo_SF1.jpg', category: 'Scarf' },
  { id: 'p52', title: 'WF Scarf 🧣', price: 30000, img: 'image/photo_SF2.jpg', category: 'Scarf' },
  { id: 'p53', title: 'WF Scarf 🧣', price: 30000, img: 'image/photo_SF3.jpg', category: 'Scarf' },
  { id: 'p54', title: 'WF Scarf 🧣', price: 30000, img: 'image/photo_SF4.jpg', category: 'Scarf' },
  { id: 'p55', title: 'WF Scarf 🧣', price: 30000, img: 'image/photo_SF5.jpg', category: 'Scarf' },
  { id: 'p56', title: 'WF Scarf 🧣', price: 30000, img: 'image/photo_SF6.jpg', category: 'Scarf' },
  { id: 'p57', title: 'WF Face Cap', price: 30000, img: 'image/photo_SF7.jpg', category: 'Scarf' },
  { id: 'p58', title: 'WF Face Cap ', price: 30000, img: 'image/photo_SF8.jpg', category: 'Scarf' },
  { id: 'p60', title: 'WF Head Warmer', price: 30000, img: 'image/photo_SF9.jpg', category: 'Scarf' },

  { id: 'p61', title: 'WF Ladies Crop Top', price: 35000, img: 'image/photo_CP1.jpg', category: 'crop top' },
  { id: 'p62', title: 'WF Ladies Crop Top', price: 35000, img: 'image/photo_CP2.jpg', category: 'crop top' },
{ id: 'p63', title: 'WF Ladies Crop Top', price: 35000, img: 'image/photo_CP3.jpg', category: 'crop top' },
{ id: 'p64', title: 'WF Ladies Crop Top', price: 35000, img: 'image/photo_CP4.jpg', category: 'crop top' },

];

const CURRENCY = "₦";
let CART = JSON.parse(localStorage.getItem('demo_cart') || '[]');
const grid = document.getElementById('productGrid');
const cartItemsEl = document.getElementById('cartItems');
const cartDrawer = document.getElementById('cartDrawer');
const subtotalEl = document.getElementById('subtotal');
const cartCount = document.getElementById('cartCount');
const shownCount = document.getElementById('shownCount');
const searchInput = document.getElementById('searchInput');

function renderProducts(list) {
  grid.innerHTML = '';
  list.forEach(p => {
    grid.innerHTML += `
        <div class="bg-blue-100 transform transition duration-300  rounded-lg shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl">
          <img src="${p.img}" class="w-full h-56 object-cover">
          <div class="p-4">
            <h3 class="font-semibold">${p.title}</h3>
            <p class="text-teal-600 font-bold mt-1">${CURRENCY}${p.price.toFixed(2)}</p>
            <div class="mt-3 flex gap-2">
              <button data-quick="${p.id}" class="flex-1 bg-blue-300 py-2 rounded-md">Quick view</button>
              <button data-add="${p.id}" class="flex-1 bg-blue-500 text-white py-2 rounded-md">Add</button>
            </div>
          </div>
        </div>`;
  });
  shownCount.textContent = list.length;
}

function renderCart() {
  cartItemsEl.innerHTML = '';
  if (CART.length === 0) { cartItemsEl.innerHTML = '<p class="text-gray-500">Your cart is empty.</p>'; }
  CART.forEach(it => {
    cartItemsEl.innerHTML += `
        <div class="flex items-center gap-3 py-3 border-b">
          <img src="${it.img}" class="w-16 h-16 object-cover rounded">
          <div class="flex-1">
            <p class="font-medium">${it.title}</p>
            <p class="text-gray-500">${CURRENCY}${it.price.toFixed(2)} × ${it.qty}</p>
          </div>
          <div class="flex flex-col gap-1">
            <button data-inc="${it.id}" class="px-2 py-1 bg-blue-200 rounded">+</button>
            <button data-dec="${it.id}" class="px-2 py-1 bg-blue-200 rounded">-</button>
          </div>
        </div>`;
  });
  const subtotal = CART.reduce((s, i) => s + i.price * i.qty, 0);
  subtotalEl.textContent = CURRENCY + subtotal.toFixed(2);
  cartCount.textContent = CART.reduce((s, i) => s + i.qty, 0);
  localStorage.setItem('demo_cart', JSON.stringify(CART));
}

function addToCart(pid, qty = 1) {
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return;
  const item = CART.find(i => i.id === pid);
  if (item) item.qty += qty; else CART.push({ ...p, qty });
  renderCart();
}

// modal
const modalBg = document.getElementById('modalBg');
function openModal(p) {
  modalBg.classList.remove('hidden');
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalPrice').textContent = CURRENCY + p.price.toFixed(2);
  document.getElementById('addToCartModal').dataset.pid = p.id;
}
function closeModal() { modalBg.classList.add('hidden'); }


// init
renderProducts(PRODUCTS);
renderCart();

// events
document.body.addEventListener('click', e => {
  if (e.target.dataset.add) { addToCart(e.target.dataset.add); }
  if (e.target.dataset.quick) { const p = PRODUCTS.find(x => x.id === e.target.dataset.quick); openModal(p); }
  if (e.target.dataset.inc) { const it = CART.find(x => x.id === e.target.dataset.inc); if (it) it.qty++; renderCart(); }
  if (e.target.dataset.dec) { const it = CART.find(x => x.id === e.target.dataset.dec); if (it) { it.qty--; if (it.qty <= 0) CART = CART.filter(x => x.id !== it.id); } renderCart(); }
});

document.getElementById('openCartBtn').onclick = () => cartDrawer.classList.remove('translate-x-full');
document.getElementById('closeCartBtn').onclick = () => cartDrawer.classList.add('translate-x-full');
document.getElementById('clearCartBtn').onclick = () => { CART = []; renderCart(); };
document.getElementById('checkoutBtn').onclick = () => alert("Take A Screenshot Of Your Cart And checkout On WhatsApp");
document.getElementById('addToCartModal').onclick = (e) => { addToCart(e.target.dataset.pid, 1); closeModal(); cartDrawer.classList.remove('translate-x-full'); };
document.getElementById('closeModal').onclick = closeModal;
modalBg.addEventListener('click', e => { if (e.target.id === 'modalBg') closeModal(); });

// search
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  renderProducts(PRODUCTS.filter(p => p.title.toLowerCase().includes(q)));
});
// category buttons
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    if (cat === 'All') {
      renderProducts(PRODUCTS);
    } else {
      renderProducts(PRODUCTS.filter(p => p.category === cat));
    }
  });
});