
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Play, Download, Copy } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Video {
  id: string;
  storage_path: string;
  original_name: string;
  file_size: number;
  mime_type: string;
  created_at: string;
  public_url?: string;
}

const VideoManager: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Use rpc or direct query to bypass type issues
      const { data, error } = await (supabase as any)
        .from('videos')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Get public URLs for each video
      const videosWithUrls = data?.map((video: any) => {
        const { data: { publicUrl } } = supabase.storage
          .from('videos')
          .getPublicUrl(video.storage_path);
        
        return { ...video, public_url: publicUrl };
      }) || [];

      setVideos(videosWithUrls);
    } catch (error) {
      console.error('Error loading videos:', error);
      toast({
        title: "Erro",
        description: "Falha ao carregar vídeos.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteVideo = async (video: Video) => {
    if (!confirm(`Tem certeza que deseja deletar "${video.original_name}"?`)) {
      return;
    }

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('videos')
        .remove([video.storage_path]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await (supabase as any)
        .from('videos')
        .delete()
        .eq('id', video.id);

      if (dbError) throw dbError;

      setVideos(prev => prev.filter(v => v.id !== video.id));
      
      toast({
        title: "Vídeo deletado",
        description: "O vídeo foi removido com sucesso.",
      });
    } catch (error) {
      console.error('Error deleting video:', error);
      toast({
        title: "Erro",
        description: "Falha ao deletar o vídeo.",
        variant: "destructive"
      });
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: "URL copiada",
      description: "A URL do vídeo foi copiada para a área de transferência.",
    });
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-duo-blue"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-duo-blue">Meus Vídeos</h2>
      
      {videos.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">Nenhum vídeo encontrado.</p>
            <p className="text-sm text-gray-400 mt-2">
              Faça upload de um vídeo para começar.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative bg-black">
                  <video
                    src={video.public_url}
                    className="w-full h-32 object-cover"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(video.public_url, '_blank')}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium text-sm mb-2 truncate" title={video.original_name}>
                  {video.original_name}
                </h3>
                <div className="text-xs text-gray-500 space-y-1 mb-3">
                  <p>Tamanho: {formatFileSize(video.file_size)}</p>
                  <p>Enviado: {new Date(video.created_at).toLocaleDateString('pt-BR')}</p>
                </div>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyUrl(video.public_url!)}
                    className="flex-1"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(video.public_url, '_blank')}
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteVideo(video)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoManager;
