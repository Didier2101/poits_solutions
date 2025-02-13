"use client";

import { forgotPasswordSchema, type ForgotPasswordFormData } from "@/src/schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion";
import Logo from "@/src/ui/Logo";
import Titulo from "@/src/ui/Titulo";

const MySwal = withReactContent(Swal);

export default function ForgotPassword() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: ForgotPasswordFormData) => {
        try {
            const response = await fetch("/api/forgot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: data.email }),
            });

            const responseData = await response.json();

            if (response.ok) {
                MySwal.fire({
                    title: 'Correo enviado',
                    text: 'Si existe una cuenta con este correo, recibirás instrucciones para restablecer tu contraseña.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    reset();
                    router.push('/');
                });
            } else if (response.status === 404) {
                MySwal.fire({
                    title: 'Correo enviado',
                    text: 'Si existe una cuenta con este correo, recibirás instrucciones para restablecer tu contraseña.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    reset();
                });
            } else {
                MySwal.fire({
                    title: 'Error',
                    text: responseData.message || 'Error al procesar la solicitud',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
        } catch {
            MySwal.fire({
                title: 'Error',
                text: 'Error al procesar la solicitud',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
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
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        Recuperar Contraseña
                    </motion.h2>
                    <motion.span
                        className="text-2xl font-semibold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <Titulo />
                    </motion.span>
                    <motion.p
                        className="text-center text-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        Ingresa tu correo electrónico para recuperar tu contraseña.
                    </motion.p>
                </div>

                {/* Sección del formulario */}
                <div className="w-full md:w-1/2 p-8 bg-gray-50 text-gray-500 font-bold">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <h3 className="text-2xl font-bold mb-6 text-center">Recupera tu contraseña</h3>

                        <div className="mb-4">
                            <label className="block mb-2">Correo electrónico</label>
                            <input
                                type="email"
                                {...register("email")}
                                className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring focus:ring-blue-200`}
                                placeholder="Correo electrónico"
                                required
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-gray-100 py-2 hover:bg-teal-700 transition"
                        >
                            Enviar Correo de Recuperación
                        </button>

                        <p className="text-left text-gray-500 mt-4">
                            <Link href="/" className="text-teal-500 font-normal hover:underline">Volver</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
