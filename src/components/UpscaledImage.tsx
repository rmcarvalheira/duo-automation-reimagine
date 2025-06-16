
import React, { useState, useEffect } from 'react';
import { upscaleImage } from '../utils/imageUpscaler';

interface UpscaledImageProps {
  src: string;
  alt: string;
  className?: string;
}

const UpscaledImage: React.FC<UpscaledImageProps> = ({ src, alt, className }) => {
  const [upscaledSrc, setUpscaledSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImageUpscale = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const upscaledUrl = await upscaleImage(src);
        setUpscaledSrc(upscaledUrl);
      } catch (err) {
        console.error('Failed to upscale image:', err);
        setError('Failed to upscale image');
        // Fallback to original image
        setUpscaledSrc(src);
      } finally {
        setIsLoading(false);
      }
    };

    processImageUpscale();
  }, [src]);

  if (isLoading) {
    return (
      <div className={`${className} bg-gray-100 animate-pulse flex items-center justify-center`}>
        <span className="text-gray-500">Processando imagem...</span>
      </div>
    );
  }

  return (
    <img 
      src={upscaledSrc}
      alt={alt}
      className={className}
      onError={() => {
        console.warn('Upscaled image failed to load, falling back to original');
        setUpscaledSrc(src);
      }}
    />
  );
};

export default UpscaledImage;
