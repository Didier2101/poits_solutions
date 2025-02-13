"use client"
import { motion } from "framer-motion"; // Asegúrate de importar useInView de framer-motion
import Link from "next/link";
import Image from "next/image";

import { Servicio } from "@/data/servicios";

type ServiciosProps = {
    servicios: Servicio[];
};
export default function Servicios({ servicios }: ServiciosProps) {


    return (
        <>
            {/* Animación inicial para todo el contenedor */}
            {/* Hero Section */}
            <section className=" bg-gray-50 py-20 px-4">
                <div className="container mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    {/* Texto de presentación */}
                    <div className="lg:w-1/2">
                        <motion.h1
                            className="text-4xl lg:text-5xl font-extrabold leading-tight text-center lg:text-left"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="block text-teal-900">Servicios innovadores</span>
                            <span className="block text-teal-500">que transforman tu negocio</span>
                        </motion.h1>

                        <motion.p
                            className="mt-4 text-lg text-teal-700 text-center lg:text-left"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Ofrecemos soluciones tecnológicas diseñadas para optimizar procesos,
                            mejorar la productividad y llevar tu empresa al siguiente nivel.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-6 flex justify-center lg:justify-start space-x-4"
                        >
                            <Link
                                href="#servicios"
                                className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300"
                            >
                                Ver servicios
                            </Link>
                            <Link
                                href="/contacto"
                                className="bg-gray-100 text-teal-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300"
                            >
                                Contáctanos
                            </Link>
                        </motion.div>
                    </div>


                    {/* Formulario */}

                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative lg:w-1/2 h-[400px] lg:h-[400px]"
                    >
                        <Image
                            alt="imagen de srvicios"
                            src="/iconos/hero-servicios.svg"
                            fill
                            priority
                        />

                    </motion.div>

                </div>
            </section>


            {/* Servicios Section */}
            <section className="bg-white py-20 container" id="servicios">
                {servicios.map((servicio, index) => (
                    <div
                        key={servicio.id}
                        className={`flex flex-col lg:flex-row items-center justify-center px-6 py-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                    >
                        {/* Imagen */}
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? 150 : -150 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className=" hidden lg:flex relative lg:w-1/2 h-[300px] lg:h-[300px] "
                        >
                            <Image
                                alt={`Imagen del servicio ${servicio.titulo}`}
                                src={servicio.imagen}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        {/* Texto */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="lg:w-1/2 lg:pl-12 text-center lg:text-left"
                        >
                            <h3 className="text-2xl font-bold text-teal-900">{servicio.titulo}</h3>
                            <p className="mt-4 text-lg text-teal-700 font-light">{servicio.descripcion}</p>
                            <Link
                                href="/contacto"
                                className="inline-block mt-6 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300"
                            >
                                Más información
                            </Link>
                        </motion.div>
                    </div>
                ))}
            </section>

        </>
    );
}
