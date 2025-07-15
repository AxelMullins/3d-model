import React, { useEffect } from 'react';

interface ModelARProps {
  src: string;
  alt?: string;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const ModelAR: React.FC<ModelARProps> = ({ src, alt = "Modelo 3D", className = "" }) => {
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

    return () => {
      // Cleanup si es necesario
    };
  }, []);

  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      <model-viewer
        src={src}
        alt={alt}
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        auto-rotate
        camera-orbit="0deg 75deg 75%"
        min-camera-orbit="auto auto 50%"
        max-camera-orbit="auto auto 150%"
        shadow-intensity="1"
        environment-image="neutral"
        exposure="1"
        shadow-softness="0"
        animation-name=""
        ar-scale="fixed"
        ar-placement="floor"
        loading="eager"
        reveal="auto"
        ar-button
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          backgroundColor: '#f0f0f0'
        }}
      >
        <button
          slot="ar-button"
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-200"
        >
          Ver en AR
        </button>
      </model-viewer>
    </div>
  );
};

export default ModelAR; 