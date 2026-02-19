import '../index.css';
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function FloatingWhatsapp() { 
    return (
        <div className="whatsapp-custom-wrapper text-black">
            <FloatingWhatsApp
                phoneNumber="593998893228"  
                accountName="Asescont KyM"                  
                chatMessage="¡Hola! ¿En qué te puedo ayudar hoy?" 
                statusMessage="en linea"   
                placeholder="Escribe un mensaje..."        
                notification={true}                         
                allowEsc={true}                             
                className="z-50"  
                avatar="/logo.png"
            />
        </div>
    )
}