# 🚗 Ruggieri Cars - Sitio Web Autoadministrable

## 📋 Descripción del Proyecto

Sitio web one-page para **Ruggieri Cars**, negocio familiar de compra, venta y reparación de autos usados en Paraguay. Incluye sistema de gestión de contenido (CMS) con **Decap CMS** (anteriormente Netlify CMS) que permite administrar vehículos y blog sin necesidad de WordPress.

## ✨ Características

- ✅ **Sitio One-Page** completamente responsive
- ✅ **Decap CMS** integrado para gestión sin código
- ✅ **Colección de Vehículos** con todas las especificaciones
- ✅ **Blog** con categorías y SEO
- ✅ **Formularios con WhatsApp** para cotizaciones
- ✅ **Filtros dinámicos** de vehículos por tipo
- ✅ **Sistema de destacados** para vehículos premium
- ✅ **Galería de imágenes** para cada vehículo

## 📁 Estructura del Proyecto

```
ruggieri-cars/
├── index.html              # Página principal
├── admin/
│   ├── index.html         # Panel de administración Decap CMS
│   └── config.yml         # Configuración del CMS
├── css/
│   └── style.css          # Estilos del sitio
├── js/
│   ├── main.js            # JavaScript principal
│   └── cms-loader.js      # Cargador de contenido del CMS
├── _vehiculos/            # Archivos Markdown de vehículos
│   ├── 2018-toyota-corolla-xei.md
│   ├── 2020-honda-civic.md
│   └── ...
├── _posts/                # Artículos del blog
│   ├── 2026-02-10-como-elegir-auto-usado.md
│   └── ...
└── img/
    └── uploads/           # Imágenes subidas por el CMS
```

## 🚀 Instalación y Configuración

### Paso 1: Subir a tu Servidor

1. Sube todos los archivos a tu hosting (FTP, cPanel, etc.)
2. Asegúrate de que la estructura de carpetas se mantenga

### Paso 2: Configurar Decap CMS

#### Opción A: Despliegue en Netlify (Recomendado)

1. **Sube el proyecto a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin TU_REPOSITORIO
   git push -u origin main
   ```

2. **Conecta con Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Click en "New site from Git"
   - Conecta tu repositorio
   - Configura build settings: (dejar en blanco para sitio estático)
   - Click "Deploy"

3. **Activa Netlify Identity**
   - En tu sitio de Netlify, ve a "Identity"
   - Click "Enable Identity"
   - En "Settings" → "Registration" → "Invite only" (recomendado)
   - En "Services" → "Git Gateway" → "Enable"

4. **Crea tu primer usuario**
   - Ve a "Identity" → "Invite users"
   - Ingresa tu email
   - Revisa tu correo y acepta la invitación
   - Crea tu contraseña

5. **Accede al CMS**
   - Ve a `https://tu-sitio.netlify.app/admin/`
   - Inicia sesión con tus credenciales

#### Opción B: Desarrollo Local

1. **Instala el backend local de Decap CMS**
   ```bash
   npx decap-server
   ```

2. **Abre el sitio en tu navegador**
   - Navega a `http://localhost:8080/admin/`
   - Los cambios se guardarán localmente en los archivos Markdown

### Paso 3: Personalización Inicial

#### Cambiar Número de WhatsApp

En `js/main.js` y `js/cms-loader.js`, busca:
```javascript
const whatsappNumber = '595981234567';
```
Y reemplaza con tu número (incluye código de país, sin +)

#### Personalizar Información de Contacto

Edita `index.html` y busca las secciones de contacto para actualizar:
- Dirección
- Teléfono
- Email
- Redes sociales
- Horarios

## 📝 Cómo Usar el CMS

### Gestión de Vehículos

1. Ve al panel de administración (`/admin/`)
2. Click en "Vehículos" → "New Vehículos"
3. Completa todos los campos:
   - **Marca, Modelo, Año**: Información básica
   - **Precio**: En Guaraníes y opcionalmente USD
   - **Tipo**: Sedán, SUV, Pick-Up, etc.
   - **Kilometraje**: Sin puntos ni comas (ej: 78000)
   - **Combustible, Transmisión, Color**: Selecciona opciones
   - **Descripción**: Detalla las características
   - **Características**: Lista de features (uno por línea)
   - **Imagen Principal**: La foto destacada
   - **Galería**: Fotos adicionales
   - **Destacado**: Marca si debe aparecer en home
   - **Estado**: Disponible, Reservado o Vendido
