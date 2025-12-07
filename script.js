// Dados dos produtos com LINKS ESTÁVEIS (Atualizados)
const products = [
    {
        id: 1,
        name: 'Poltrona Oslo Velvet',
        category: 'Living Room',
        price: 2499.00,
        // Poltrona cinza moderna em fundo limpo
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'Luminária Arco Floor',
        category: 'Lighting',
        price: 899.00,
        // Imagem corrigida
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Vaso Cerâmica Artisan',
        category: 'Decor',
        price: 189.00,
        // Vaso em cima de mesa (link corrigido)
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        name: 'Mesa de Centro Marble',
        category: 'Furniture',
        price: 3200.00,
        // Mesa de centro moderna
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 5,
        name: 'Cadeira Eames Style',
        category: 'Office',
        price: 1200.00,
        // Cadeira branca icônica (link trocado para um mais estável)
        image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 6,
        name: 'Espelho Minimalista',
        category: 'Decor',
        price: 550.00,
        // Espelho redondo
        image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80'
    }
];

// --- ESTADO (LocalStorage) ---
let cart = JSON.parse(localStorage.getItem('luxe_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('luxe_wishlist')) || [];

// --- RENDERIZAÇÃO ---
function loadProducts(filterText = '') {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(filterText.toLowerCase()) ||
        p.category.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Nenhum produto encontrado.</p>';
        return;
    }

    filteredProducts.forEach((product, index) => {
        const isInWishlist = wishlist.includes(product.id);
        const card = document.createElement('div');
        card.className = 'product-card reveal';
        card.style.transitionDelay = `${index * 50}ms`;

        card.innerHTML = `
    <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-actions">
                <button class="action-btn btn-wishlist ${isInWishlist ? 'wishlist-active' : ''}" onclick="toggleWishlist(${product.id}, this)">
                    <i class="ri-heart-${isInWishlist ? 'fill' : 'line'}"></i>
                </button>
                <button class="action-btn btn-cart-add" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            </div>
    </div>
    <div class="product-info">
        <div class="product-category">${product.category}</div>
        <div class="product-title">${product.name}</div>
        <div class="product-price">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
    </div>
    `;
        grid.appendChild(card);
    });
    observeElements();
}

// --- FUNCIONALIDADES DO CARRINHO ---
function addToCart(id) {
    cart.push(id);
    localStorage.setItem('luxe_cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Produto adicionado ao carrinho');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('luxe_cart', JSON.stringify(cart));
    updateCartCount();
    renderSidebar('cart'); // Re-renderiza a lista
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    countEl.textContent = cart.length;
    if (cart.length > 0) countEl.classList.add('visible');
    else countEl.classList.remove('visible');
}

// --- FUNCIONALIDADES WISHLIST ---
function toggleWishlist(id, btn) {
    const index = wishlist.indexOf(id);
    if (index === -1) {
        wishlist.push(id);
        btn.classList.add('wishlist-active');
        btn.innerHTML = '<i class="ri-heart-fill"></i>';
        showToast('Adicionado aos favoritos');
    } else {
        wishlist.splice(index, 1);
        btn.classList.remove('wishlist-active');
        btn.innerHTML = '<i class="ri-heart-line"></i>';
    }
    localStorage.setItem('luxe_wishlist', JSON.stringify(wishlist));
}

// --- SIDEBAR (Gaveta Lateral) ---
function openSidebar(type) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const title = document.getElementById('sidebar-title');

    sidebar.classList.add('active');
    overlay.classList.add('active');

    renderSidebar(type);
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sidebar-overlay').classList.remove('active');
}

function renderSidebar(type) {
    const content = document.getElementById('sidebar-content');
    const footer = document.getElementById('cart-footer');
    const title = document.getElementById('sidebar-title');
    content.innerHTML = '';

    let items = [];

    if (type === 'cart') {
        title.textContent = 'Seu Carrinho';
        footer.style.display = 'block';
        // Mapeia IDs para objetos de produto
        items = cart.map(id => products.find(p => p.id === id));

        if (items.length === 0) {
            content.innerHTML = '<p style="color: #999; text-align: center; margin-top: 2rem;">Seu carrinho está vazio.</p>';
            document.getElementById('cart-total-price').textContent = 'R$ 0,00';
            return;
        }

        let total = 0;
        items.forEach((item, index) => {
            total += item.price;
            content.innerHTML += `
    <div class="cart-item">
        <img src="${item.image}" class="cart-img" alt="${item.name}">
            <div class="cart-details">
                <div class="cart-name">${item.name}</div>
                <div class="cart-price">R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <button class="cart-remove" onclick="removeFromCart(${index})">Remover</button>
            </div>
    </div>
    `;
        });
        document.getElementById('cart-total-price').textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    } else if (type === 'wishlist') {
        title.textContent = 'Meus Favoritos';
        footer.style.display = 'none';
        items = wishlist.map(id => products.find(p => p.id === id));

        if (items.length === 0) {
            content.innerHTML = '<p style="color: #999; text-align: center; margin-top: 2rem;">Sua lista de desejos está vazia.</p>';
            return;
        }

        items.forEach(item => {
            content.innerHTML += `
                        <div class="cart-item">
                            <img src="${item.image}" class="cart-img" alt="${item.name}">
                            <div class="cart-details">
                                <div class="cart-name">${item.name}</div>
                                <div class="cart-price">R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                                <button class="cart-remove" onclick="addToCart(${item.id}); closeSidebar();">Mover para Carrinho</button>
                            </div>
                        </div>
                    `;
        });
    }
}

// --- PESQUISA ---
function toggleSearch() {
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        setTimeout(() => input.focus(), 100);
    } else {
        // Limpar pesquisa ao fechar
        input.value = '';
        loadProducts();
    }
}

// --- UI & EVENTOS ---
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Event Listeners Globais
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartCount();

    // Configurar botões do Header
    const icons = document.querySelectorAll('.nav-icons .icon-btn');

    // Botão Pesquisa (Índice 0)
    icons[0].addEventListener('click', toggleSearch);

    // Botão Favoritos (Índice 1)
    icons[1].addEventListener('click', () => openSidebar('wishlist'));

    // Botão Carrinho (Índice 2)
    icons[2].addEventListener('click', () => openSidebar('cart'));

    // Input Pesquisa em Tempo Real
    document.getElementById('search-input').addEventListener('keyup', (e) => {
        loadProducts(e.target.value);
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});
