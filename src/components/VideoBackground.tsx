
import React, { useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  fallbackSrc, 
  className = "w-full h-full object-cover" 
}) => {
  const [videoError, setVideoError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const handleVideoError = () => {
    console.warn('Primary video failed to load:', src);
    setVideoError(true);
  };

  const handleFallbackError = () => {
    console.warn('Fallback video failed to load:', fallbackSrc);
    setFallbackError(true);
  };

  // Show fallback content if all videos fail
  if (videoError && (fallbackError || !fallbackSrc)) {
    return (
      <div className="flex items-center justify-center h-full bg-duo-blue">
        <p className="text-white text-center p-8">
          Vídeo não disponível. Verifique se o arquivo existe ou faça upload de um novo vídeo.
        </p>
      </div>
    );
  }

  return (
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className={className}
      style={{ minHeight: '100vh' }}
      onError={videoError && fallbackSrc ? handleFallbackError : handleVideoError}
      key={videoError ? 'fallback' : 'primary'}
    >
      <source 
        src={videoError && fallbackSrc ? fallbackSrc : src} 
        type="video/mp4" 
      />
      {/* Fallback content */}
      <div className="flex items-center justify-center h-full bg-duo-blue">
        <p className="text-white">Seu navegador não suporta reprodução de vídeo.</p>
      </div>
    </video>
  );
};

export default VideoBackground;
