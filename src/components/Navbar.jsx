import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import '../index.css';

export default function Navbar() { 
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <a href="#home">
                            <img 
                                src="/logo.png" 
                                alt="KyM AsesCont" 
                                className="w-6 h-6 sm:w-8 sm:h-8"
                            />
                        </a>
                        <a
                            href="#home" 
                            className="text-lg sm:text-xl md:text-2xl font-medium">
                                <span className="text-white">Asescont</span>
                                <span className="text-blue-400">MyS</span>
                        </a>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#featuresection" className="text-gray-300 hover:text-white text-sm lg:text-base" >
                            Servicios
                        </a>
                        <a href="#contactus" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            Contactanos
                        </a>
                        <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            Testimonios
                        </a>
                    </div>
                    <button 
                        className='md:hidden p-2 text-gray-300 hover:text-white' 
                        onClick={() => setMobileMenuIsOpen( 
                            (prev) => !prev
                        )}
                        >
                        {mobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:h-6 sm:w-6"/>
                        ):(
                            <Menu className="w-5 h-5 sm:h-6 sm:w-6"/>
                        )}
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen &&
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top animate-in duration-300">
                    <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
                        <a 
                            href="#home" 
                            className="block text-gray-300 hover:text-white text-sm lg:text-base" 
                            onClick={() => setMobileMenuIsOpen(false)}>
                            Inicio
                        </a>
                        <a 
                            href="#featuresection" 
                            className="block text-gray-300 hover:text-white text-sm lg:text-base" 
                            onClick={() => setMobileMenuIsOpen(false)}>
                            Servicios
                        </a>
                        <a 
                            href="#contactus" 
                            className="block text-gray-300 hover:text-white text-sm lg:text-base" 
                            onClick={() => setMobileMenuIsOpen(false)}>
                            Contactanos
                        </a>
                        <a 
                            href="#testimonials" 
                            className="block text-gray-300 hover:text-white text-sm lg:text-base" 
                            onClick={() => setMobileMenuIsOpen(false)}>
                            Testimonios
                        </a>
                    </div>
                </div>
            }
        </nav>
    )
}