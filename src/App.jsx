import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('id');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const toggleLang = () => setLang((l) => (l === 'id' ? 'en' : 'id'));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <Sections lang={lang} />
      </main>
      <Footer lang={lang} />

      {/* floating CTA */}
      <a href="#contact" className="fixed bottom-6 right-6 inline-flex items-center justify-center rounded-full bg-[#0077b6] text-white shadow-lg hover:shadow-xl w-14 h-14">
        <span className="sr-only">Contact</span>
        ✉️
      </a>
    </div>
  );
}
