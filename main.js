const WA_NUMBER = "6285188906264";

const products = [
  // ===== SEMBAKO =====
  { id: 1,  name: "Gula Pasir",                  category: "Sembako",   price: 16000, unit: "per kg",     image: "gula-pasir.png", badge: "" },
  { id: 2,  name: "Gula Merah",                  category: "Sembako",   price: 20000, unit: "per kg",     image: "gula-merah.png", badge: "" },
  { id: 3,  name: "Minyak Goreng 1L",             category: "Sembako",   price: 17000, unit: "per pcs",  image: "minyak- goreng.png", badge: "" },
  { id: 4,  name: "Tepung Terigu",                category: "Sembako",   price: 10000, unit: "per kg",     image: "tepung-terigu.png", badge: "" },
  { id: 5,  name: "Tepung Beras",                 category: "Sembako",   price: 9000,  unit: "per kg",     image: "tepung-beras.png", badge: "" },
  { id: 6,  name: "Indomie",                      category: "Sembako",   price: 3500,  unit: "per pcs",    image: "indomie.png", badge: "" },
  { id: 7,  name: "Mie Sedaap",                   category: "Sembako",   price: 3000,  unit: "per pcs",    image: "mie-sedap.png", badge: "" },
  { id: 8,  name: "Sarimi",                       category: "Sembako",   price: 3000,  unit: "per pcs",    image: "sarimi.png", badge: "" },
  { id: 9,  name: "Supermi",                      category: "Sembako",   price: 3000,  unit: "per pcs",    image: "supermi.png", badge: "" },

  // ===== BUMBU DAPUR =====
  { id: 10, name: "Garam Halus",                  category: "Bumbu Dapur", price: 4000,  unit: "per bks",   image: "garam-halus.png", badge: "" },
  { id: 11, name: "Kecap ABC",               category: "Bumbu Dapur", price: 9000,  unit: "per botol", image: "ABC-botol.png", badge: "" },
  { id: 12, name: "Kecap Bango",             category: "Bumbu Dapur", price: 11000, unit: "per botol", image: "bango-botol.png", badge: "" },
  { id: 13, name: "Kecap Sedaap",            category: "Bumbu Dapur", price: 8500,  unit: "per botol", image: "sedap-botol.png", badge: "" },
  { id: 14, name: "Saos ABC",               category: "Bumbu Dapur", price: 8000,  unit: "per botol", image: "sambal-abc.png", badge: "" },
  { id: 15, name: "Royco",             category: "Bumbu Dapur", price: 5000,  unit: "per sachet",image: "royko.png", badge: "" },
  { id: 16, name: "Masako",            category: "Bumbu Dapur", price: 5000,  unit: "per sachet",image: "masako.png", badge: "" },
  { id: 17, name: "Kaldu Bubuk Sasa",              category: "Bumbu Dapur", price: 4500,  unit: "per sachet",image: "kaldu-sasa.png", badge: "" },
  { id: 18, name: "Bawang Merah",                  category: "Bumbu Dapur", price: 28000, unit: "per kg",    image: "b-merah.png", badge: "" },
  { id: 19, name: "Bawang Putih",                  category: "Bumbu Dapur", price: 30000, unit: "per kg",    image: "b-putih.png", badge: "" },
  { id: 20, name: "Cabai Merah",                   category: "Bumbu Dapur", price: 35000, unit: "per kg",    image: "c-merah.png", badge: "" },
  { id: 21, name: "Cabai Rawit",                   category: "Bumbu Dapur", price: 40000, unit: "per kg",    image: "c-rawit.png", badge: "" },
  { id: 22, name: "Micin",         category: "Bumbu Dapur", price: 2000,  unit: "per sachet",image: "micin.png", badge: "" },

  // ===== MINUMAN =====
  { id: 23, name: "Kopi Kapal Api",                category: "Minuman",   price: 1000,  unit: "per sachet", image: "", badge: "" },
  { id: 24, name: "Kopi ABC",                      category: "Minuman",   price: 1000,  unit: "per sachet", image: "", badge: "" },
  { id: 25, name: "Kopi Good Day",                 category: "Minuman",   price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 26, name: "Kopi Torabika",                 category: "Minuman",   price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 27, name: "Kopi Nescafe",                  category: "Minuman",   price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 28, name: "Teh Sariwangi",                 category: "Minuman",   price: 6000,  unit: "per bks",    image: "", badge: "" },
  { id: 29, name: "Teh Bendera (Sosro)",           category: "Minuman",   price: 6000,  unit: "per bks",    image: "", badge: "" },
  { id: 30, name: "Susu Kental Manis Frisian Flag", category: "Minuman",  price: 12000, unit: "per kaleng",  image: "", badge: "" },
  { id: 31, name: "Susu Kental Manis Bear Brand",   category: "Minuman",  price: 9000,  unit: "per kaleng",  image: "", badge: "" },
  { id: 32, name: "Air Mineral Aqua 600ml",        category: "Minuman",   price: 4000,  unit: "per botol",  image: "", badge: "" },
  { id: 33, name: "Air Mineral Le Minerale 600ml",  category: "Minuman",  price: 4000,  unit: "per botol",  image: "", badge: "" },
  { id: 34, name: "Marimas",                       category: "Minuman",  price: 1000,  unit: "per sachet", image: "", badge: "" },
  { id: 35, name: "Pop Ice",                        category: "Minuman",  price: 1500,  unit: "per sachet", image: "", badge: "" },

  // ===== KEBERSIHAN RUMAH =====
  { id: 36, name: "Rinso",       category: "Kebersihan Rumah", price: 18000, unit: "per kg",  image: "", badge: "" },
  { id: 37, name: "Soklin",      category: "Kebersihan Rumah", price: 17000, unit: "per kg",  image: "", badge: "" },
  { id: 38, name: "Daia",        category: "Kebersihan Rumah", price: 14000, unit: "per kg",  image: "", badge: "" },
  { id: 39, name: "Molto",          category: "Kebersihan Rumah", price: 6000,  unit: "per pouch", image: "", badge: "" },
  { id: 40, name: "Downy",          category: "Kebersihan Rumah", price: 6500,  unit: "per pouch", image: "", badge: "" },
  { id: 41, name: "Sunlight",     category: "Kebersihan Rumah", price: 7500,  unit: "per pcs", image: "", badge: "" },
  { id: 42, name: "Mama Lemon",   category: "Kebersihan Rumah", price: 7000,  unit: "per pcs", image: "", badge: "" },
  { id: 43, name: "Sabun Colet",                    category: "Kebersihan Rumah", price: 4000,  unit: "per pcs", image: "", badge: "" },

  // ===== PERAWATAN DIRI =====
  { id: 44, name: "Sabun Mandi Lifebuoy",           category: "Perawatan Diri", price: 4000,  unit: "per pcs",    image: "", badge: "" },
  { id: 45, name: "Sabun Mandi Lux",                category: "Perawatan Diri", price: 4000,  unit: "per pcs",    image: "", badge: "" },
  { id: 46, name: "Sabun Mandi Giv",                category: "Perawatan Diri", price: 3500,  unit: "per pcs",    image: "", badge: "" },
  { id: 47, name: "Sabun Mandi Nuvo",               category: "Perawatan Diri", price: 3000,  unit: "per pcs",    image: "", badge: "" },
  { id: 48, name: "Sampo Sunsilk",                  category: "Perawatan Diri", price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 49, name: "Sampo Clear",                    category: "Perawatan Diri", price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 50, name: "Sampo Pantene",                  category: "Perawatan Diri", price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 51, name: "Sampo Zinc",                     category: "Perawatan Diri", price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 52, name: "Sampo Head & Shoulders",         category: "Perawatan Diri", price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 53, name: "Sampo Rejoice",                  category: "Perawatan Diri", price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 54, name: "Sampo Lifebuoy",                 category: "Perawatan Diri", price: 1500,  unit: "per sachet", image: "", badge: "" },
  { id: 55, name: "Sampo Emeron",                   category: "Perawatan Diri", price: 1000,  unit: "per sachet", image: "", badge: "" },
  { id: 56, name: "Pasta Gigi Pepsodent",            category: "Perawatan Diri", price: 4000,  unit: "per pcs",    image: "", badge: "" },
  { id: 57, name: "Sikat Gigi",                      category: "Perawatan Diri", price: 5000,  unit: "per pcs",    image: "", badge: "" },
  { id: 58, name: "Tisu",                            category: "Perawatan Diri", price: 5000,  unit: "per pack",   image: "", badge: "" },
  { id: 59, name: "Pembalut Wanita",                 category: "Perawatan Diri", price: 8000,  unit: "per pack",   image: "", badge: "" },

  // ===== LAINNYA =====
  { id: 61, name: "Gas Elpiji 3kg",                  category: "Lainnya", price: 22000, unit: "per tabung",     image: "", badge: "" },
];

