import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-7xl w-full mx-auto text-center space-y-12">
          <div className="space-y-8">
            <Image
              src="/rawdistrict_logo_white.svg"
              alt="Raw District"
              width={200}
              height={60}
              className="mx-auto"
              priority
            />
            <h1 className="text-balance">
              NO ES MODA.<br />ES CULTURA.
            </h1>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light opacity-90">
            Inspirada en el magnetismo y la fuerza del techno, Raw District es más que ropa.
            Es una declaración de identidad para quienes viven la música desde el underground.
          </p>

          <div className="pt-8">
            <Link
              href="#coleccion"
              className="inline-block bg-[#FF3B3B] text-[#E8E8E3] px-12 py-5 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
            >
              Explorar colección
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-widest opacity-40">
          <div className="flex items-center gap-3">
            <span>CHIHUAHUA</span>
            <span className="w-1 h-1 bg-[#E8E8E3] rounded-full"></span>
            <span>MEXICO</span>
            <span className="w-1 h-1 bg-[#E8E8E3] rounded-full"></span>
            <span>MMXXVI</span>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#2E2E35] max-w-7xl mx-auto" />

      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            <h2 className="text-center">Manifiesto</h2>

            <div className="grid md:grid-cols-2 gap-12 text-base md:text-lg leading-relaxed opacity-90">
              <div className="space-y-6">
                <p>
                  Nacida del pulso oscuro de Berlín y el alma industrial de Detroit,
                  Raw District celebra el origen de una revolución sonora que cambió el mundo.
                </p>
                <p>
                  El techno no es solo un género musical. Es un movimiento
                  de resistencia, creatividad y pura energía underground.
                </p>
              </div>

              <div className="space-y-6">
                <p>
                  Cada pieza es una oda a la cultura underground: DJs, productores, bailarines
                  y visionarios que construyeron algo desde cero.
                </p>
                <p>
                  Raw District es para quienes entienden que la música electrónica
                  no es un producto. Es una forma de vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#2E2E35] max-w-7xl mx-auto" />

      <section id="coleccion" className="py-32 px-6 md:px-12 lg:px-24 bg-[#1C1C21]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2>Colección</h2>
            <p className="text-sm tracking-widest mt-4 opacity-60">EDICIÓN LIMITADA</p>
          </div>

          <div className="max-w-4xl mx-auto text-center border border-[#2E2E35] bg-[#1C1C21] py-24 px-6 md:px-16">
            <div className="text-[#FF3B3B] text-sm tracking-[0.3em] font-semibold mb-8">
              EN DESARROLLO
            </div>
            <h3 className="text-3xl md:text-5xl font-medium text-[#E8E8E3] mb-8">
              Algo está tomando forma.
            </h3>
            <p className="text-lg md:text-xl text-[#E8E8E3] opacity-90 leading-relaxed font-light mx-auto max-w-2xl mb-12">
              Estamos trabajando en piezas que realmente encajen con la cultura de Raw District y con quienes la viven.
            </p>
            <div className="text-xs tracking-[0.2em] text-[#E8E8E3] opacity-40">
              TEMPORADA 01 — PRÓXIMAMENTE
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#2E2E35] max-w-7xl mx-auto" />

      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-8">Hecho para el artista.</h2>

              <div className="space-y-6 text-lg leading-relaxed opacity-90">
                <p>
                  Raw District es el uniforme del creador. Del DJ que cierra el after.
                  Del productor que trabaja hasta el amanecer. Del bailarín que siente
                  cada kick.
                </p>
                <p>
                  Ropa diseñada para quienes no siguen tendencias, sino que las crean
                  desde el underground.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#2E2E35]">
                <div className="grid grid-cols-2 gap-8 text-center max-w-md mx-auto lg:mx-0">
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-[#FF3B3B] mb-2">1988</div>
                    <div className="text-xs tracking-wider opacity-60">ORIGEN TECHNO</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-[#FF3B3B] mb-2">2026</div>
                    <div className="text-xs tracking-wider opacity-60">RAW DISTRICT</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-[#1C1C21] border border-[#2E2E35] relative overflow-hidden">
              <img
                src="https://res.cloudinary.com/dizorsslw/image/upload/v1775005541/obfpqpfciv34131w0evw.jpg"
                alt="RD Underground Culture"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#2E2E35] max-w-7xl mx-auto" />

      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#1C1C21]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">Trabaja con el distrito.</h2>
            <p className="text-xl tracking-wide opacity-80 mb-8">
              Diseñado para DJs, colectivos y artistas que entienden la cultura.
            </p>
            <div className="h-px bg-[#2E2E35] max-w-md mx-auto mb-8" />
            <p className="text-base opacity-70 leading-relaxed max-w-2xl mx-auto">
              Raw District desarrolla piezas seleccionadas y colaboraciones especiales
              para artistas, eventos y proyectos creativos que respiran underground.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="nombre" className="block text-xs tracking-widest uppercase opacity-60">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  className="w-full bg-transparent border border-[#2E2E35] px-6 py-4 text-[#E8E8E3] focus:border-[#FF3B3B] focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="nombreArtistico" className="block text-xs tracking-widest uppercase opacity-60">
                  Nombre artístico / Colectivo
                </label>
                <input
                  type="text"
                  id="nombreArtistico"
                  className="w-full bg-transparent border border-[#2E2E35] px-6 py-4 text-[#E8E8E3] focus:border-[#FF3B3B] focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs tracking-widest uppercase opacity-60">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-transparent border border-[#2E2E35] px-6 py-4 text-[#E8E8E3] focus:border-[#FF3B3B] focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tipoProyecto" className="block text-xs tracking-widest uppercase opacity-60">
                  Tipo de proyecto *
                </label>
                <select
                  id="tipoProyecto"
                  required
                  className="w-full bg-[#1C1C21] border border-[#2E2E35] px-6 py-4 text-[#E8E8E3] focus:border-[#FF3B3B] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Seleccionar...</option>
                  <option value="merch">Merch para DJ</option>
                  <option value="evento">Evento</option>
                  <option value="colaboracion">Colaboración creativa</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="block text-xs tracking-widest uppercase opacity-60">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  required
                  rows={6}
                  className="w-full bg-transparent border border-[#2E2E35] px-6 py-4 text-[#E8E8E3] focus:border-[#FF3B3B] focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full bg-[#FF3B3B] text-[#0B0B0D] px-12 py-5 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-opacity-90"
                >
                  Solicitar cotización
                </button>
              </div>

              <p className="text-xs tracking-wider opacity-40 text-center pt-4">
                Respuesta en 48-72 horas / Solo proyectos serios
              </p>
            </form>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#2E2E35] max-w-7xl mx-auto" />

      <section className="py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-12">Únete al distrito</h2>

          <p className="text-xl md:text-2xl leading-relaxed mb-16 opacity-90 max-w-2xl mx-auto">
            Sé parte de una comunidad que vive y respira cultura underground.
          </p>

          <Link
            href="#"
            className="inline-block bg-[#FF3B3B] text-[#E8E8E3] px-16 py-6 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
          >
            Unirse al distrito
          </Link>

          <div className="mt-20 pt-12 border-t border-[#2E2E35]">
            <div className="flex flex-wrap justify-center gap-8 text-xs tracking-widest opacity-40">
              <span>CHIHUAHUA</span>
              <span>•</span>
              <span>MEXICO</span>
              <span>•</span>
              <span>WORLDWIDE</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#000000] py-12 px-6 md:px-12 lg:px-24 bg-[#1C1C21]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <Image
                src="/rawdistrict_logo_white.svg"
                alt="Raw District"
                width={120}
                height={36}
              />
            </div>

            <div className="flex gap-8 text-xs tracking-widest opacity-60">
              <Link href="#" className="hover:text-[#FF3B3B] hover:opacity-100 transition-colors">
                INSTAGRAM
              </Link>
              <Link href="#" className="hover:text-[#FF3B3B] hover:opacity-100 transition-colors">
                CONTACTO
              </Link>
              <Link href="#" className="hover:text-[#FF3B3B] hover:opacity-100 transition-colors">
                TÉRMINOS
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center text-xs tracking-wider opacity-30">
            © 2026 RAW DISTRICT. UNDERGROUND CULTURE.
          </div>
        </div>
      </footer>
    </main>
  );
}
