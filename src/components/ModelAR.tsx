import React, { useEffect, useRef } from 'react';

interface ModelARProps {
  src: string;
  alt?: string;
  className?: string;
}

const ModelAR: React.FC<ModelARProps> = ({ src, alt = "Modelo 3D", className = "" }) => {
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // Cargar el script de model-viewer dinámicamente
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.async = true;
    
    // Agregar el script al head si no existe
    if (!document.querySelector('script[src*="model-viewer"]')) {
      document.head.appendChild(script);
    }

    // Configurar el modelo cuando se carga
    script.onload = () => {
      if (modelViewerRef.current) {
        const modelViewer = modelViewerRef.current;
        
        // Ajustar el posicionamiento AR
        modelViewer.addEventListener('ar-status', (event: any) => {
          if (event.detail.status === 'session-started') {
            // Forzar posicionamiento en el suelo con offset negativo
            modelViewer.setAttribute('ar-placement', 'floor');
            modelViewer.setAttribute('ar-vertical-offset', '-0.5');
            
            // Ajustar la escala y posición
            setTimeout(() => {
              modelViewer.setAttribute('ar-scale', '0.1');
              modelViewer.setAttribute('ar-placement', 'floor');
            }, 100);
          }
        });
      }
    };

    return () => {
      // Cleanup si es necesario
    };
  }, []);

  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      {React.createElement('model-viewer', {
        ref: modelViewerRef,
        src: src,
        alt: alt,
        ar: true,
        'ar-modes': 'scene-viewer quick-look webxr',
        'camera-controls': true,
        'auto-rotate': true,
        'camera-orbit': '0deg 75deg 75%',
        'min-camera-orbit': 'auto auto 50%',
        'max-camera-orbit': 'auto auto 150%',
        'shadow-intensity': '1',
        'environment-image': 'neutral',
        exposure: '1',
        'shadow-softness': '0',
        'animation-name': '',
        'ar-scale': '0.05',
        'ar-placement': 'floor',
        'ar-button': true,
        loading: 'eager',
        reveal: 'auto',
        // Configuraciones optimizadas para forzar posicionamiento en el suelo
        'ar-hit-test': 'auto',
        'ar-smooth-transition': true,
        'ar-tracking': 'stable',
        'ar-vertical-offset': '-2.5',
        'ar-surface-estimation': 'auto',
        // Nuevas propiedades para mejor posicionamiento
        'ar-ground-plane': 'floor',
        'ar-placement-mode': 'floor',
        'ar-anchor': 'floor',
        style: {
          width: '100%',
          height: '100%',
          minHeight: '400px',
          backgroundColor: '#f0f0f0'
        }
      }, 
        React.createElement('button', {
          slot: 'ar-button',
          className: 'absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-200'
        }, 'Ver en AR')
      )}
    </div>
  );
};

export default ModelAR; 