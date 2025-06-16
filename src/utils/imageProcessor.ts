
// Utility functions for processing product images
export const processProductImages = () => {
  // Map of product images - these will be the processed versions without text
  const productImages = {
    'robo-slim': '/lovable-uploads/5d74b1e9-2a75-4c71-810d-5ea4c9954ea8.png',
    'robo-eva': '/lovable-uploads/f740303f-56e4-4f3b-8408-a73106f9904b.png', 
    'duo-connect': '/lovable-uploads/bd0964d7-fc0f-45ee-ad3c-dd301a2ade8e.png',
    'robo-picker': '/lovable-uploads/d334d8f4-79fb-4870-a445-fa842054c005.png'
  };
  
  return productImages;
};

export const getProductImage = (productId: string): string => {
  const images = processProductImages();
  return images[productId as keyof typeof images] || '';
};

// Image processing function for upscaling
export const processImage = async (
  blob: Blob, 
  options: {
    quality?: number;
    maxWidth?: number;
    maxHeight?: number;
    format?: string;
  }
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }
    
    img.onload = () => {
      // Calculate new dimensions
      const { maxWidth = 2048, maxHeight = 2048 } = options;
      let { width, height } = img;
      
      // Scale up the image (upscaling)
      const scale = Math.min(maxWidth / width, maxHeight / height);
      if (scale > 1) {
        width *= scale;
        height *= scale;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Use image smoothing for better quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // Draw the image
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to blob
      canvas.toBlob(
        (processedBlob) => {
          if (processedBlob) {
            resolve(processedBlob);
          } else {
            reject(new Error('Failed to process image'));
          }
        },
        options.format === 'png' ? 'image/png' : 'image/jpeg',
        options.quality || 0.95
      );
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(blob);
  });
};
