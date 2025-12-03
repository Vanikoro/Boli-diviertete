"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">

      <h1 className="text-4xl font-bold text-center mb-10">
        Contáctanos
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* FORMULARIO */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Envíanos un mensaje
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-900"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-900"
            />

            <input
              type="text"
              name="telefono"
              placeholder="Número de teléfono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-900"
            />

            <textarea
              name="mensaje"
              placeholder="Cuéntanos en qué podemos ayudarte..."
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-900"
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Enviar mensaje
            </button>

          </div>
        </div>

        {/* INFORMACIÓN */}
        <div className="flex flex-col justify-between">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Información del negocio
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              📍 Dirección: Calle 38 Sur #75A-22, Kennedy, Bogotá
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              📞 WhatsApp: <span className="font-semibold">+57 300 000 0000</span>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-5">
              ✉️ Correo: contacto@bolidiviertete.com
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://wa.me/573118417533" className="text-3xl text-green-600 hover:scale-110 transition"><FaWhatsapp /></a>
              <a href="https://web.facebook.com/boli.diviertete?mibextid=wwXIfr&rdid=IZDOLRyZCMzXn2Xw&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1HWU3NXZZC%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#" target="_blanck" className="text-3xl text-blue-600 hover:scale-110 transition"><FaFacebook /></a>
              <a href="https://www.instagram.com/boli_diviertete_/?igsh=MXNidzQ4aHBqem45eA%3D%3D&utm_source=qr#" target="_blanck" className="text-3xl text-pink-600 hover:scale-110 transition"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@club.boli.pola?_r=1&_t=ZS-91ruQPdgWOn" target="_blanck" className="text-3xl text-red-600 hover:scale-110 transition"><FaTiktok /></a>
            </div>
          </div>

          {/* MAPA */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Ubicación</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.67750655189!2d-74.1575!3d4.6123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9d0c9fa5aef7%3A0xf54f8d3cc5df2b09!2sKennedy%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v0000000000"
              width="100%"
              height="280"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
