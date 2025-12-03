import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Columna 1 */}
        <div>
          <h3 className="text-xl font-semibold text-white">Boli Diviértete</h3>
          <p className="text-sm mt-3">
            Alquiler de boliranas, rana, mini tejo y juegos tradicionales.
            Servicio a domicilio en Bogotá y municipios cercanos.
          </p>

          <p className="mt-4 text-sm">
            📍 Punto físico:  
            <br />
            <span className="font-medium">Bar Boli Diviértete</span>  
            <br /> Dirección pendiente
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="/catalogo" className="hover:text-white transition">Catálogo</Link></li>
            <li><Link href="/reservas" className="hover:text-white transition">Reservas</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terminos" className="hover:text-white transition">Términos y condiciones</Link></li>
            <li><Link href="/privacidad" className="hover:text-white transition">Política de privacidad</Link></li>
            <li><Link href="/preguntas" className="hover:text-white transition">Preguntas frecuentes</Link></li>
          </ul>
        </div>

        {/* Columna 4 - Redes y contacto */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Síguenos</h4>

          <div className="flex items-center space-x-4">
            {/* WhatsApp */}
            <Link
              href="https://wa.me/573118417533"
              target="_blank"
              className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25a8.26 8.26 0 01-4.067-1.08L3.75 21l1.094-4.356A8.218 8.218 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25S20.25 7.444 20.25 12z"
                />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="https://web.facebook.com/boli.diviertete?mibextid=wwXIfr&rdid=IZDOLRyZCMzXn2Xw&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1HWU3NXZZC%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
              aria-label="Facebook"
              target="_blanck"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.88v-6.99H8.05v-2.89h2.39V9.41c0-2.37 1.42-3.68 3.6-3.68 1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.19 0-1.56.74-1.56 1.5v1.8h2.65l-.42 2.89h-2.23v6.99c4.77-.75 8.44-4.88 8.44-9.88z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/boli_diviertete_/?igsh=MXNidzQ4aHBqem45eA%3D%3D&utm_source=qr#"
              className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition"
              aria-label="Instagram"
              target="_blanck"
            >
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6.5-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
              </svg>
            </Link>
            {/* TikTok */}
    <Link
      href="https://www.tiktok.com/@club.boli.pola?_r=1&_t=ZS-91ruQPdgWOn"
      className="p-2 bg-black rounded-full hover:bg-gray-800 transition"
      aria-label="TikTok"
      target="_blanck"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
        viewBox="0 0 24 24" className="w-6 h-6 text-white">
        <path d="M21 8.13a5.51 5.51 0 01-3.29-1.1 5.64 5.64 0 01-1.22-1.36v9.07a5.43 5.43 0 11-5.43-5.43 5.58 5.58 0 011.63.24v2.28a3.19 3.19 0 10.88 2.23V2h2.3a5.54 5.54 0 005.13 3.49z"/>
      </svg>
    </Link>
          </div>

          <p className="text-sm mt-4">
            Escríbenos para reservas y más información.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Boli Diviértete — Todos los derechos reservados.
      </div>
    </footer>
  );
}
