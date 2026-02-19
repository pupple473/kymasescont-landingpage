// VideoCarousel.jsx
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback, useRef } from 'react';

import hero1 from '../assets/video/hero1.mp4';
import hero2 from '../assets/video/hero2.mp4';
import hero3 from '../assets/video/hero3.mp4';

const videos = [
  { src: hero1, title: 'RIMPE', text: "Regimen Simplificado para Emprendedores y Negocios Populares" },
  { src: hero2, title: 'Consultoria', text: "Auditorias Externas. Asesoramiento Financiero" },
  { src: hero3, title: 'Tributacion inteligente', text: "Contador Online 24/7 y Presencial Previo Agenda" },
];

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const videoRefs = useRef([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === selectedIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [selectedIndex]);

  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div id='home' className="relative mx-auto w-full max-w-5xl lg:pt-20 pt-15">
      <div className="embla overflow-hidden shadow-2xl" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y">
          {videos.map((video, index) => (
            <div
              key={index}
              className="embla__slide min-w-0 flex-shrink-0 flex-grow-0 basis-full"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  className="h-full w-full object-cover"
                  muted={true}
                  autoPlay
                  playsInline
                  onEnded={() => emblaApi?.scrollNext()}
                />

                {/* Overlay con fondo oscuro semi-transparente + texto centrado */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6 sm:px-12">
                  {video.title && (
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6 drop-shadow-lg">
                      {video.title}
                    </h2>
                  )}
                  <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-md max-w-3xl">
                    {video.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación (sin cambios) */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition sm:left-8"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Anterior"
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition sm:right-8"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Siguiente"
      >
        →
      </button>

      {/* Indicadores (puntos) */}
      <div className="mt-4 flex justify-center gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === selectedIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}