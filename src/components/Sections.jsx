import { BookOpen, Landmark, Target, Users, Shield, Rocket, Newspaper, Download, MapPin, Phone, Mail, Send, Calendar } from 'lucide-react';

export default function Sections({ lang }) {
  const isID = lang === 'id';

  const timeline = [
    { year: '2005', id: 'Didirikan dan mulai operasional', en: 'Established and started operations' },
    { year: '2010', id: 'Pengembangan kurikulum teknologi', en: 'Integrated technology curriculum' },
    { year: '2016', id: 'Akreditasi A dan ekspansi fasilitas', en: 'Accredited A and facility expansion' },
    { year: '2022', id: 'Program unggulan digital & tahfidz', en: 'Flagship digital & tahfidz programs' },
  ];

  const visionPoints = [
    { icon: Target, id: 'Visi', en: 'Vision', descID: 'Mewujudkan generasi berkarakter Islami, berwawasan global, dan unggul dalam teknologi.', descEN: 'To nurture a generation with Islamic character, global mindset, and excellence in technology.' },
    { icon: Rocket, id: 'Misi', en: 'Mission', descID: 'Menanamkan akhlak mulia, literasi digital, berpikir kritis, dan kepemimpinan berdaya saing.', descEN: 'Instill noble character, digital literacy, critical thinking, and competitive leadership.' },
    { icon: Shield, id: 'Nilai', en: 'Values', descID: 'Integritas, Empati, Kolaborasi, Inovasi.', descEN: 'Integrity, Empathy, Collaboration, Innovation.' },
  ];

  const news = [
    { titleID: 'Juara Olimpiade Sains Nasional', titleEN: 'Champion at National Science Olympiad', img: 'https://images.unsplash.com/photo-1535540878298-a155c6f2c645?q=80&w=1600&auto=format&fit=crop' },
    { titleID: 'Pesantren Kilat Ramadhan 1447 H', titleEN: 'Ramadan Short Boarding 1447 H', img: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=1600&auto=format&fit=crop' },
    { titleID: 'Lulusan Diterima di Sekolah Favorit', titleEN: 'Graduates Accepted to Top Schools', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <div className="relative">
      {/* subtle pattern background */}
      <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #0b4a6b 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      <section id="about" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-[#0077b6] font-semibold">
              <Landmark /> {isID ? 'Tentang Kami' : 'About Us'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              SMP Islam Al Azhar 29
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {isID
                ? 'Kami berkomitmen menghadirkan pendidikan Islam yang modern, humanis, dan berorientasi masa depan. Kurikulum kami memadukan IPTEK, karakter, dan kreatifitas agar siswa siap menjadi pemimpin masa depan.'
                : 'We are committed to delivering modern, human-centered Islamic education focused on the future. Our curriculum blends science & technology, character, and creativity to prepare future leaders.'}
            </p>
            <div className="flex gap-3">
              <a href="#vision" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077b6] text-white font-semibold shadow hover:shadow-lg transition"><BookOpen size={18} /> {isID ? 'Visi & Misi' : 'Vision & Mission'}</a>
              <a href="#history" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow transition">{isID ? 'Sejarah' : 'History'}</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYW1wdXN8ZW58MHwwfHx8MTc2MjI0MzQ1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Campus" className="w-full h-72 object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-3xl bg-[#ffb703] opacity-70 blur-2xl" />
          </div>
        </div>
      </section>

      <section id="history" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-[#0077b6] font-semibold"><Calendar /> {isID ? 'Sejarah' : 'History'}</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{isID ? 'Perjalanan Kami' : 'Our Journey'}</h3>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-slate-200" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#ffb703] ring-4 ring-white" />
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-4 sm:p-5">
                  <p className="text-xs font-semibold text-[#0077b6]">{t.year}</p>
                  <p className="mt-1 text-slate-700">{isID ? t.id : t.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-[#0077b6] font-semibold"><Target /> {isID ? 'Visi & Misi' : 'Vision & Mission'}</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{isID ? 'Arah dan Nilai' : 'Direction and Values'}</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {visionPoints.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0077b6]/10 text-[#0077b6] flex items-center justify-center mb-4">
                <v.icon />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{isID ? v.id : v.en}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{isID ? v.descID : v.descEN}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="org" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-[#0077b6] font-semibold"><Users /> {isID ? 'Struktur Organisasi' : 'Organization Chart'}</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{isID ? 'Kepemimpinan & Tim' : 'Leadership & Team'}</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { roleID: 'Kepala Sekolah', roleEN: 'Principal', name: 'Drs. Ahmad S.' },
            { roleID: 'Wakil Kurikulum', roleEN: 'Vice Principal of Curriculum', name: 'Siti Nur' },
            { roleID: 'Wakil Kesiswaan', roleEN: 'Vice Principal of Student Affairs', name: 'Budi Hart' },
            { roleID: 'Koordinator Tahfidz', roleEN: 'Tahfidz Coordinator', name: 'Ust. Rafi' },
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0077b6]/20 to-[#ffb703]/20 flex items-center justify-center text-[#0077b6] font-bold text-lg">
                {p.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
              </div>
              <h4 className="mt-4 font-bold text-slate-900">{p.name}</h4>
              <p className="text-sm text-slate-600">{isID ? p.roleID : p.roleEN}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="news" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-[#0077b6] font-semibold"><Newspaper /> {isID ? 'Berita' : 'News'}</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{isID ? 'Kabar Terkini' : 'Latest Updates'}</h3>
          </div>
          <a href="#news" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 font-semibold hover:shadow">{isID ? 'Lainnya' : 'More'}</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <article key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={n.img} alt="News" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-slate-900 group-hover:text-[#0077b6] transition">{isID ? n.titleID : n.titleEN}</h4>
                <p className="text-xs text-slate-500 mt-1">{isID ? 'Dipublikasikan' : 'Published'} • 2025-01-10</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="downloads" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[#0077b6] font-semibold"><Download /> {isID ? 'Unduh' : 'Downloads'}</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">{isID ? 'Aplikasi & Dokumen' : 'Apps & Documents'}</h3>
            <p className="mt-3 text-slate-600">
              {isID ? 'Unduh Aplikasi E-Ujian serta panduan pendaftaran dan kurikulum terbaru.' : 'Download the E-Exam App plus registration guide and latest curriculum.'}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077b6] text-white font-semibold shadow hover:shadow-lg transition">
                <Download size={18} /> E-Ujian
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 font-semibold hover:shadow">
                <BookOpen size={18} /> {isID ? 'Panduan' : 'Guide'}
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1600&auto=format&fit=crop" alt="Downloads" className="w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      <section id="contact" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200">
            <span className="inline-flex items-center gap-2 text-[#0077b6] font-semibold"><Send /> {isID ? 'Kontak Kami' : 'Contact'}</span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 mt-1">{isID ? 'Hubungi dan Kunjungi Kami' : 'Get in Touch & Visit Us'}</h3>
            <div className="mt-4 space-y-3 text-slate-700">
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 text-[#0077b6]" /> Jl. Contoh Raya No. 29, Bekasi, Indonesia</p>
              <p className="flex items-center gap-3"><Phone className="text-[#0077b6]" /> +62 812-3456-7890</p>
              <p className="flex items-center gap-3"><Mail className="text-[#0077b6]" /> info@alazhar29.sch.id</p>
            </div>
            <div className="mt-5">
              <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1867229676575!2d106.977!3d-6.237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMTMuMiJTIDEwNsKwNTgnMzcuMiJF!5e0!3m2!1sen!2sid!4v1700000000000" width="100%" height="220" loading="lazy" className="rounded-xl border-0"></iframe>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-bold text-slate-900 mb-4">{isID ? 'Formulir Kontak' : 'Contact Form'}</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">{isID ? 'Nama' : 'Name'}</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0077b6] outline-none" placeholder={isID ? 'Nama Lengkap' : 'Full Name'} />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Email</label>
                <input required type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0077b6] outline-none" placeholder="name@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600 mb-1">{isID ? 'Pesan' : 'Message'}</label>
                <textarea required rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0077b6] outline-none" placeholder={isID ? 'Tulis pesan Anda...' : 'Write your message...'} />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffb703] text-slate-900 font-semibold shadow hover:shadow-lg transition">
              <Send size={18} /> {isID ? 'Kirim' : 'Send'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
