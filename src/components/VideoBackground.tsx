
import React from 'react';

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
  return (
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className={className}
      style={{ minHeight: '100vh' }}
    >
      <source src={src} type="video/mp4" />
      {fallbackSrc && <source src={fallbackSrc} type="video/webm" />}
      <div className="flex items-center justify-center h-full bg-duo-blue">
        <p className="text-white">Seu navegador não suporta reprodução de vídeo.</p>
      </div>
    </video>
  );
};

export default VideoBackground;
