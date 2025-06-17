
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const { t } = useLanguage();

  // Get product image based on productId
  const getProductImage = () => {
    switch (productId) {
      case 'robo-slim':
        return '/lovable-uploads/37d70281-7c79-4b39-a5c7-3ff018f6c0c1.png';
      case 'robo-eva':
        return '/lovable-uploads/79924496-c228-4b3e-9a6e-3cd2d97ee48a.png';
      case 'duo-connect':
        return '/lovable-uploads/f587cc4f-5b62-462f-9ebb-bfb99a0b8ee6.png';
      case 'robo-picker':
        return '/lovable-uploads/c45da574-cf7d-4bda-ae96-35e63d3e273f.png';
      default:
        return '';
    }
  };

  // Handle PDF download for products that have them
  const handleDownload = () => {
    if (productId === 'robo-slim') {
      const link = document.createElement('a');
      link.href = 'https://uaapedxgvyucrhppeeiv.supabase.co/storage/v1/object/public/videos//catalogo%20slim.pdf';
      link.download = 'catalogo-robo-slim.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (productId === 'duo-connect') {
      const link = document.createElement('a');
      link.href = 'https://uaapedxgvyucrhppeeiv.supabase.co/storage/v1/object/public/videos//catalogo%20connect.pdf';
      link.download = 'catalogo-duo-connect.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (productId === 'robo-picker') {
      const link = document.createElement('a');
      link.href = 'https://uaapedxgvyucrhppeeiv.supabase.co/storage/v1/object/public/videos//robo%20picker%20tec.pdf';
      link.download = 'robo-picker-especificacoes.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Get YouTube video ID based on product
  const getYouTubeVideoId = () => {
    if (productId === 'robo-picker') {
      return 'cJppywT27rs';
    } else if (productId === 'robo-slim') {
      return 'F8rTfknqCnk';
    }
    return null;
  };

  // Get product features array
  const getProductFeatures = () => {
    if (!productId) return [];
    
    const baseKey = `productDetails.${productId.replace('-', '')}`;
    const features = [];
    
    // Try to get features - different products have different numbers of features
    for (let i = 1; i <= 8; i++) {
      const featureKey = `${baseKey}.feature${i}`;
      const feature = t(featureKey);
      if (feature && feature !== featureKey) {
        features.push(feature);
      }
    }
    
    return features;
  };

  // Get product specifications
  const getProductSpecs = () => {
    if (!productId) return [];
    
    const baseKey = `productDetails.${productId.replace('-', '')}.specs`;
    try {
      return [
        { name: t(`${baseKey}.spec1Name`), value: t(`${baseKey}.spec1Value`) },
        { name: t(`${baseKey}.spec2Name`), value: t(`${baseKey}.spec2Value`) },
        { name: t(`${baseKey}.spec3Name`), value: t(`${baseKey}.spec3Value`) },
        { name: t(`${baseKey}.spec4Name`), value: t(`${baseKey}.spec4Value`) },
        { name: t(`${baseKey}.spec5Name`), value: t(`${baseKey}.spec5Value`) },
        { name: t(`${baseKey}.spec6Name`), value: t(`${baseKey}.spec6Value`) }
      ].filter(spec => spec.name && spec.value && !spec.name.includes('.') && !spec.value.includes('.'));
    } catch {
      return [];
    }
  };

  const youtubeVideoId = getYouTubeVideoId();
  const productImage = getProductImage();
  const productFeatures = getProductFeatures();
  const productSpecs = getProductSpecs();

  // Check if product exists
  const validProducts = ['robo-slim', 'robo-eva', 'duo-connect', 'robo-picker'];
  if (!productId || !validProducts.includes(productId)) {
    return (
      <div className="pt-24 section-padding">
        <div className="container">
          <h1 className="heading-lg text-duo-blue mb-6">{t('productDetail.productNotFound')}</h1>
          <p className="mb-4">{t('productDetail.productNotFoundText')}</p>
          <Button asChild variant="outline">
            <Link to="/produtos">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t('productDetail.backToProducts')}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const productKey = productId.replace('-', '');

  return (
    <main className="pt-24">
      {/* Product Header */}
      <section className="bg-duo-blue text-white py-12">
        <div className="container">
          <div className="flex items-center mb-8">
            <Link to="/produtos" className="flex items-center text-gray-300 hover:text-duo-yellow transition-colors">
              <ArrowLeft className="mr-1 h-4 w-4" /> {t('productDetail.backToProducts')}
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h1 className="heading-xl mb-3">{t(`productOverview.${productKey}.name`)}</h1>
              <p className="text-xl text-gray-300 mb-6">{t(`productDetails.${productKey}.tagline`)}</p>
              <p className="body-lg text-gray-300">{t(`productOverview.${productKey}.description`)}</p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="text-duo-blue font-bold bg-duo-yellow">
                  <Link to="/contato">{t('productDetail.requestQuote')}</Link>
                </Button>
                {(productId === 'robo-slim' || productId === 'duo-connect' || productId === 'robo-picker') ? (
                  <Button onClick={handleDownload} variant="outline" className="border-white hover:bg-white text-duo-blue font-bold">
                    <Download className="mr-2 h-4 w-4" /> {t('productDetail.downloadCatalog')}
                  </Button>
                ) : (
                  <Button variant="outline" className="border-white hover:bg-white text-duo-blue font-bold">
                    <Download className="mr-2 h-4 w-4" /> {t('productDetail.downloadCatalog')}
                  </Button>
                )}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img src={productImage} alt={t(`productOverview.${productKey}.name`)} className="w-full h-auto object-contain max-h-80" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md text-duo-blue mb-6">{t('productDetail.detailedDescription')}</h2>
              <p className="body-md text-gray-700 mb-8">{t(`productDetails.${productKey}.detailedDescription`)}</p>
              
              <h2 className="heading-md text-duo-blue mb-6">{t('productDetail.features')}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-duo-yellow text-xl mr-3 font-bold">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="heading-md text-duo-blue mb-6">{t('productDetail.demonstrationVideo')}</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                {youtubeVideoId ? (
                  <iframe
                    className="w-full h-full rounded-lg"
                    style={{ aspectRatio: '16/9', minHeight: '360px' }}
                    src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                    title={t('productDetail.demonstrationVideo')}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <p className="text-gray-500">{t('productDetail.soonRealVideo')}</p>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h2 className="heading-sm text-duo-blue mb-6">{t('productDetail.technicalSpecs')}</h2>
                <div className="space-y-4">
                  {productSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-700 font-medium">{spec.name}:</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  {(productId === 'robo-slim' || productId === 'duo-connect' || productId === 'robo-picker') ? (
                    <Button onClick={handleDownload} className="w-full bg-white text-duo-blue hover:bg-white/90 border-2 border-duo-blue font-bold">
                      <Download className="mr-2 h-4 w-4" /> {t('productDetail.downloadTechnicalSpecs')}
                    </Button>
                  ) : (
                    <Button className="w-full bg-white text-duo-blue hover:bg-white/90 border-2 border-duo-blue font-bold">
                      <Download className="mr-2 h-4 w-4" /> {t('productDetail.downloadTechnicalSpecs')}
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="mt-8 bg-duo-blue text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">{t('productDetail.needMoreInfo')}</h3>
                <p className="text-gray-300 mb-4">{t('productDetail.needMoreInfoText')}</p>
                <Button asChild className="w-full bg-white text-duo-blue hover:bg-white/90 font-bold">
                  <Link to="/contato">{t('productDetail.talkToSpecialist')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
