"use client";

import { Colaborador } from "@/data/colaboradoresData";
import Image from "next/image";
import Link from "next/link";
import { FaBriefcase } from 'react-icons/fa'; // Iconos
import { motion } from "framer-motion";

type PerfilProps = {
    colaborador: Colaborador;
};

export default function Perfil({ colaborador }: PerfilProps) {
    return (
        <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
            <Link
                href="/colaboradores"
                className="mb-8 text-teal-600 hover:underline text-lg self-start"
            >
                ← Volver al equipo
            </Link>

            <motion.div
                className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl font-extrabold text-center text-teal-800 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Perfil de {colaborador.nombre}
                </motion.h1>

                <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
                    <motion.div
                        className="w-32 h-32 relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={colaborador.foto}
                            alt={`Foto de ${colaborador.nombre}`}
                            fill
                            priority
                            className="rounded-full object-cover object-top shadow-md"
                        />
                    </motion.div>
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-2xl font-semibold text-teal-900">
                            {colaborador.nombre}
                        </h2>
                        <p className="text-lg text-teal-600 flex items-center justify-center lg:justify-start gap-2">
                            <FaBriefcase /> {colaborador.cargo}
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-8 text-teal-800">
                    {/* Descripción */}
                    <motion.div
                        className="border-t border-gray-300 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2 mb-4">
                            📝 Descripción
                        </h3>
                        <p className="text-lg">{colaborador.descripcion}</p>
                    </motion.div>

                    {/* Experiencia */}
                    <motion.div
                        className="border-t border-gray-300 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2 mb-4">
                            💼 Experiencia
                        </h3>
                        <p className="text-lg">{colaborador.experiencia}</p>
                    </motion.div>

                    {/* Educación */}
                    <motion.div
                        className="border-t border-gray-300 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2 mb-4">
                            🎓 Educación
                        </h3>
                        <p className="text-lg">{colaborador.educacion}</p>
                    </motion.div>

                    {/* Certificaciones */}
                    <motion.div
                        className="border-t border-gray-300 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2 mb-4">
                            🏅 Certificaciones
                        </h3>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            {colaborador.certificaciones.map((certificacion) => (
                                <li key={certificacion}>{certificacion}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Logros */}
                    <motion.div
                        className="border-t border-gray-300 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2 mb-4">
                            🏆 Logros
                        </h3>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            {colaborador.logros.map((logro) => (
                                <li key={logro}>{logro}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Tecnologías */}
                    <motion.div
                        className="border-t border-gray-300 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2 mb-4">
                            ⚙️ Tecnologías
                        </h3>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            {colaborador.tecnologias.map((tecnologia) => (
                                <li key={tecnologia}>{tecnologia}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div
                        className="text-center mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <Link
                            href={colaborador.linkedin}
                            target="_blank"
                            className="text-teal-600 text-lg font-medium underline hover:text-teal-800 flex items-center justify-center gap-2"
                        >
                            <FaBriefcase /> Visita mi LinkedIn
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