/* ════════════════════════════════════════
   RATING & ULASAN — deterministik per produk
════════════════════════════════════════ */
const reviewerNames = ["Siti Aminah","Budi Santoso","Rina Wijaya","Dedi Pratama","Maya Putri","Agus Salim","Lestari Ningsih","Hendra Gunawan","Fitri Handayani","Joko Susilo","Rahmawati","Eko Prasetyo"];
const reviewComments = [
  "Kualitasnya bagus dan harganya pas di kantong.",
  "Pelayanan ramah, barang selalu fresh tiap beli.",
  "Sudah langganan di sini, belum pernah kecewa.",
  "Pesan lewat WA gampang banget, responnya cepat.",
  "Barangnya sesuai pesanan dan packing-nya rapi.",
  "Harganya lebih murah dibanding toko sebelah.",
  "Stoknya lengkap, jarang kehabisan barang.",
  "Prosesnya cepat, tinggal datang langsung ambil.",
  "Worth it, kualitas oke buat dipakai harian.",
  "Ramah, info pesanan jelas di WA."
];
const reviewDates = ["2 hari lalu","5 hari lalu","1 minggu lalu","2 minggu lalu","3 minggu lalu","1 bulan lalu","2 bulan lalu"];

function getRating(p) {
  const r = 4.2 + ((p.id * 7) % 9) * 0.08;
  return Math.min(5, Math.round(r * 10) / 10);
}
function getReviewCount(p) {
  return 14 + ((p.id * 11) % 9) * 7;
}
function getReadyTime(p) {
  return 5 + (p.id % 4) * 3;
}
function getReviewDistribution(p) {
  const rating = getRating(p);
  const count = getReviewCount(p);
  const weights = rating >= 4.6 ? [70,22,6,1,1] : rating >= 4.3 ? [55,30,10,3,2] : [40,35,15,7,3];
  const dist = weights.map(w => Math.round(count * w / 100));
  const diff = count - dist.reduce((a,b) => a+b, 0);
  dist[0] += diff;
  return dist;
}
function getReviews(p, max = 5) {
  const count = Math.min(max, getReviewCount(p));
  const out = [];
  for (let i = 0; i < count; i++) {
    const seed = p.id * 13 + i * 5;
    const name = reviewerNames[seed % reviewerNames.length];
    const comment = reviewComments[(seed + i) % reviewComments.length];
    const date = reviewDates[seed % reviewDates.length];
    const baseRating = getRating(p);
    const variance = [0,0,0,-1,1][seed % 5];
    const rating = Math.max(3, Math.min(5, Math.round(baseRating) + (variance === -1 && i % 3 === 0 ? -1 : 0)));
    out.push({ name, comment, date, rating });
  }
  return out;
}
function starsHtml(rating, size) {
  size = size || 13;
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return `<span class="star-rating" style="font-size:${size}px"><span class="star-row star-bg">★★★★★</span><span class="star-row star-fg" style="width:${pct}%">★★★★★</span></span>`;
}
function clockIcon(w,h,c){
  return `<svg width="${w}" height="${h}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
  </svg>`;
}

