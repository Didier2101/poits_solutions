

// import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    return (
        <div className=" fixed bottom-0 left-0 border-2 border-gray-100 w-4 h-4">
            {/* Botón de WhatsApp */}
            {/* <a
                href="https://wa.me/573028645014?text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20Points%20Solutions%20and%20Digital%20Transformation%20SAS.%20¿Cómo%20puedo%20ayudarles?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
                title="Enviar mensaje por WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a> */}

            {/* Botón de Volver arriba */}
            {/* <button
                onClick={scrollToTop}
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
                title="Volver arriba"
            >
                <FaArrowUp size={24} />
            </button> */}
            <h2>hola soy el boton</h2>
        </div>
    );
}
