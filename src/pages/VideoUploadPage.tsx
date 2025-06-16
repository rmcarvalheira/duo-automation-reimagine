
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VideoUpload from '@/components/VideoUpload';
import VideoManager from '@/components/VideoManager';

const VideoUploadPage = () => {
  const [refreshManager, setRefreshManager] = useState(0);

  const handleUploadComplete = () => {
    // Trigger refresh of video manager
    setRefreshManager(prev => prev + 1);
  };

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="heading-xl text-duo-blue mb-4">Gerenciar Vídeos</h1>
            <p className="body-lg text-gray-700">
              Faça upload e gerencie seus vídeos de forma fácil e segura.
            </p>
          </div>

          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="upload">Upload</TabsTrigger>
              <TabsTrigger value="manage">Gerenciar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="heading-md text-duo-blue mb-6 text-center">
                  Enviar Novo Vídeo
                </h2>
                <VideoUpload onUploadComplete={handleUploadComplete} />
              </div>
            </TabsContent>
            
            <TabsContent value="manage" className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <VideoManager key={refreshManager} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default VideoUploadPage;