let cart = [];
let activeCategory = "Semua";
let searchQuery = "";

const formatRp = n => "Rp " + n.toLocaleString("id-ID");
const categories = ["Semua", ...new Set(products.map(p => p.category))];

function catCount(cat) {
  if (cat === "Semua") return products.length;
  return products.filter(p => p.category === cat).length;
}

function filtered() {
  let list = products.filter(p => {
    const mc = activeCategory === "Semua" || p.category === activeCategory;
    const ms = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return mc && ms;
  });
  const sort = document.getElementById("sortSelect")?.value || "default";
  if (sort === "price-asc") list.sort((a,b) => a.price - b.price);
  else if (sort === "price-desc") list.sort((a,b) => b.price - a.price);
  else if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name,"id"));
  return list;
}

function waIcon(w,h,c){
  return `<svg width="${w}" height="${h}" viewBox="0 0 24 24" fill="${c}" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L0 24l6.31-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.638-.491-5.165-1.349l-.371-.22-3.744.895.923-3.643-.24-.375A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>`;
}
function cartIcon(w,h,c){
  return `<svg width="${w}" height="${h}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
  </svg>`;
}
function boxIcon(w,h,c){
  return `<svg width="${w}" height="${h}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>`;
}

function renderCategories() {
  const cl = document.getElementById("catList");
  cl.innerHTML = categories.map(cat => `
    <div class="cat-item ${cat === activeCategory ? "active" : ""}" onclick="setCategory('${cat}')">
      <span>${cat}</span><span class="cat-count">${catCount(cat)}</span>
    </div>`).join("");
  const ml = document.getElementById("mobCatList");
  ml.innerHTML = categories.map(cat => `
    <button class="mob-cat-pill ${cat === activeCategory ? "active" : ""}" onclick="setCategory('${cat}')">${cat}</button>
  `).join("");
}

