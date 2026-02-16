// cms-loader.js - Carga contenido desde Decap CMS

// Parser de front matter
function parseFrontMatter(content) {
    const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!match) return null;

    const frontMatter = {};
    const lines = match[1].split('\n');

    lines.forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
            frontMatter[key.trim()] = value;
        }
    });

    return {
        data: frontMatter,
        content: match[2]
    };
}

// Cargar vehículos
async function loadVehiculos() {
    try {
        const vehiculosGrid = document.getElementById('vehiculosGrid');
        const selectVehiculo = document.getElementById('vehiculo');

        if (!vehiculosGrid) return;

        // Vehículos de ejemplo (en producción estos vendrían de archivos .md)
        const vehiculos = [
            {
                marca: "Toyota",
                modelo: "Corolla XEi",
                year: 2018,
                precio: "95.000.000",
                precio_usd: "13.500",
                tipo: "sedan",
                kilometraje: "78.000",
                combustible: "Nafta",
                transmision: "Automática",
                color: "Blanco Perla",
                descripcion: "Toyota Corolla XEi 2018 en excelente estado. Único dueño, service oficial completo.",
                imagen_principal: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=85",
                destacado: true,
                estado: "Disponible"
            },
            {
                marca: "Honda",
                modelo: "Civic EX",
                year: 2020,
                precio: "125.000.000",
                precio_usd: "17.800",
                tipo: "sedan",
                kilometraje: "42.000",
                combustible: "Nafta",
                transmision: "Automática",
                color: "Gris Grafito",
                descripcion: "Honda Civic EX 2020, como nuevo. Pocos kilómetros, equipamiento completo.",
                imagen_principal: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=85",
                destacado: true,
                estado: "Disponible"
            },
            {
                marca: "Ford",
                modelo: "Ranger XLT 4x4",
                year: 2019,
                precio: "145.000.000",
                precio_usd: "20.600",
                tipo: "pickup",
                kilometraje: "95.000",
                combustible: "Diésel",
                transmision: "Manual",
                color: "Negro",
                descripcion: "Ford Ranger XLT 4x4 2019, motor diésel 3.2L, doble cabina.",
                imagen_principal: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=85",
                destacado: false,
                estado: "Disponible"
            },
            {
                marca: "Chevrolet",
                modelo: "Onix LTZ",
                year: 2017,
                precio: "68.000.000",
                precio_usd: "9.700",
                tipo: "hatchback",
                kilometraje: "112.000",
                combustible: "Nafta",
                transmision: "Manual",
                color: "Rojo",
                descripcion: "Chevrolet Onix LTZ 2017, económico y confiable. Ideal primer auto.",
                imagen_principal: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=85",
                destacado: false,
                estado: "Disponible"
            },
            {
                marca: "Nissan",
                modelo: "Kicks Exclusive",
                year: 2021,
                precio: "135.000.000",
                precio_usd: "19.200",
                tipo: "suv",
                kilometraje: "28.000",
                combustible: "Nafta",
                transmision: "Automática",
                color: "Azul Metálico",
                descripcion: "Nissan Kicks Exclusive 2021, SUV compacta premium. Garantía vigente.",
                imagen_principal: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=85",
                destacado: true,
                estado: "Disponible"
            },
            {
                marca: "Volkswagen",
                modelo: "Gol Trend",
                year: 2016,
                precio: "58.000.000",
                precio_usd: "8.250",
                tipo: "hatchback",
                kilometraje: "145.000",
                combustible: "Nafta",
                transmision: "Manual",
                color: "Blanco",
                descripcion: "Volkswagen Gol Trend 2016, confiable y económico. Bajo consumo.",
                imagen_principal: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=85",
                destacado: false,
                estado: "Disponible"
            },
            {
                marca: "Hyundai",
                modelo: "Tucson Limited",
                year: 2019,
                precio: "142.000.000",
                precio_usd: "20.200",
                tipo: "suv",
                kilometraje: "64.000",
                combustible: "Nafta",
                transmision: "Automática",
                color: "Plateado",
                descripcion: "Hyundai Tucson Limited 2019, SUV premium familiar. Amplio espacio.",
                imagen_principal: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=85",
                destacado: false,
                estado: "Disponible"
            }
        ];

        // Llenar select de vehículos
        if (selectVehiculo) {
            vehiculos.forEach(v => {
                const option = document.createElement('option');
                option.value = `${v.marca} ${v.modelo} ${v.year}`;
                option.textContent = `${v.marca} ${v.modelo} ${v.year}`;
                selectVehiculo.appendChild(option);
            });
        }

        // Renderizar vehículos
        vehiculosGrid.innerHTML = vehiculos.map(v => `
            <div class="vehiculo-card fade-in" data-tipo="${v.tipo}">
                ${v.destacado ? '<div class="vehiculo-badge">⭐ Destacado</div>' : ''}
                <div class="vehiculo-imagen">
                    <img src="${v.imagen_principal}" alt="${v.marca} ${v.modelo}">
                    <div class="vehiculo-estado">${v.estado}</div>
                </div>
                <div class="vehiculo-info">
                    <h3>${v.marca} ${v.modelo}</h3>
                    <div class="vehiculo-year">${v.year}</div>
                    <div class="vehiculo-specs">
                        <span>🔧 ${v.kilometraje} km</span>
                        <span>⛽ ${v.combustible}</span>
                        <span>⚙️ ${v.transmision}</span>
                    </div>
                    <p class="vehiculo-descripcion">${v.descripcion}</p>
                    <div class="vehiculo-precio">
                        <div class="precio-principal">Gs. ${v.precio}</div>
                        <div class="precio-secundario">≈ USD ${v.precio_usd}</div>
                    </div>
                    <button class="btn-consultar" data-vehiculo="${v.marca} ${v.modelo} ${v.year}">
                        💬 Consultar por WhatsApp
                    </button>
                </div>
            </div>
        `).join('');

        // Hacer visibles los vehículos cargados
        const vehiculoCards = document.querySelectorAll('.vehiculo-card');
        vehiculoCards.forEach(card => {
            card.classList.add('visible');
        });

        // Event listeners para botones de consulta
        document.querySelectorAll('.btn-consultar').forEach(btn => {
            btn.addEventListener('click', function () {
                const vehiculo = this.dataset.vehiculo;
                const whatsapp = '595981234567'; // Cambiar por número real
                const mensaje = encodeURIComponent(
                    `Hola! Me interesa el ${vehiculo}. ¿Podrían darme más información?`
                );
                window.open(`https://wa.me/${whatsapp}?text=${mensaje}`, '_blank');
            });
        });

        // Filtros
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                // Remover active de todos
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.dataset.filter;
                const cards = document.querySelectorAll('.vehiculo-card');

                cards.forEach(card => {
                    if (filter === 'all' || card.dataset.tipo === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

    } catch (error) {
        console.error('Error cargando vehículos:', error);
    }
}

// Cargar posts del blog
async function loadBlogPosts() {
    try {
        const blogGrid = document.getElementById('blogGrid');
        if (!blogGrid) return;

        const posts = [
            {
                title: "Cómo Elegir un Auto Usado: Guía Completa 2026",
                date: "2026-02-10",
                category: "Guías de Compra",
                featured_image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=85",
                excerpt: "Comprar un auto usado puede ser una excelente inversión si sabés qué buscar. Te compartimos los consejos esenciales.",
                slug: "como-elegir-auto-usado"
            },
            {
                title: "Mantenimiento Básico: Alarga la Vida de tu Auto",
                date: "2026-02-05",
                category: "Mantenimiento",
                featured_image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=85",
                excerpt: "El mantenimiento preventivo es clave. Conocé las tareas básicas que podés hacer vos mismo.",
                slug: "mantenimiento-basico"
            },
            {
                title: "Opciones de Financiación para tu Auto Usado",
                date: "2026-01-28",
                category: "Consejos",
                featured_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=85",
                excerpt: "No necesitás pagar todo al contado. Conocé las diferentes opciones de financiación disponibles.",
                slug: "financiacion-auto-usado"
            }
        ];

        blogGrid.innerHTML = posts.slice(0, 3).map(post => `
            <article class="blog-card fade-in">
                <div class="blog-imagen">
                    <img src="${post.featured_image}" alt="${post.title}">
                    <div class="blog-categoria">${post.category}</div>
                </div>
                <div class="blog-contenido">
                    <div class="blog-meta">
                        <span class="blog-fecha">📅 ${new Date(post.date).toLocaleDateString('es-PY')}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="blog/${post.slug}.html" class="blog-link">Leer más →</a>
                </div>
            </article>
        `).join('');

        // Hacer visibles los posts del blog cargados
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            card.classList.add('visible');
        });

    } catch (error) {
        console.error('Error cargando blog:', error);
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    loadVehiculos();
    loadBlogPosts();
}
