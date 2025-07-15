# 🚀 Modelo 3D en Realidad Aumentada con Astro

Este proyecto muestra cómo crear una aplicación web que permite visualizar modelos 3D en realidad aumentada usando el componente `<model-viewer>` de Google, construido con Astro y React.

## ✨ Características

- **Visualización 3D**: Muestra modelos GLB con controles de cámara interactivos
- **Realidad Aumentada**: Soporte para AR en dispositivos móviles compatibles
- **Responsive Design**: Interfaz adaptada para desktop y móvil usando Tailwind CSS
- **React Integration**: Componente React personalizado para model-viewer
- **Astro Framework**: Rendimiento optimizado con Astro

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework web moderno
- **React** - Para componentes interactivos
- **Tailwind CSS** - Para estilos responsivos
- **Google Model Viewer** - Para visualización 3D y AR

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18.20.8 o superior
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd smoggy-satellite
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 📱 Funcionalidades

### Desktop
- **Controles de cámara**: Arrastra para rotar, scroll para zoom
- **Auto-rotación**: El modelo rota automáticamente
- **Controles de cámara**: Botones para resetear vista

### Móvil
- **Botón AR**: Toca "Ver en AR" para activar la cámara
- **Modos AR**: Scene Viewer, Quick Look, WebXR
- **Controles táctiles**: Gestos para manipular el modelo

## 📁 Estructura del Proyecto

```
smoggy-satellite/
├── src/
│   ├── components/
│   │   └── ModelAR.tsx          # Componente React para model-viewer
│   ├── pages/
│   │   └── index.astro          # Página principal
│   └── styles/
│       └── global.css           # Estilos globales con Tailwind
├── public/
│   └── modelo.glb              # Modelo 3D de ejemplo
├── astro.config.mjs            # Configuración de Astro
└── tailwind.config.mjs         # Configuración de Tailwind
```

## 🎯 Componente ModelAR

El componente `ModelAR` incluye:

- **Atributos AR**: `ar`, `ar-modes="scene-viewer quick-look webxr"`
- **Controles**: `camera-controls`, `auto-rotate`
- **Configuración**: Orbitas de cámara, sombras, iluminación
- **Responsive**: Adaptado para diferentes tamaños de pantalla

### Uso del Componente

```tsx
import ModelAR from '../components/ModelAR';

<ModelAR 
  client:load
  src="/tu-modelo.glb" 
  alt="Descripción del modelo"
  className="w-full h-96"
/>
```

## 📦 Agregar Nuevos Modelos

1. Coloca tu archivo `.glb` en la carpeta `public/`
2. Actualiza la prop `src` en el componente ModelAR
3. Ajusta `alt` para accesibilidad

## 🌐 Compatibilidad

- **Desktop**: Chrome, Firefox, Safari, Edge
- **Móvil AR**: iOS 12+ (Quick Look), Android (Scene Viewer)
- **WebXR**: Chrome para Android, Oculus Browser

## 🔧 Configuración Avanzada

### Personalizar Model Viewer

Puedes modificar los atributos en `ModelAR.tsx`:

```tsx
<model-viewer
  src={src}
  ar
  ar-modes="scene-viewer quick-look webxr"
  camera-controls
  auto-rotate
  camera-orbit="0deg 75deg 75%"
  // Más atributos...
/>
```

### Estilos Personalizados

Modifica `global.css` para cambiar la apariencia:

```css
model-viewer {
  --poster-color: transparent;
  --progress-bar-color: #3b82f6;
  --progress-mask: #e5e7eb;
}
```

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**Desarrollado con ❤️ usando Astro, React y Google Model Viewer**
