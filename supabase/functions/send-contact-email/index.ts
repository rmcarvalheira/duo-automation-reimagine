
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  segmento?: string;
  interesse?: string;
  message: string;
  formType: 'contact' | 'footer';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, segmento, interesse, message, formType }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { name, email, formType });

    // Create email content based on form type
    let subject = "";
    let htmlContent = "";

    if (formType === 'contact') {
      subject = `Contato do site - ${interesse || 'Geral'}`;
      htmlContent = `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        ${segmento ? `<p><strong>Segmento:</strong> ${segmento}</p>` : ''}
        ${interesse ? `<p><strong>Interesse:</strong> ${interesse}</p>` : ''}
        <h3>Mensagem:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    } else {
      subject = `Contato do footer - ${segmento || 'Geral'}`;
      htmlContent = `
        <h2>Nova mensagem do formulário do footer</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${segmento ? `<p><strong>Segmento:</strong> ${segmento}</p>` : ''}
        <h3>Mensagem:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Site Duo Automation <onboarding@resend.dev>",
      to: ["contato@duo.com.br"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email enviado com sucesso!" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Erro ao enviar email. Tente novamente." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
