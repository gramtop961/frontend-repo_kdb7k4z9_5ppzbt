import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function Hero({ lang }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const go = (dir) => {
    setIndex((prev) => (prev + (dir === 'next' ? 1 : -1) + slides.length) % slides.length);
  };

  const isID = lang === 'id';

  return (
    <section id="home" className="relative">
      <div className="relative h-[72vh] sm:h-[80vh] overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0 flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s) => (
            <div key={s.id} className="min-w-full h-full">
              <img src={s.image} alt="School" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* gradient overlay with pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `linear-gradient(90deg, rgba(0,119,182,0.65) 0%, rgba(0,119,182,0.25) 50%, rgba(0,119,182,0.65) 100%),
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0 1px, transparent 1px)`,
          backgroundSize: 'auto, 24px 24px'
        }} />

        {/* content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl text-white">
              <p className="text-xs sm:text-sm uppercase tracking-widest/relaxed font-semibold text-[#ffb703]">{isID ? 'Sekolah Islam Modern' : 'Modern Islamic School'}</p>
              <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] drop-shadow">
                {isID ? 'Menginspirasi Masa Depan' : 'Inspiring the Future'}
              </h1>
              <p className="mt-4 text-white/90 text-base sm:text-lg">
                {isID
                  ? 'Sekolah yang memadukan nilai-nilai Islam, teknologi, dan kreativitas untuk membentuk generasi berakhlak dan berprestasi.'
                  : 'A school that blends Islamic values, technology, and creativity to shape excellent, ethical future leaders.'}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#ffb703] text-slate-900 font-semibold shadow-lg hover:shadow-xl transition">
                  {isID ? 'Daftar Sekarang' : 'Register Now'}
                </a>
                <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/15 ring-1 ring-white/40 text-white font-semibold backdrop-blur hover:bg-white/25 transition">
                  {isID ? 'Pelajari Lebih Lanjut' : 'Learn More'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* controls */}
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4 sm:px-6">
          <button aria-label="Previous" onClick={() => go('prev')} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow">
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <span key={s.id} className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-[#ffb703]' : 'w-2 bg-white/70'}`} />
            ))}
          </div>
          <button aria-label="Next" onClick={() => go('next')} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
