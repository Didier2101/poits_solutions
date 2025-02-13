import Link from 'next/link';
import { Colaborador } from '@/data/colaboradoresData'; // Ruta al archivo de datos
import Image from 'next/image';
import { motion } from 'framer-motion';

type ColaboradorCardProps = {
    colaborador: Colaborador;
};

export const ColaboradorCard = ({ colaborador }: ColaboradorCardProps) => {
    return (
        <motion.div
            className="w-full flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="w-32 h-32 relative mb-4">
                <Image
                    priority
                    sizes="2"
                    fill
                    src={colaborador.foto}
                    alt={`Foto de ${colaborador.nombre}`}
                    className="w-full h-full object-cover rounded-full border-4 border-teal-500 shadow-md"
                />
            </div>
            <div className="text-center">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                    {colaborador.nombre}
                </h3>
                <p className="text-teal-600 text-sm mb-4">{colaborador.cargo}</p>

                <Link
                    href={`/colaboradores/${colaborador.id}`}
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors"
                >
                    Ver perfil
                </Link>
            </div>
        </motion.div>
    );
};
