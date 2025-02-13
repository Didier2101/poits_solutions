import { motion } from "framer-motion";

export default function Vision() {
    return (
        <motion.div
            className="pt-2 flex flex-col items-center container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <div className="flex-1 rounded-lg p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🌟</span>
                    <h3 className="text-2xl font-semibold">Visión</h3>
                </div>
                <p className="text-gray-50">
                    Convertirnos en la empresa líder en transformación digital en América Latina, conocida por ofrecer soluciones tecnológicas innovadoras que impulsen la eficiencia, el crecimiento y el éxito sostenible de nuestros clientes.
                </p>
            </div>
        </motion.div>
    );
}
