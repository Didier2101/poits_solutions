"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { clientes } from "@/data/clientesData";

export default function Clientes() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-white py-20 px-4">
                <div className="container mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    {/* Texto de presentación */}
                    <div className="lg:w-1/2">
                        <motion.h1
                            className="text-4xl lg:text-5xl font-extrabold leading-tight"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="block text-teal-900">Nuestros Clientes</span>
                            <span className="block text-teal-300">Líderes en sus Industrias</span>
                        </motion.h1>
                        <motion.p
                            className="mt-6 text-lg lg:text-xl text-teal-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Trabajamos con empresas que confían en nuestra experiencia para transformar sus ideas en soluciones reales.
                        </motion.p>
                    </div>

                    {/* Imagen relacionada con los clientes */}
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="h-96 w-full lg:w-[600px] relative"
                    >
                        <Image
                            src="/imagenes_colaboradores/persona.jpeg"
                            alt="Clientes satisfechos"
                            layout="fill"
                            className="object-cover object-top rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Grid de Clientes */}
            <section className="py-16 bg-gray-50 px-4">
                <div className="container mx-auto">
                    <motion.h2
                        className="text-3xl lg:text-4xl font-bold text-teal-900 text-center mb-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Empresas que Confían en Nosotros
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {clientes.map((cliente) => (
                            <motion.div
                                key={cliente.id}
                                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Logo del cliente */}
                                <div className="w-44 h-32 relative">
                                    <Image
                                        fill
                                        src={cliente.logo}
                                        alt={`Logo de ${cliente.nombre}`}
                                        className="object-contain mb-4"
                                    />
                                </div>
                                {/* Nombre del cliente */}
                                <h3 className="font-semibold text-lg text-gray-700">{cliente.nombre}</h3>
                                {/* Descripción */}
                                <p className="text-sm text-center text-gray-500">{cliente.descripcion}</p>
                                {/* Enlace para más detalles */}
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={cliente.url}
                                    className="mt-4 text-teal-600 hover:text-teal-800 font-semibold"
                                >
                                    Más información
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
