---
layout: ../../layouts/DocsLayout.astro
title: "Propuesta de desarrollo - Casa Capital"
description: "Propuesta técnica y estructura del sitio web de Casa Capital"
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

# Propuesta de diseño y desarrollo

## ¿Qué necesita?

Actualizar su sitio web para:
- Fomentar la presencia web
- Páginas de producto customizadas y autogestionables
- Integrar con sistema de gestion de citas
- Fortalecer presencia B2B

## Propuesta de valor

- **Catálogo de productos** auto-administrables desde la intranet de WordPress
- **Posibilidad de importar modelos 3D**
- **Blog/Novedades** ¿? Participaciones en ferias y eventos
- **Cápsulas** tipo entradas de blog, para mostrar colaboraciones con otros estudios
- **Formulario de calendly** para reservar citas preenciales
- **Multilenguaje** (español, inglés) ¿?

## Estructura Web propuesta

### Páginas principales:
- **Inicio**
- **Nosotros** - Información de la empresa
- **Catálogo de productos** - Listado de productos
- **Taxonomías de productos** - Página particluar para cada taxnonomía (Categorías | líneas)
- **Páginas de productos** - Página particluar (redirecciones a páginas de líneas en caso de ser necesario)
- **Cápsulas** - Listado de colaboraciones
- **Espacios/oficinas** 
- **Trabajamos con profesionales** - Catalogos, asesorias, etc (B2B)
- **Premios**
- **Preguntas frecuentes**
- **Políticas de privacidad**

### Secciones con ABM en intranet de WordPress:
- **Equipamiento de oficinas** (ABM)
- **Espacios** (ABM) 
- **Cápsulas** (ABM) 
- **Premios** (ABM)
- **Productos** (ABM)
- **Blog** (ABM)
- **FAQs** - Preguntas frecuentes (ABM)

## SEO

- **Mejorar las configuraciones de YOAST SEO** para cada página (title, description e img) en caso de que sea WordPress
- **SEO técnico** (estructura y performance)
- **Optimización de imágenes** - .png/.jpg a .webp

## Integraciones

- **Pixel de GTM** (Google Tag Manager) → Mandar datos a GA4 (Google Analytics 4)
- **Google Search Console**
- **Calendly**
- **Botón a WhatsApp** (B2C y B2B)
- **Formulario de contacto**


---

## Entregables

- Diseño en Figma (maqueta, prototipo funcional, guía de estilos y recursos gráficos)
- Manual de uso para gestion de contenidos desde intranet de WordPress
- Deploy de sitio a producción

## Opciones para tecnologías a utilizar en desarrollo

- **WordPress** - CMS tradicional
- ~~**Next.js** - Framework React~~
- ~~**Astro** - Framework moderno para sitios estáticos~~