4. Click en "Publish" → "Publish now"

El vehículo aparecerá automáticamente en el sitio web.

### Gestión del Blog

1. Click en "Blog" → "New Blog"
2. Completa:
   - **Título**: Título del artículo
   - **Fecha de Publicación**: Fecha y hora
   - **Autor**: Nombre del autor
   - **Categoría**: Tipo de artículo
   - **Imagen Destacada**: Foto del post
   - **Extracto**: Resumen corto
   - **Contenido**: Artículo completo (soporta Markdown)
   - **Tags**: Etiquetas para SEO
   - **Publicado**: Activa para que se muestre
3. Click en "Publish"

### Editar Contenido Existente

1. En el panel CMS, click en la colección (Vehículos o Blog)
2. Selecciona el elemento a editar
3. Realiza los cambios
4. Click en "Publish" → "Publish now"

Los cambios se reflejan inmediatamente.

## 🎨 Personalización del Diseño

### Colores

Edita `css/style.css` en la sección de variables:
```css
:root{
    --rojo:#C41E3A;           /* Color principal (rojo Ruggieri) */
    --rojo-oscuro:#9A1829;    /* Rojo oscuro para hover */
    --azul:#1E3A8A;           /* Azul secundario */
    --azul-claro:#3B82F6;     /* Azul claro */
    --gris:#4B5563;           /* Texto secundario */
    --gris-claro:#F3F4F6;     /* Fondos claros */
    --negro:#111827;          /* Texto principal */
    --blanco:#FFFFFF;
}
```

### Tipografía

Las fuentes actuales son:
- **Rajdhani**: Títulos (importada de Google Fonts)
- **Inter**: Texto (importada de Google Fonts)

Para cambiarlas, edita el link en `<head>` de `index.html`.

## 📱 Funcionamiento del Formulario de Contacto

Cuando un cliente completa el formulario:
1. Se validan los campos requeridos
2. Se construye un mensaje formateado
3. Se abre WhatsApp con el mensaje pre-escrito
4. El cliente solo debe presionar "Enviar"

El formato del mensaje incluye:
- Nombre del cliente
- Teléfono
- Email (opcional)
- Vehículo de interés (si seleccionó uno)
- Mensaje personalizado

## 🔧 Mantenimiento

### Actualizar Vehículos

Cuando vendas un vehículo:
1. Entra al CMS
2. Busca el vehículo
3. Cambia el estado a "Vendido"
4. O elimínalo directamente

### Agregar Nuevos Vehículos

Simplemente crea una nueva entrada en el CMS con toda la información. El sitio se actualizará automáticamente.

### Backup

Si usas Netlify, todo está respaldado en Git. Si usas otro hosting:
- Descarga regularmente la carpeta `_vehiculos` y `_posts`
- Guarda las imágenes de `img/uploads`

## 🆘 Soporte Técnico

### Problemas Comunes

**El CMS no carga:**
- Verifica que Netlify Identity esté activado
- Chequea que Git Gateway esté habilitado
- Asegúrate de tener permisos de edición

**Los vehículos no aparecen:**
- Verifica que el archivo .md esté en `_vehiculos`
- Chequea que el front matter esté correcto
- Revisa la consola del navegador (F12)

**WhatsApp no abre:**
- Verifica el número de teléfono (debe incluir código de país)
- Asegúrate de que el formato sea correcto: `595981234567`

## 📊 SEO y Rendimiento

El sitio está optimizado con:
- ✅ Meta tags descriptivos
- ✅ Títulos SEO-friendly
- ✅ Imágenes optimizadas (WebP recomendado)
- ✅ Código minificado
- ✅ Carga lazy de imágenes
- ✅ Responsive design

### Recomendaciones SEO

1. Completa siempre el campo "Meta Description" en los posts
2. Usa títulos descriptivos con keywords
3. Agrega alt text a todas las imágenes
4. Publica contenido regularmente en el blog

## 📈 Analytics

Para agregar Google Analytics:
1. Obtén tu ID de medición
2. Agrega el script en `<head>` de `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Seguridad

- Mantén Netlify Identity en modo "Invite only"
- Usa contraseñas fuertes
- Revisa regularmente los usuarios con acceso al CMS
- Haz backups periódicos

## 📞 Contacto del Desarrollador

Para consultas o soporte adicional, contacta al equipo de desarrollo.

---

**¡Buena suerte con Ruggieri Cars! 🚗**
