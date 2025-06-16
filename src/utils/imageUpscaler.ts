
import { processImage } from './imageProcessor';

export const upscaleImage = async (imagePath: string): Promise<string> => {
  try {
    console.log('Starting image upscale process for:', imagePath);
    
    // Fetch the original image
    const response = await fetch(imagePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    console.log('Original image loaded, size:', blob.size);
    
    // Process the image with upscaling
    const processedBlob = await processImage(blob, {
      quality: 0.95,
      maxWidth: 2048,
      maxHeight: 2048,
      format: 'png'
    });
    
    console.log('Image upscaled, new size:', processedBlob.size);
    
    // Create a new blob URL for the processed image
    const upscaledImageUrl = URL.createObjectURL(processedBlob);
    return upscaledImageUrl;
    
  } catch (error) {
    console.error('Error upscaling image:', error);
    throw error;
  }
};
