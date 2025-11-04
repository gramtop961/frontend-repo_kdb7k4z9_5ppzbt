export default function Footer({ lang }) {
  const isID = lang === 'id';
  return (
    <footer className="relative mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(45deg, rgba(0,119,182,0.6) 1px, transparent 1px), linear-gradient(-45deg, rgba(0,119,182,0.6) 1px, transparent 1px)` ,
            backgroundSize: '20px 20px',
          }} />
          <div className="relative grid md:grid-cols-[1fr,2fr] gap-8 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow ring-1 ring-slate-200 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="SMP Islam Al Azhar 29" className="w-12 h-12 object-contain" onError={(e)=>{e.currentTarget.style.display='none';}} />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">SMP Islam Al Azhar 29</p>
                <p className="text-sm text-slate-600">Bekasi, Indonesia</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold text-slate-900 mb-2">{isID ? 'Navigasi' : 'Navigation'}</p>
                <ul className="space-y-1">
                  {['home','news','about','history','vision','org','downloads','contact'].map(id => (
                    <li key={id}><a href={`#${id}`} className="text-slate-600 hover:text-[#0077b6]">#{id}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-2">{isID ? 'Kontak' : 'Contact'}</p>
                <ul className="space-y-1 text-slate-600">
                  <li>info@alazhar29.sch.id</li>
                  <li>+62 812-3456-7890</li>
                  <li>Bekasi, Indonesia</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-2">{isID ? 'Jam Layanan' : 'Office Hours'}</p>
                <ul className="space-y-1 text-slate-600">
                  <li>{isID ? 'Senin–Jumat' : 'Monday–Friday'}: 07.00–15.00</li>
                  <li>{isID ? 'Sabtu' : 'Saturday'}: 08.00–12.00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative border-t border-slate-200 px-8 py-4 text-center text-sm text-slate-600">
            © {new Date().getFullYear()} SMP Islam Al Azhar 29 — {isID ? 'Seluruh hak cipta dilindungi.' : 'All rights reserved.'}
          </div>
        </div>
      </div>
    </footer>
  );
}
