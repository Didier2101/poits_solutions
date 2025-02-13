"use client";

import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "@/src/schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/src/ui/Logo";
import Titulo from "@/src/ui/Titulo";

const MySwal = withReactContent(Swal);


export function Login() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                MySwal.fire({
                    title: 'Éxito',
                    text: 'Inicio de sesión exitoso',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    reset();
                    router.push('/inicio');
                });
            } else {
                MySwal.fire({
                    title: 'Error',
                    text: result.message || 'Error al iniciar sesión',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    reset();
                    router.push('/register');
                });

            }
        } catch (error) {
            if (error instanceof Error) {
                MySwal.fire({
                    title: 'Error',
                    text: `Error al procesar la solicitud: ${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            } else {
                MySwal.fire({
                    title: 'Error',
                    text: 'Error al procesar la solicitud',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-md overflow-hidden">
                {/* Sección de bienvenida */}
                <div className="w-full md:w-1/2 p-8 bg-teal-600 text-gray-100 flex flex-col justify-center items-center">
                    <motion.div className="mb-4 w-20 h-20 relative"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <Logo />
                    </motion.div>
                    <motion.h2
                        className="text-4xl font-bold mb-4 "
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Bienvenido
                    </motion.h2>
                    <motion.span
                        className="text-2xl font-semibold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Titulo />
                    </motion.span>
                    <motion.p
                        className="text-center text-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Por favor, ingresa tus credenciales para continuar.
                    </motion.p>
                </div>

                {/* Sección del formulario */}
                <div className="w-full md:w-1/2 p-8 bg-gray-50 text-gray-500 font-bold">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full"
                    >
                        <h3 className="text-2xl  mb-6 text-center ">Iniciar Sesión</h3>

                        {/* Campo Correo */}
                        <div className="mb-4">
                            <label className="block mb-2">Correo electrónico</label>
                            <input
                                type="email"
                                {...register("email")}
                                className={`w-full px-4 py-2 border  ${errors.email ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring focus:ring-blue-200`}
                                placeholder="Correo electrónico"
                                required
                            />
                            {errors.email?.message && (
                                <p className="text-red-500 text-sm mt-1">{String(errors.email.message)}</p>
                            )}
                        </div>

                        {/* Campo Contraseña */}
                        <div className="mb-6">
                            <label className="block mb-2">Contraseña</label>
                            <input
                                type="password"
                                {...register("password")}
                                className={`w-full px-4 py-2 border  ${errors.password ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring focus:ring-blue-200 `}
                                placeholder="*********"
                                required
                            />
                            {errors.password?.message && (
                                <p className="text-red-500 text-sm mt-1">{String(errors.password.message)}</p>
                            )}
                        </div>

                        {/* Botón de Login */}
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-gray-100 py-2 hover:bg-teal-700 transition"
                        >
                            {isSubmitting ? 'Procesando...' : 'Inicia sesion'}
                        </button>
                        <p className="text-center text-gray-500 mt-4">
                            ¿No tienes una cuenta? <Link href="/register" className="text-teal-500 font-normal hover:underline">Regístrate aquí</Link>
                        </p>
                        <p className="text-center text-gray-500 mt-4">
                            ¿Olvidaste tu contraseña? <Link href="/forgot" className="text-teal-500 font-normal hover:underline">Recupérala aquí</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}