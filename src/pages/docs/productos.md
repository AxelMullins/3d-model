---
layout: ../../layouts/DocsLayout.astro
title: "Sitio web para Casa Capital - Muebles con tecnología"
description: "Documentación técnica para el sitio web de Casa Capital, incluyendo estructura de productos, taxonomías y campos personalizados"
---

<script>
	// Script para hacer que todos los enlaces externos se abran en nueva pestaña
	document.addEventListener('DOMContentLoaded', function() {
		const links = document.querySelectorAll('a[href^="http"]');
		links.forEach(link => {
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener noreferrer');
		});
	});
</script>

# Catálogo de productos

Desarrollaremos un **sistema de gestión de productos personalizado** para Casa Capital que permitirá:

- **Carga centralizada:** Todos los productos se gestionan desde un panel de administración único
- **Clasificación automática:** Las taxonomías (categorías, líneas, materiales) organizan automáticamente el contenido
- **Navegación dinámica:** El sitio se adapta automáticamente según las clasificaciones asignadas
- **Páginas automáticas:** Se generan automáticamente páginas de categorías, líneas y productos individuales

---

## Template para cada producto

### Campos básicos:
- **Título** - Nombre del producto
- **Slug** - URL de la página (generado automáticamente)
- **Extracto** - Texto simple, un párrafo descriptivo
- **Descripción** - Texto enriquecido para crear sub-títulos, listas, etc.

### Multimedia:
- **Imagen destacada** - Imagen principal del producto
- **Galería de imágenes** - Múltiples imágenes del producto
- **Modelo 3D** - Archivo 3D para visualización (opcional)

### Información técnica:
- **Descripciones técnicas** - Repeater con título + texto enriquecido
- **Link a "Ficha técnica"** - Enlace a documento PDF
- **Link a "Catálogo de acabados"** - Enlace a catálogo
- **Link personalizado a "Más información"** - Enlace personalizable (ej: WhatsApp)


## Taxonomías

### Categorías (Category)
```
├── Mesas
│   ├── Mesas de living
│   ├── Mesas de comedor
│   └── Mesas de noche
├── Sillas
├── Banquetas
└── Espacios (opcional)
    ├── Living
    ├── Comedor
    ├── Dormitorio
    └── Oficina
```

### Líneas (Category)
```
├── Línea Mondrian
├── Línea Cheta
├── Línea Cozy
└── Línea Industrial
```

### Materiales (Tags)
```
├── Madera
├── Metal  
├── Vidrio
└── Textil
```

---

## Resumen de la estructura

Esta documentación describe la estructura completa del sitio web de Casa Capital, incluyendo:

- **Gestión de contenido:** WordPress con plugins especializados
- **Campos personalizados:** 15+ campos para cada producto
- **Taxonomías:** 3 tipos de clasificación (Categorías, Líneas, Materiales)
- **Funcionalidades:** Galerías, modelos 3D, enlaces personalizados

## Tecnologías a utilizar:
- **CMS:** WordPress
- **Plugins principales:**
  - Secure Custom Fields (SCF)
  - Elementor Pro

## ¿Para qué usamos SCF?
- Creación de Post Type personalizado "Productos"
- Creación de grupo de campos personalizados para "Productos"
- Creación de taxonomías
    - Categorías (Category)
    - Líneas (Category)
    - Materiales (Tags)