"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import FormContacto from "./formularios/FormContacto";

export default function Contacto() {
    const phoneNumber = '573028645014';
    const initialMessage = '¡Hola! Quiero obtener más información sobre sus servicios.';
    const encodedMessage = encodeURIComponent(initialMessage);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <>
            {/* Hero Section */}
            <section className="bg-white py-20 px-4">
                <div className="container mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    {/* Texto de contacto */}
                    <div className="lg:w-1/2">
                        <motion.h1
                            className="text-4xl lg:text-5xl font-extrabold leading-tight"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="block text-teal-900">¿Tienes alguna pregunta?</span>
                            <span className="block text-teal-300">Estamos aquí para ayudarte</span>
                        </motion.h1>
                        <motion.p
                            className="mt-6 text-lg lg:text-xl text-teal-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Ponte en contacto con nuestro equipo y recibe la atención personalizada que necesitas.
                        </motion.p>

                        {/* Botón de WhatsApp */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <Link
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-green-500 rounded-md text-lg font-medium shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
                            >
                                <Image
                                    src="/iconos/whatsapp.svg"
                                    alt="WhatsApp Icon"
                                    width={28}
                                    height={28}
                                />
                                <span>Contáctanos por WhatsApp</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex items-center justify-start"
                    >
                        <FormContacto />
                    </motion.div>
                </div>
            </section>

            {/* Llamado a la acción */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto text-center text-teal-900">
                    <motion.h2
                        className="text-3xl lg:text-4xl font-bold"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        ¿Listo para comenzar?
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Estamos a un clic de distancia para ayudarte con tus necesidades.
                    </motion.p>
                    <Link
                        href="/contacto"
                        className="mt-8 inline-block px-8 py-4 bg-teal-700 text-gray-100 font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
                    >
                        Escríbenos ahora
                    </Link>
                </div>
            </section>
        </>
    );
}
