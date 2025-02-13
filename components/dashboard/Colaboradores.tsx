"use client";
import { motion } from "framer-motion";
import { colaboradores } from "@/data/colaboradoresData"; // Ruta al archivo de datos
import { ColaboradorCard } from "./cards/ColaboradorCard";
import Link from "next/link";

export default function Colaboradores() {
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
                            <span className="block text-teal-900">Nuestro equipo</span>
                            <span className="block text-teal-300">Expertos a tu servicio</span>
                        </motion.h1>
                        <motion.p
                            className="mt-6 text-lg lg:text-xl text-teal-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Somos un grupo de profesionales dedicados a ofrecer soluciones digitales innovadoras para impulsar el éxito de tu negocio.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <Link
                                href="/contacto"
                                className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-teal-500 rounded-md text-lg font-medium shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105"
                            >
                                Contáctanos
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lista de colaboradores */}
            <motion.section
                className="py-16 bg-gray-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center text-teal-900 mb-8">
                    Conoce a nuestro equipo
                </h2>
                <motion.div
                    className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {colaboradores.map((colaborador) => (
                        <motion.div
                            key={colaborador.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <ColaboradorCard colaborador={colaborador} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </>
    );
}
