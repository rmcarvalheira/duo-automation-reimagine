
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  segmento?: string;
  interesse?: string;
  message: string;
}

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitContactForm = async (data: ContactFormData, formType: 'contact' | 'footer' = 'contact') => {
    setIsLoading(true);
    
    try {
      console.log('Submitting contact form:', data);
      
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...data,
          formType
        }
      });

      if (error) {
        console.error('Error calling edge function:', error);
        throw error;
      }

      console.log('Email sent successfully:', response);
      
      toast({
        title: "Mensagem enviada!",
        description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.",
      });

      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });

      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitContactForm,
    isLoading
  };
};
