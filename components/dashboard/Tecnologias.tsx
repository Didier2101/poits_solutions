"use client";

import { Tecnologia } from "@/data/tecnologiasData";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


type TecnologiasProps = {
    tecnologias: Tecnologia[];
};

export default function Tecnologias({ tecnologias }: TecnologiasProps) {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-white py-20 px-4">
                <div className="container mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    {/* Texto de presentación */}
                    <div className="lg:w-full">
                        <motion.h2
                            className="text-3xl lg:text-4xl font-extrabold text-center text-teal-900"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Tecnologías que usaremos en tu proyecto
                        </motion.h2>
                        <motion.p
                            className="mt-6 text-lg lg:text-xl text-center text-teal-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Conoce las herramientas y tecnologías que utilizarás para llevar a cabo tu proyecto de manera eficiente.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Tecnologías */}
            {tecnologias.map((tecnologia) => (
                <div key={tecnologia.id} className="p-6">
                    <motion.div
                        className="px-4 flex flex-col items-center container py-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        {/* Descripción de la categoría */}
                        <h3 className="text-xl font-bold text-gray-700 text-center">
                            {tecnologia.categoria}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2 text-center">{tecnologia.descripcion}</p>

                        {/* Herramientas */}
                        <ol className="list-none text-gray-700 space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-8">
                            {tecnologia.herramientas.map((herramienta) => (
                                <motion.li
                                    key={herramienta.nombre}
                                    className="flex items-center bg-white drop-shadow-lg rounded-md p-4 space-x-4 sm:p-6 md:space-x-6 md:items-start"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Image
                                        width={50}
                                        height={50}
                                        priority
                                        src={herramienta.logo}
                                        alt={herramienta.nombre}
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                                            {herramienta.nombre}
                                        </span>
                                        <span className="text-sm sm:text-base text-gray-600 mt-1">
                                            {herramienta.descripcion}
                                        </span>
                                    </div>
                                </motion.li>
                            ))}
                        </ol>
                    </motion.div>
                </div>
            ))}

            {/* Llamado a la acción */}
            <section className="py-16 bg-gray-50 text-center">
                <motion.h2
                    className="text-3xl lg:text-4xl font-bold text-teal-900"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    ¿Listo para llevar tu proyecto al siguiente nivel?
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg text-teal-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Contáctanos para obtener más información sobre cómo estas tecnologías pueden transformar tu proyecto.
                </motion.p>
                <Link
                    href="/contacto"
                    className="mt-8 inline-block px-8 py-4 bg-teal-700 text-gray-100 font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
                >
                    Escríbenos hoy mismo
                </Link>
            </section>
        </>
    );
}
