let products = [];
let currentImages = [];
let currentIndex = 0;

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts();
  });

function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      <img src="${p.images[0]}" alt="${p.name}">
      <h3>${p.name}</h3>
    </div>
  `).join('');
}

function openModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-description').textContent = product.description;
  currentImages = product.images;
  currentIndex = 0;
  document.getElementById('modal-image').src = currentImages[currentIndex];

  document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('product-modal').style.display = 'none';
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById('modal-image').src = currentImages[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById('modal-image').src = currentImages[currentIndex];
}

// Mobile menu toggle
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}
