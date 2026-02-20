import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, phone: value || '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '1bce29b1-f926-4f15-8de6-c399ed702d9b');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('subject', 'Nuevo mensaje desde el sitio web - AsescontMyS');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const inputClasses = "w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <section 
      id="contactus" 
      className="relative py-16 sm:py-20 lg:py-24 bg-slate-950/50 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            ¿Tienes preguntas sobre nuestros servicios? Escríbenos y te responderemos a la brevedad posible.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className={labelClasses}>
                Nombre Completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className={labelClasses}>
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Phone Field with Country Selection */}
            <div className="mb-6">
              <label htmlFor="phone" className={labelClasses}>
                Teléfono
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <Phone className="h-5 w-5 text-gray-500" />
                </div>
                <PhoneInput
                  international
                  defaultCountry="EC"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="+593 999 999 999"
                  className="phone-input-custom"
                  style={{
                    '--PhoneInput-color--focus': '#3b82f6',
                    '--PhoneInput-background-color': '#0f172a',
                    '--PhoneInput-border-color': '#334155',
                    '--PhoneInput-color': '#ffffff',
                    '--PhoneInput-placeholder-color': '#6b7280',
                  }}
                />
              </div>
              <style>{`
                .phone-input-custom {
                  width: 100%;
                  background-color: #0f172a;
                  border: 1px solid #334155;
                  border-radius: 0.5rem;
                  padding-left: 2.75rem;
                }
                .phone-input-custom:hover {
                  border-color: #475569;
                }
                .phone-input-custom:focus-within {
                  border-color: #3b82f6;
                  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                }
                .phone-input-custom input {
                  background-color: transparent;
                  border: none;
                  color: white;
                  padding: 0.75rem 1rem;
                  width: 100%;
                  outline: none;
                }
                .phone-input-custom input::placeholder {
                  color: #6b7280;
                }
                .phone-input-custom .country-select {
                  background-color: transparent;
                  border: none;
                  padding-left: 0.5rem;
                }
                .phone-input-custom .country-select-button {
                  background-color: transparent;
                  border: none;
                  padding: 0.5rem;
                }
                .phone-input-custom .country-select-button:hover {
                  background-color: rgba(255, 255, 255, 0.1);
                  border-radius: 0.25rem;
                }
                .country-list {
                  background-color: #1e293b !important;
                  border: 1px solid #334155 !important;
                  color: white !important;
                }
                .country-list .country:hover {
                  background-color: #334155 !important;
                }
                .country-list .country-flag {
                  filter: grayscale(0);
                }
              `}</style>
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className={labelClasses}>
                Mensaje
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-500" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  rows="5"
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Enviar Mensaje
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center animate-in fade-in slide-in-from-bottom-2">
                ✓ Mensaje enviado exitosamente. Te contactaremos pronto.
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center animate-in fade-in slide-in-from-bottom-2">
                ✗ Error al enviar el mensaje. Por favor intenta nuevamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