function renderProducts() {
  const list = filtered();
  const grid = document.getElementById("productGrid");
  document.getElementById("toolbarTitle").textContent = activeCategory === "Semua" ? "Semua Produk" : activeCategory;
  document.getElementById("toolbarCount").textContent = list.length + " produk";

  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <p>Produk tidak ditemukan</p>
      <span>Coba kata kunci atau kategori lain, atau pesan langsung di bawah</span>
      <button class="empty-cta" onclick="openRequestModal()">
        <svg viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Pesan Produk Ini
      </button>
    </div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const imgContent = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
      : `<div class="card-img-placeholder">${boxIcon(40,40,"#9e7fc4")}</div>`;
    const badgeClass = p.badge === "Baru" ? "new" : p.badge === "Promo" ? "promo" : "";
    const badgeHtml = p.badge ? `<span class="card-badge ${badgeClass}">${p.badge}</span>` : "";
    const rating = getRating(p);
    const reviewCount = getReviewCount(p);
    const readyTime = getReadyTime(p);
    const inCart = cart.find(c => c.id === p.id);
    const addControlHtml = inCart
      ? `<div class="card-qty-stepper" data-card-id="${p.id}">
           <button class="qty-btn-card" onclick="cardStepperChange(${p.id}, -1)">−</button>
           <span class="qty-num-card">${inCart.qty}</span>
           <button class="qty-btn-card" onclick="cardStepperChange(${p.id}, 1)">+</button>
         </div>`
      : `<button class="btn-add-mob" data-card-id="${p.id}" onclick="cardAddToCart(${p.id})">${cartIcon(13,13,"#fff")} Tambah</button>`;
    return `
    <div class="product-card reveal">
      <div class="card-img">
        ${imgContent}
        ${badgeHtml}
        <span class="card-ready">${clockIcon(10,10,"#fff")}±${readyTime} mnt</span>
      </div>
      <div class="card-body">
        <span class="card-cat">${p.category}</span>
        <div class="card-name">${p.name}</div>
        <div class="card-rating" onclick="openReviews(${p.id})">
          ${starsHtml(rating, 12)}
          <span class="card-rating-count">${rating} (${reviewCount})</span>
        </div>
        <div class="card-unit">${p.unit}</div>
        <div class="card-price">${formatRp(p.price)}</div>
        <div class="card-price-unit">${p.unit}</div>
      </div>
      <div class="card-actions-mob">
        ${addControlHtml}
        <button class="btn-wa-mob" onclick="directWA(${p.id})">${waIcon(13,13,"#fff")} WA</button>
      </div>
    </div>`;
  }).join("");

  requestAnimationFrame(() => {
    document.querySelectorAll(".reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 35);
    });
  });
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategories();
  renderProducts();
}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartUI();
  showToast(p.name + " ditambahkan");
}

function changeQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
  renderDrawer();
}

// Card-level add: bump cart, then patch just this card's action area (no full grid re-render)
function cardAddToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  addToCart(id);
  patchCardControl(id);
}

// Card-level stepper +/-: same cart logic as changeQty, but patches the card in place
function cardStepperChange(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
  renderDrawer();
  patchCardControl(id);
}

function patchCardControl(id) {
  const stepper = document.querySelector(`.card-qty-stepper[data-card-id="${id}"]`);
  const container = stepper ? stepper.closest(".card-actions-mob") : document.querySelector(`.btn-add-mob[data-card-id="${id}"]`)?.closest(".card-actions-mob");
  if (!container) { renderProducts(); return; } // fallback if card not in current filtered view

  const p = products.find(x => x.id === id);
  const inCart = cart.find(c => c.id === id);
  const waBtn = container.querySelector(".btn-wa-mob");

  const newControl = document.createElement(inCart ? "div" : "button");
  if (inCart) {
    newControl.className = "card-qty-stepper";
    newControl.setAttribute("data-card-id", id);
    newControl.innerHTML = `
      <button class="qty-btn-card" onclick="cardStepperChange(${id}, -1)">−</button>
      <span class="qty-num-card">${inCart.qty}</span>
      <button class="qty-btn-card" onclick="cardStepperChange(${id}, 1)">+</button>`;
  } else {
    newControl.className = "btn-add-mob";
    newControl.setAttribute("onclick", `cardAddToCart(${id})`);
    newControl.innerHTML = `${cartIcon(13,13,"#fff")} Tambah`;
  }
  const oldControl = container.querySelector(".card-qty-stepper, .btn-add-mob");
  if (oldControl) container.replaceChild(newControl, oldControl);
  else container.insertBefore(newControl, waBtn);
}

function updateCartUI() {
  const totalItems = cart.reduce((s,c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s,c) => s + c.price * c.qty, 0);
  document.getElementById("cartBadge").textContent = totalItems;
  const fb = document.getElementById("floatBar");
  if (totalItems > 0) {
    fb.classList.add("visible");
    document.body.classList.add("has-float-bar");
    document.getElementById("fbItems").textContent = totalItems + " produk dalam keranjang";
    document.getElementById("fbTotal").textContent = formatRp(totalPrice);
  } else {
    fb.classList.remove("visible");
    document.body.classList.remove("has-float-bar");
  }
}

function directWA(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const msg = `Halo Warung Arsya-Arsy! Saya ingin memesan:\n\n- ${p.name} (${p.unit}) — ${formatRp(p.price)}\n\nMohon disiapkan, saya akan datang untuk bayar dan ambil. Terima kasih!`;
  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
}

function openCart() {
  renderDrawer();
  document.getElementById("drawerOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("drawerOverlay").classList.remove("open");
  document.body.style.overflow = "";
  renderProducts();
}

function closeCartOnBg(e) {
  if (e.target === document.getElementById("drawerOverlay")) closeCart();
}

function renderDrawer() {
  const body = document.getElementById("drawerBody");
  const footer = document.getElementById("drawerFooter");

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty">
      <svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
      <p>Keranjang masih kosong</p>
      <span>Tambahkan produk dari katalog di atas</span>
    </div>`;
    footer.style.display = "none";
    return;
  }

  const total = cart.reduce((s,c) => s + c.price * c.qty, 0);
  document.getElementById("drawerTotal").textContent = formatRp(total);

  body.innerHTML = cart.map(item => {
    const imgHtml = item.image ? `<img src="${item.image}" alt="${item.name}">` : boxIcon(22,22,"#9e7fc4");
    return `
    <div class="cart-item">
      <div class="ci-img">${imgHtml}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">${formatRp(item.price)} × ${item.qty} = ${formatRp(item.price * item.qty)}</div>
      </div>
      <div class="ci-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>`;
  }).join("");

  footer.style.display = "block";
}

