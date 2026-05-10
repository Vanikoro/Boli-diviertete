"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              BOLI-<span className="text-boli-blue">DIVIÉRTETE</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Llevamos la tradición y la diversión a tus eventos. Expertos en
              alquiler de juegos para Bogotá y la Sabana.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/boli_diviertete_/?igsh=MXNidzQ4aHBqem45eA%3D%3D&utm_source=qr#" target="_blank" className="hover:text-boli-blue transition-colors">
                <FaInstagram size={40} />
              </a>
              <a href="https://web.facebook.com/boli.diviertete?mibextid=wwXIfr&rdid=IZDOLRyZCMzXn2Xw&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1HWU3NXZZC%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#" target="_blank" className="hover:text-boli-blue transition-colors">
                <FaFacebook size={40} />
              </a>
              <a href="https://www.tiktok.com/@club.boli.pola?_r=1&_t=ZS-91ruQPdgWOn" target="_blank" className="hover:text-boli-blue transition-colors">
                <FaTiktok size={40} />
              </a>
              <a href="https://wa.me/573118417533" target="_blank" className="hover:text-boli-blue transition-colors">
                <FaWhatsapp size={40} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#catalogo"
                  className="hover:text-white transition-colors"
                >
                  Alquiler de Boliranas
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="hover:text-white transition-colors"
                >
                  Juegos de Rana
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="hover:text-white transition-colors"
                >
                  Mini Tejo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Eventos Empresariales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-boli-blue shrink-0" />
                <span>Carrera 77L bis #48B 17 sur, Bogotá</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-boli-blue shrink-0" />
                <span>+57 3118417533</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-boli-blue shrink-0" />
                <span>boli.diviertete@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Horario de Recogida
            </h4>
            <p className="text-sm">Lunes a Domingo</p>
            <p className="text-lg font-semibold text-white">
              7:30 AM — 7:00 PM
            </p>
            <p className="text-xs mt-2 text-slate-500">
              *Sujeto a disponibilidad del servicio.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Boli-Diviértete. Todos los derechos reservados.</p>

          <div className="flex gap-6 uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Tratamiento de Datos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
