// vehiculo-detail.js - Carga datos del vehículo desde URL

// Datos de vehículos (mismo array que en cms-loader.js)
const vehiculos = [
    {
        id: "toyota-corolla-2018",
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
        descripcion: "Toyota Corolla XEi 2018 en excelente estado. Único dueño, service oficial completo. Este vehículo ha sido mantenido meticulosamente y cuenta con todas las revisiones al día. Incluye garantía extendida y documentación completa.",
        imagen_principal: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=85",
        destacado: true,
        estado: "Disponible"
    },
    {
        id: "honda-civic-2020",
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
        descripcion: "Honda Civic EX 2020, como nuevo. Pocos kilómetros, equipamiento completo. Cuenta con sistema de navegación, cámara de retroceso, sensores de estacionamiento y todas las características de seguridad modernas.",
        imagen_principal: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=85",
        destacado: true,
        estado: "Disponible"
    },
    {
        id: "ford-ranger-2019",
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
        descripcion: "Ford Ranger XLT 4x4 2019, motor diésel 3.2L, doble cabina. Perfecta para trabajo y aventura. Incluye barra antivuelco, lona marinera y estribos laterales. Mantenimiento al día en concesionario oficial.",
        imagen_principal: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=85",
        destacado: false,
        estado: "Disponible"
    },
    {
        id: "chevrolet-onix-2017",
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
        descripcion: "Chevrolet Onix LTZ 2017, económico y confiable. Ideal primer auto. Bajo consumo de combustible, fácil de manejar y estacionar. Perfecto para la ciudad. Incluye aire acondicionado y dirección asistida.",
        imagen_principal: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=85",
        destacado: false,
        estado: "Disponible"
    },
    {
        id: "nissan-kicks-2021",
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
        descripcion: "Nissan Kicks Exclusive 2021, SUV compacta premium. Garantía vigente. Equipamiento completo con pantalla táctil, cámara 360°, control de crucero adaptativo y asientos de cuero. Como nueva.",
        imagen_principal: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=85",
        destacado: true,
        estado: "Disponible"
    },
    {
        id: "volkswagen-gol-2016",
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
        descripcion: "Volkswagen Gol Trend 2016, confiable y económico. Bajo consumo. Excelente relación precio-calidad. Mantenimiento preventivo realizado. Motor 1.6, muy rendidor para ciudad y ruta.",
        imagen_principal: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=85",
        destacado: false,
        estado: "Disponible"
    },
    {
        id: "hyundai-tucson-2019",
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
        descripcion: "Hyundai Tucson Limited 2019, SUV premium familiar. Amplio espacio. Perfecta para familias grandes. Incluye techo panorámico, sistema de sonido premium, asientos calefaccionados y todas las comodidades.",
        imagen_principal: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=85",
        destacado: false,
        estado: "Disponible"
    }
];

// Obtener ID del vehículo desde URL
function getVehiculoIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Cargar datos del vehículo
function loadVehiculoDetail() {
    const vehiculoId = getVehiculoIdFromURL();

    if (!vehiculoId) {
        window.location.href = 'index.html#vehiculos';
        return;
    }

    const vehiculo = vehiculos.find(v => v.id === vehiculoId);

    if (!vehiculo) {
        window.location.href = 'index.html#vehiculos';
        return;
    }

    // Actualizar título de la página
    document.getElementById('page-title').textContent = `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.year} - Ruggieri Cars`;

    // Actualizar contenido
    document.getElementById('vehiculo-imagen').src = vehiculo.imagen_principal;
    document.getElementById('vehiculo-imagen').alt = `${vehiculo.marca} ${vehiculo.modelo}`;

    if (vehiculo.destacado) {
        document.getElementById('vehiculo-badge-container').innerHTML = '<div class="vehiculo-detail-badge">⭐ Destacado</div>';
    }

    document.getElementById('vehiculo-titulo').textContent = `${vehiculo.marca} ${vehiculo.modelo}`;
    document.getElementById('vehiculo-year').textContent = vehiculo.year;
    document.getElementById('vehiculo-precio-gs').textContent = `Gs. ${vehiculo.precio}`;
    document.getElementById('vehiculo-precio-usd').textContent = `≈ USD ${vehiculo.precio_usd}`;

    document.getElementById('spec-km').textContent = `${vehiculo.kilometraje} km`;
    document.getElementById('spec-combustible').textContent = vehiculo.combustible;
    document.getElementById('spec-transmision').textContent = vehiculo.transmision;
    document.getElementById('spec-color').textContent = vehiculo.color;

    document.getElementById('vehiculo-descripcion').textContent = vehiculo.descripcion;

    // Configurar botón de WhatsApp
    const btnConsultar = document.getElementById('btn-consultar');
    btnConsultar.addEventListener('click', () => {
        const whatsapp = '595981234567';
        const mensaje = encodeURIComponent(
            `Hola! Me interesa el ${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.year}. ¿Podrían darme más información?`
        );
        window.open(`https://wa.me/${whatsapp}?text=${mensaje}`, '_blank');
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadVehiculoDetail);
} else {
    loadVehiculoDetail();
}