function checkout() {
  if (cart.length === 0) return;
  const nameInput = document.getElementById("custName");
  const name = nameInput.value.trim();
  const group = nameInput.closest(".form-group");

  if (!name) {
    group.classList.add("has-error");
    nameInput.focus();
    return;
  }
  group.classList.remove("has-error");

  const note = document.getElementById("custNote").value.trim();
  const total = cart.reduce((s,c) => s + c.price * c.qty, 0);
  let msg = `Halo Warung Arsya-Arsy! Saya ingin memesan:\n\n`;
  cart.forEach(c => { msg += `- ${c.name} x${c.qty} (${c.unit}) = ${formatRp(c.price * c.qty)}\n`; });
  msg += `\nTotal: *${formatRp(total)}*`;
  msg += `\nNama: ${name}`;
  if (note) msg += `\nCatatan: ${note}`;
  msg += `\n\nMohon disiapkan, saya akan datang untuk bayar dan ambil. Terima kasih!`;
  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function handleSearch(val) {
  searchQuery = val;
  document.getElementById("searchInput").value = val;
  document.getElementById("searchInputMob").value = val;
  renderProducts();
}

function openReviews(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const rating = getRating(p);
  const count = getReviewCount(p);
  const dist = getReviewDistribution(p);
  const reviews = getReviews(p, 6);

  document.getElementById("reviewTitle").textContent = p.name;
  const body = document.getElementById("reviewBody");
  const barsHtml = [5,4,3,2,1].map((star, idx) => {
    const n = dist[idx];
    const pct = count ? Math.round((n / count) * 100) : 0;
    return `
    <div class="review-bar-row">
      <span class="review-bar-label">${star}★</span>
      <div class="review-bar-track"><div class="review-bar-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join("");

  const reviewsHtml = reviews.map(r => `
    <div class="review-item">
      <div class="review-avatar">${r.name.charAt(0)}</div>
      <div class="review-content">
        <div class="review-item-top">
          <span class="review-name">${r.name}</span>
          <span class="review-date">${r.date}</span>
        </div>
        ${starsHtml(r.rating, 11)}
        <p class="review-comment">${r.comment}</p>
      </div>
    </div>`).join("");

  body.innerHTML = `
    <div class="review-summary">
      <div class="review-score">
        <div class="review-score-num">${rating}</div>
        ${starsHtml(rating, 14)}
        <div class="review-score-count">${count} ulasan</div>
      </div>
      <div class="review-bars">${barsHtml}</div>
    </div>
    <div class="review-list">${reviewsHtml}</div>
  `;

  document.getElementById("reviewOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeReviews() {
  document.getElementById("reviewOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function closeReviewsOnBg(e) {
  if (e.target === document.getElementById("reviewOverlay")) closeReviews();
}

function addRipple(e, btn) {
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const circle = document.createElement("span");
  circle.className = "ripple";
  circle.style.width = circle.style.height = size + "px";
  circle.style.left = (e.clientX - rect.left - size / 2) + "px";
  circle.style.top = (e.clientY - rect.top - size / 2) + "px";
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 550);
}
document.addEventListener("click", e => {
  const btn = e.target.closest(".btn-primary,.btn-checkout,.float-bar-btn,.btn-add-mob,.btn-wa-mob,.cart-trigger");
  if (btn) addRipple(e, btn);
});

document.getElementById("searchInput").addEventListener("input", e => handleSearch(e.target.value));
document.getElementById("searchInputMob").addEventListener("input", e => handleSearch(e.target.value));

/* ════════════════════════════════════════
   REQUEST MODAL — "produk tidak ada? pesan di sini"
════════════════════════════════════════ */
function openRequestModal() {
  // Prefill nama produk with current search text, if any — saves typing
  const reqProduct = document.getElementById("reqProduct");
  if (searchQuery && !reqProduct.value) reqProduct.value = searchQuery;
  document.getElementById("requestOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeRequestModal() {
  document.getElementById("requestOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function closeRequestOnBg(e) {
  if (e.target === document.getElementById("requestOverlay")) closeRequestModal();
}

function submitRequest() {
  const nameInput = document.getElementById("reqName");
  const productInput = document.getElementById("reqProduct");
  const qty = document.getElementById("reqQty").value.trim();
  const note = document.getElementById("reqNote").value.trim();

  const name = nameInput.value.trim();
  const product = productInput.value.trim();

  let hasError = false;
  toggleFieldError(nameInput, !name);
  toggleFieldError(productInput, !product);
  if (!name) hasError = true;
  if (!product) hasError = true;
  if (hasError) {
    (!name ? nameInput : productInput).focus();
    return;
  }

  let msg = `Halo Warung Arsya-Arsy! Saya tidak menemukan produk yang saya cari di katalog.\n\n`;
  msg += `Nama: ${name}\n`;
  msg += `Produk yang dicari: ${product}\n`;
  if (qty) msg += `Jumlah: ${qty}\n`;
  if (note) msg += `Catatan: ${note}\n`;
  msg += `\nApakah produk ini tersedia? Terima kasih!`;

  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
  closeRequestModal();
  showToast("Permintaan terkirim, cek WhatsApp kamu");

  // Reset form for next use
  nameInput.value = "";
  productInput.value = "";
  document.getElementById("reqQty").value = "";
  document.getElementById("reqNote").value = "";
}

function toggleFieldError(input, show) {
  const group = input.closest(".form-group");
  if (show) group.classList.add("has-error");
  else group.classList.remove("has-error");
}

// Clear validation error as soon as user starts typing (applies to all form-groups on the page)
document.addEventListener("input", e => {
  if (e.target.classList.contains("form-input")) {
    const group = e.target.closest(".form-group");
    if (group && group.classList.contains("has-error") && e.target.value.trim()) {
      group.classList.remove("has-error");
    }
  }
});

/* ════════════════════════════════════════
   SCROLL TO TOP
════════════════════════════════════════ */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let scrollTopTicking = false;
window.addEventListener("scroll", () => {
  if (scrollTopTicking) return;
  scrollTopTicking = true;
  requestAnimationFrame(() => {
    const btn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 480) btn.classList.add("visible");
    else btn.classList.remove("visible");
    scrollTopTicking = false;
  });
});

/* ════════════════════════════════════════
   KEYBOARD HANDLING — Escape closes any open overlay, Enter dismisses search keyboard
════════════════════════════════════════ */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (document.getElementById("requestOverlay").classList.contains("open")) closeRequestModal();
    else if (document.getElementById("reviewOverlay").classList.contains("open")) closeReviews();
    else if (document.getElementById("drawerOverlay").classList.contains("open")) closeCart();
  }
  if (e.key === "Enter" && (e.target.id === "searchInput" || e.target.id === "searchInputMob")) {
    e.target.blur(); // dismiss mobile keyboard, results already filter live
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.06 });

function observeCards() {
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function renderSkeleton(count = 8) {
  const grid = document.getElementById("productGrid");
  let html = "";
  for (let i = 0; i < count; i++) {
    html += `<div class="skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line w-40"></div>
        <div class="skeleton-line w-80"></div>
        <div class="skeleton-line w-60"></div>
      </div>
    </div>`;
  }
  grid.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkeleton();
  renderCategories();
  // Real product render happens behind the loading screen — by the time it fades out,
  // the grid is already populated. Skeleton is the very first paint for low-end devices/slow JS parse.
  renderProducts();
  observeCards();
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loadingScreen");
  const minDelay = 1500;
  setTimeout(() => {
    loader.classList.add("fade-out");
    document.body.classList.remove("is-loading");
    setTimeout(() => loader.remove(), 550);
  }, minDelay);
});
