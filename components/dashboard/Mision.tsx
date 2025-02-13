import { motion } from "framer-motion";

export default function Mision() {
    return (
        <motion.div
            className="py-2 flex flex-col items-center container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <div className="flex-1 rounded-lg p-6 bg-gradient-to-r from-green-400 to-teal-500 text-white">
                <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🚀</span>
                    <h3 className="text-2xl font-semibold">Misión</h3>
                </div>
                <p className="text-gray-50">
                    Ser reconocidos como líderes en transformación digital, destacándonos por nuestra capacidad de ofrecer soluciones innovadoras y personalizadas que generen un impacto positivo y duradero en los negocios de nuestros clientes.
                </p>
            </div>
        </motion.div>
    );
}
