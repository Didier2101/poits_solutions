import Image from 'next/image';

// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-300 py-12">
            <div className="container mx-auto px-6 md:px-12 space-y-12">
                {/* Información principal */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    {/* Detalles de la Empresa */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white">Points Solutions and Digital Transformation SAS</h2>
                        <p className="text-sm mt-2">NIT: 901729015-9</p>
                        <p className="text-sm">Tipo de organización: Sociedad por Acciones Simplificada</p>
                    </div>

                    {/* Información de contacto */}
                    <div className="text-center md:text-right space-y-2">
                        <p className="text-sm">
                            Correo:{" "}
                            <a
                                href="mailto:points.dt@gmail.com"
                                className="text-yellow-400 hover:text-yellow-500 transition-colors underline"
                            >
                                points.dt@gmail.com
                            </a>
                        </p>
                        <p className="text-sm">Teléfono: +57 300 123 4567</p>
                        <p className="text-sm">Dirección: Calle Falsa 123, Bogotá, Colombia</p>
                    </div>
                </div>

                {/* Servicios y Tecnologías */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Lista de Servicios */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Servicios</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>✅ Transformación digital</li>
                            <li>✅ Desarrollo de software a medida</li>
                            <li>✅ Consultoría en tecnologías de la información</li>
                            <li>✅ Integración de sistemas</li>
                            <li>✅ Optimización de procesos empresariales</li>
                        </ul>
                    </div>

                </div>

                {/* Redes Sociales */}
                <div className="flex justify-center md:justify-start space-x-8">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg"
                            alt="Facebook Logo"
                            width={150}
                            height={40}
                        />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="https://cdn.worldvectorlogo.com/logos/x-2.svg"
                            alt="Twitter Logo"
                            width={40}
                            height={40}
                        />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:scale-110 transition-transform"
                    >
                        <Image
                            src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                            alt="LinkedIn Logo"
                            width={40}
                            height={40}
                        />
                    </a>
                </div>
            </div>

            {/* Línea divisoria */}
            <div className="border-t border-gray-600 mt-12"></div>

            {/* Derechos reservados */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Points Solutions and Digital Transformation SAS. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
