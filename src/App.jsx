import React from 'react';

export default function App() {
  const phone = '075 783 8318';
  const tel = '+94757838318';
  const whatsapp = '94757838318';

  const areas = [
    'Gonapola', 'Kahapola', 'Piliyandala', 'Polgasowita', 'Boralesgamuwa',
    'Halpita', 'Kesbewa', 'Madapatha', 'Kudamaduwa', 'Mampe North',
    'Makandana East', 'Batuwandara South'
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[760px] overflow-hidden text-white">
        <div className="absolute inset-0 bg-slate-900">
          <img
            className="hero-main-image"
            src="/um-transport-hero.png"
            alt="UM Transport Dimo Batta lorry unloading boxes in Sri Lanka"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>

        <style>{`
          .hero-main-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            animation: heroZoom 14s ease-in-out infinite alternate;
          }

          @keyframes heroZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
          }
        `}</style>

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-6xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-4 rounded-3xl bg-white/95 p-3 pr-6 shadow-2xl">
              <img
                src="/logo.png"
                alt="UM Transport Logo"
                className="h-20 w-28 rounded-2xl object-contain bg-white p-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">UM Transport</p>
                <p className="text-sm font-semibold text-slate-700">Mini Truck Transport Service</p>
              </div>
            </div>

            <p className="inline-block rounded-full border border-cyan-300/40 bg-cyan-400/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-cyan-200">
              Demo Batta Lorry Service
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Reliable, Fast & <span className="text-cyan-300">Safe</span> Transportation
            </h1>
            <p className="mt-6 text-2xl font-bold text-white">
              UM Transport | <span className="text-red-300">Small Truck, Big Service.</span>
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Household moving, office relocations, and commercial goods delivery with a well-maintained mini-truck and careful handling.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={`https://wa.me/${whatsapp}`} className="rounded-2xl bg-cyan-400 px-8 py-4 text-center text-lg font-extrabold text-slate-950 shadow-xl shadow-cyan-900/30 transition hover:-translate-y-1 hover:bg-cyan-300">
                Book Your Transport
              </a>
              <a href={`tel:${tel}`} className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-center text-lg font-bold text-white backdrop-blur transition hover:bg-white/20">
                Call {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">Our Services</h2>
          <p className="mt-4 text-lg text-slate-600">Reliable mini-truck service for homes, offices, and businesses.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">
            <div className="text-4xl">🏠</div>
            <h3 className="mt-4 text-xl font-bold">Household Moving</h3>
            <p className="mt-3 text-slate-600">Careful transport for household items, furniture, and personal goods.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">
            <div className="text-4xl">🏢</div>
            <h3 className="mt-4 text-xl font-bold">Office Relocations</h3>
            <p className="mt-3 text-slate-600">Mini-truck support for office items, files, chairs, tables, and equipment.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">
            <div className="text-4xl">📦</div>
            <h3 className="mt-4 text-xl font-bold">Commercial Goods Delivery</h3>
            <p className="mt-3 text-slate-600">Affordable delivery for shops, small businesses, and customer orders.</p>
          </div>
        </div>
      </section>

      {/* Service Areas + Contact */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-extrabold">Service Areas</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {areas.map((area) => (
                  <div key={area} className="rounded-xl bg-slate-50 px-4 py-3 font-medium text-slate-700">
                    {area}, Sri Lanka
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-extrabold">Contact UM Transport</h2>
              <div className="mt-6 space-y-4 text-lg">
                <p><b>Phone:</b> {phone}</p>
                <p><b>WhatsApp:</b> {phone}</p>
                <p><b>Hours:</b> Monday to Sunday, 09:00 – 20:00</p>
                <p><b>Vehicle:</b> Mini-truck / Batta lorry</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${tel}`} className="rounded-xl bg-slate-950 px-6 py-4 text-center font-bold text-white hover:bg-slate-800">Call Now</a>
                <a href={`https://wa.me/${whatsapp}`} className="rounded-xl bg-red-600 px-6 py-4 text-center font-bold text-white hover:bg-red-500">WhatsApp Booking</a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="p-8">
              <h2 className="text-3xl font-extrabold">Find Us on Google Map</h2>
              <p className="mt-3 text-slate-600">Serving Piliyandala, Polgasowita, Kesbewa, Gonapola and surrounding areas.</p>
            </div>
            <iframe
              title="UM Transport Service Area Map"
              src="https://maps.google.com/maps?q=Piliyandala,%20Sri%20Lanka&z=12&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Piliyandala%2C%20Sri%20Lanka"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-xl bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800"
              >
                Open Location in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold">Need transport today?</h2>
        <p className="mt-4 text-lg text-slate-600">
          Call UM Transport for safe, punctual, and affordable mini-truck transport service.
        </p>
        <a href={`tel:${tel}`} className="mt-8 inline-block rounded-2xl bg-red-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-red-500">
          Call {phone}
        </a>
      </section>

      {/* Floating Call Button */}
      <a
        href={`tel:${tel}`}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-white shadow-2xl shadow-red-900/40 transition hover:scale-110 hover:bg-red-500"
        aria-label="Call UM Transport"
      >
        📞
      </a>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 UM Transport. Small Truck, Big Service.<br />
        Powered by <a href="https://wa.me/94740992848" className="text-red-600 font-semibold hover:underline">AIM Digital</a>
      </footer>
    </main>
  );
}
