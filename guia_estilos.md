# Guía de Estilos y Colores - Restaurante de Éxito

## 1. Fuentes (Tipografía)

El proyecto utiliza dos fuentes principales importadas desde Google Fonts:

### **Títulos y Encabezados (Headings: h1, h2, h3, h4, h5, h6)**
- **Fuente:** `Montserrat`, sans-serif
- **Pesos (Weights):** Regular (400), Medium (500), Semi-Bold (600), Bold (700), Extra-Bold (800), Black (900)
- **Uso:** Ideal para llamar la atención, dar un toque premium y moderno a las secciones principales del embudo.

### **Cuerpo de Texto y Párrafos (Body)**
- **Fuente:** `Inter`, sans-serif
- **Pesos (Weights):** Light (300), Regular (400), Medium (500), Semi-Bold (600), Bold (700)
- **Uso:** Garantiza máxima legibilidad para descripciones, botones y textos largos.


## 2. Paleta de Colores

La paleta se divide en colores oscuros/neutrales para transmitir lujo y alto contraste, una escala de dorados, y una paleta vibrante (Latino High Pop) para resaltar llamados a la acción y detalles culturales.

### **Colores Neutros y Marca Oscura (Fondo y Texto base)**
Dan un aspecto de lujo ("Premium Aesthetic") y alto contraste:
- `--color-brand-950`: `#050505` (Negro Puro)
- `--color-brand-900`: `#121212` (Gris Oscuro Base, usado para texto general)
- `--color-brand-800`: `#1f1f1f`
- `--color-brand-700`: `#2d2d2d`
- `--color-brand-600`: `#404040`
- `--color-brand-500`: `#525252`

### **Escala de Color Dorado (Gold)**
Usados para elementos premium, estrellas de reseñas, y acentos de lujo:
- `--color-gold-50`: `#fffbeb`
- `--color-gold-100`: `#fef3c7`
- `--color-gold-200`: `#fde68a`
- `--color-gold-300`: `#fcd34d`
- `--color-gold-400`: `#fbbf24`
- `--color-gold-500`: `#f59e0b` (Dorado Principal)
- `--color-gold-600`: `#d97706`

### **Paleta Vibrante Latina (High Pop)**
Colores cálidos, energéticos y llamativos, utilizados para botones, gradientes, y llamadas a la acción (CTAs):
- **Terracotta:** `#f35d09` (Naranja intenso brillante)
- **Salsa:** `#f30606` (Rojo de la marca)
- **Chile:** `#ff5252` (Rojo neón)
- **Mango:** `#f1c40f` (Amarillo brillante)
- **Avocado:** `#2ecc71` (Verde neón / Acentos y mensajes de éxito)
- **Maíz:** `#ffd700` (Oro brillante)
- **Morado:** `#9b59b6`

### **Acentos Secundarios**
- **Verde Acento:** `#2ecc71` (Igual al Avocado)
- **Rojo Acento:** `#e74c3c`


## 3. Gradientes Principales

El proyecto utiliza gradientes cálidos muy marcados para botones y textos estelares:
- **Botones y Textos con Gradiente:** `linear-gradient(135deg, #f35d09, #f30606)` (Combinación de *Terracotta* y *Salsa*).
- **Fondos de decoración globales:**
  - Gradiente radial Terracotta a Dorado (`#f35d09` a `#f59e0b`)
  - Gradiente radial Avocado a Mango (`#2ecc71` a `#f1c40f`)


## 4. Estilos de Interfaz (Efectos)

- **Fondo de la página (Body Background):** Slate 50 (`#f8fafc`) o fondos negros con texturas en secciones oscuras.
- **Tarjetas de Cristal (Glassmorphism):** Utilizan fondos blancos translúcidos (`rgba(255, 255, 255, 1)`) combinados con desenfoque (`backdrop-filter: blur(12px)`) y bordes sutiles.
- **Botones CTA:** Usan el gradiente cálido mencionado, texto blanco, sombra pronunciada (`box-shadow: 0 4px 20px rgba(243, 93, 9, 0.3)`) y efectos de hover al pasar el cursor (se levantan y la sombra aumenta).
