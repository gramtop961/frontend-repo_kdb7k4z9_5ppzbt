import { useState, useEffect } from 'react';
import { Menu, X, Download, Phone, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', idLabel: 'Beranda', enLabel: 'Home' },
  { id: 'news', idLabel: 'Berita', enLabel: 'News' },
  { id: 'about', idLabel: 'Tentang Kami', enLabel: 'About Us' },
  { id: 'history', idLabel: 'Sejarah', enLabel: 'History' },
  { id: 'vision', idLabel: 'Visi & Misi', enLabel: 'Vision & Mission' },
  { id: 'org', idLabel: 'Struktur Organisasi', enLabel: 'Organization Chart' },
  { id: 'downloads', idLabel: 'Unduh', enLabel: 'Downloads' },
  { id: 'contact', idLabel: 'Kontak Kami', enLabel: 'Contact' },
];

export default function Header({ lang, onToggleLang }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isID = lang === 'id';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/80 border-b border-slate-100">
      {/* Top banner */}
      <div className="w-full bg-[#0077b6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
          <p className="text-sm sm:text-base font-medium truncate">
            {isID ? 'Pendaftaran Peserta Didik Baru 2026/2027 • Daftar Sekarang!' : 'New Student Admission 2026/2027 • Register Now!'}
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#ffb703] text-slate-900 px-3 py-1.5 text-sm font-semibold shadow hover:shadow-md transition">
            <Download className="w-4 h-4" /> {isID ? 'Daftar' : 'Register'}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white shadow ring-1 ring-slate-200 flex items-center justify-center overflow-hidden">
              {/* Attempt to load logo; fallback to text */}
              <img src="/logo.png" alt="SMP Islam Al Azhar 29" className="w-9 h-9 object-contain" onError={(e)=>{e.currentTarget.style.display='none';}} />
              <span className="sr-only">SMP Islam Al Azhar 29</span>
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-slate-900 tracking-tight">SMP Islam Al Azhar 29</p>
              <p className="text-xs text-slate-500">Bekasi</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`} className="px-3 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#0077b6] hover:bg-slate-100 transition">
                {isID ? item.idLabel : item.enLabel}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={onToggleLang} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-[#0077b6] hover:text-[#0077b6] transition">
              {isID ? 'ID 🇮🇩' : 'EN 🇬🇧'}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0077b6] text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition">
              <Phone size={16} /> {isID ? 'Hubungi Kami' : 'Contact Us'}
            </a>
            <button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-3 grid gap-2">
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`} className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                {isID ? item.idLabel : item.enLabel}
              </a>
            ))}
            <div className="flex items-center gap-3 px-1 pt-1">
              <a href="mailto:info@alazhar29.sch.id" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 text-slate-700">
                <Mail size={16} /> info@alazhar29.sch.id
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0077b6] text-white">
                <Phone size={16} /> {isID ? 'Kontak' : 'Contact'}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
