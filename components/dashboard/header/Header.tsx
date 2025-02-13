"use client";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import { DashboardNavegacion, DashboardSubmenu } from "@/data/links";
import DashboardRutas from "./DashboardRutas";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Importa SweetAlert2
import Logo from "@/src/ui/Logo";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    // Manejo de cierre de sesión con confirmación
    const handleLogout = async () => {
        const result = await Swal.fire({
            title: '¿Seguro que quieres cerrar sesión?',
            text: 'Tu sesión actual se cerrará',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch('/api/logout', {
                    method: 'POST',
                });

                if (response.ok) {
                    // Si la respuesta del servidor es exitosa, muestra un mensaje de éxito
                    Swal.fire({
                        title: 'Sesión cerrada',
                        text: 'Has cerrado sesión correctamente.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        router.push('/'); // Redirige al usuario a la página de inicio de sesión
                    });
                } else {
                    // Si la respuesta del servidor no es exitosa, muestra un mensaje de error
                    Swal.fire({
                        title: 'Error al cerrar sesión',
                        text: 'Hubo un problema al intentar cerrar tu sesión. Por favor, inténtalo nuevamente.',
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                    });
                }
            } catch {
                // Si hay un error en la solicitud, muestra un mensaje de error
                Swal.fire({
                    title: 'Error de conexión',
                    text: 'No se pudo realizar la solicitud. Verifica tu conexión a Internet y vuelve a intentarlo.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }
        } else {
            console.log("Cierre de sesión cancelado");
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-teal-600  shadow-sm text-gray-100">
                <div className="container mx-auto p-4 flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/inicio" className="flex items-center gap-2">
                        <div className=" w-10 h-10 relative">
                            <Logo />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold ">Points Solutions SAS</h2>
                        </div>
                    </Link>

                    {/* Navegación para pantallas grandes */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {DashboardNavegacion.map((link) => (
                            <DashboardRutas
                                key={link.url}
                                link={link}
                                setIsMobileMenuOpen={setIsMobileMenuOpen}
                            />
                        ))}
                    </nav>

                    <div className="hidden lg:block w-[2.5px] h-7 bg-gray-500 rounded-md"></div>

                    {/* Menú desplegable para Clientes y Colaboradores */}
                    <div className="hidden lg:flex items-center relative  group">
                        <button className="text-gray-100 flex items-center">
                            <span>Más ⬇️</span>
                        </button>
                        <div className="absolute top-6 left-0 rounded-md hidden group-hover:block bg-white shadow-lg w-48 border border-gray-200">
                            <ul className="space-y-1 p-2">
                                {DashboardSubmenu.map((link) => (
                                    <li key={link.url}>
                                        <Link
                                            href={link.url}
                                            className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Botón de logout */}
                    <div className="hidden lg:flex items-center p-2">
                        <button onClick={handleLogout} className=" text-gray-100 font-bold flex items-center space-x-2  px-4 py-2 rounded-md hover:bg-gray-100 text-sm hover:text-teal-900">
                            Cerrar Sesión
                        </button>
                    </div>

                    {/* Botón para menú móvil */}
                    <div
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex lg:hidden items-center rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                    >
                        <FiAlignJustify className="text-gray-800 text-lg" />
                    </div>
                </div>

                {/* Menú móvil */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-teal-600 p-4 mt-6 overflow-hidden">
                        <nav className="flex flex-col space-y-1 py-2">
                            {DashboardNavegacion.map((link) => (
                                <DashboardRutas
                                    key={link.url}
                                    link={link}
                                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                                />
                            ))}
                        </nav>
                        <ul className="flex flex-col space-y-1 py-2">
                            {DashboardSubmenu.map((link) => (
                                <li key={link.url}>
                                    <Link
                                        href={link.url}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-2 text-sm font-medium text-teal-50 hover:bg-gray-200 hover:text-teal-900 rounded-md"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <button onClick={handleLogout} className="font-bold flex items-center space-x-2 hover:bg-gray-200 hover:text-teal-900 px-4 py-2 rounded-md">
                            Cerrar Sesión
                        </button>
                    </div>
                )}
            </header>
        </>
    );
}
