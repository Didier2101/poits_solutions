"use client";
import { motion } from "framer-motion";
import Mision from "./Mision";
import Vision from "./Vision";
import Image from "next/image";

// Definición de la interfaz
type Valor = {
    id: number;
    icon: string;
    title: string;
    description: string;
};

const valores: Valor[] = [
    { id: 1, icon: "📊", title: "Experiencia", description: "Experiencia en desarrollo y gestión de proyectos." },
    { id: 2, icon: "💡", title: "Creatividad", description: "Enfoque creativo para resolver problemas complejos." },
    { id: 3, icon: "🎯", title: "Innovación", description: "Innovación constante en soluciones tecnológicas." },
    { id: 4, icon: "💼", title: "Compromiso", description: "Compromiso total con los proyectos y objetivos." },
    { id: 5, icon: "🏆", title: "Calidad", description: "Enfoque en la calidad en todos los aspectos del trabajo." },
    { id: 6, icon: "⚖️", title: "Responsabilidad", description: "Responsabilidad en cada tarea y decisión tomada." },
    { id: 7, icon: "🤝", title: "Trabajo en equipo", description: "Trabajo colaborativo para lograr objetivos comunes." },
];

export default function Nosotros() {



    return (
        <>
            {/* Hero Section */}
            <section className="bg-white py-20 px-4">
                <div className="container mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    {/* Texto de presentación */}
                    <div className="lg:w-1/2">
                        <motion.h1
                            className="text-4xl lg:text-5xl font-extrabold leading-tight text-center lg:text-left"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="block text-teal-900">Sobre Nosotros</span>
                            <span className="block text-teal-600">Transformando ideas en soluciones</span>
                        </motion.h1>

                        <motion.p
                            className="mt-4 text-lg text-teal-700 text-center lg:text-left"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            En <strong>Points Solutions and Digital Transformation SAS</strong>, estamos comprometidos con la creación de soluciones tecnológicas que impulsen el crecimiento y la eficiencia de nuestros clientes.
                        </motion.p>
                    </div>

                    {/* Imagen */}
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative lg:w-1/2 h-[400px] lg:h-[400px]"
                    >
                        <Image
                            alt="imagen de servicios"
                            src="/iconos/hero-contacto.svg"
                            fill
                            priority
                        />

                    </motion.div>

                </div>
            </section>

            {/* Misión y Visión Section */}
            <section className="px-4 py-14 container">
                <motion.h2
                    className="title-section text-center mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Misión y Visión
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <Mision />
                    <Vision />
                </motion.div>
            </section>

            {/* Valores Section */}
            <section className="bg-white py-20 px-4">
                <motion.h2
                    className="title-section text-center mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Nuestros Valores
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 container mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {valores.map((valor) => (
                        <div
                            key={valor.id}
                            className="flex flex-col items-center justify-center bg-gray-50 shadow-lg rounded-lg p-6 text-center"
                        >
                            <span className="text-4xl text-blue-600 mb-4">{valor.icon}</span>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">{valor.title}</h3>
                            <p className="text-gray-700 text-sm">{valor.description}</p>
                        </div>
                    ))}
                </motion.div>
            </section>
        </>
    );
}
