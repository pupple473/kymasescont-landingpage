import { Linkedin, Instagram, MessageCircleMore } from "lucide-react";
import EmailButton from "../components/EmailButton.jsx";

const footerLinks = {
  Secciones: ["Inicio", "Servicios", "Contacto", "Clientes", "Nosotros"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 sm:mb-12">
          {/* Izquierda: Logo + descripción */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-5">
              <img
                src="/logo.png"
                alt="KyMAsescont Logo"
                className="w-9 h-9 sm:w-10 sm:h-10"
              />
              <span className="text-xl sm:text-2xl font-bold">
                <span className="text-white">KyM</span>
                <span className="text-blue-400">Asescont</span>
              </span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              Realizamos auditorías internas y externas, manejamos nómina y declaraciones, constituimos sociedades y gestionamos procesos contables y tributarios con enfoque confiable y moderno.
            </p>
          </div>

          {/* Derecha: Secciones + debajo los botones de contacto */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-end">
            {/* Secciones */}
            <div className="w-full mb-6 lg:mb-8">
              <h3 className="font-semibold text-white mb-4 text-base sm:text-lg text-center lg:text-right">
                Secciones
              </h3>
              <ul className="flex flex-wrap justify-center lg:justify-end gap-x-6 sm:gap-x-8 gap-y-3 text-gray-400">
                {footerLinks.Secciones.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botones de contacto - debajo de secciones, alineados a la derecha en desktop */}
            <div>
                <h3 className="font-semibold text-white mb-4 text-base sm:text-lg text-center lg:text-right">
                    Contacto
                </h3>
            </div>
            <div className="flex justify-center lg:justify-end gap-4 sm:gap-5">
                <a
                    href="https://www.instagram.com/asescontmys.ec?igsh=MXEwdXR4eGN4MTV3bQ=="
                    target="_blank"                    // ← abre en nueva pestaña
                    rel="noopener noreferrer"          // ← seguridad recomendada
                    className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                    aria-label="Instagram"
                >
                    <Instagram className="w-6 h-6" />
                </a>
                <a
                    href="https://wa.me/593998893228?text=Hola!%20Estoy%20interesado%20en%20contratar%20tus%20servicios..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                    aria-label="WhatsApp"
                >
                    <MessageCircleMore className="w-6 h-6" />  {/* o usa el ícono de WhatsApp si tienes uno */}
                </a>
                <EmailButton
                    email="asescontms@gmail.com"
                    subject="Consulta desde el sitio web"
                    body="Hola equipo!%0D%0AEstoy interesado en saber más sobre sus servicios...%0D%0ASaludos,"
                    className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                    iconClassName="w-6 h-6"
                    aria-label="Email"
                />
            </div>
          </div>
        </div>

        {/* Copyright centrado */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 ASESCONT M&S ASESMENSE S.A.S. Todos los Derechos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}