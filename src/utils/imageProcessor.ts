
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
