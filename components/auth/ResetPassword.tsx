"use client";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, type ResetPasswordFormData } from "@/src/schema/zod";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { motion } from "framer-motion";
import Logo from "@/src/ui/Logo";

const MySwal = withReactContent(Swal);

export default function ResetPassword() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: ResetPasswordFormData) => {
        if (!token) {
            MySwal.fire({
                title: 'Error',
                text: 'El token no fue proporcionado en la URL',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
            return;
        }

        try {
            const response = await fetch("/api/reset", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, password: data.password }),
            });

            if (response.ok) {
                MySwal.fire({
                    title: 'Contraseña restablecida con éxito',
                    text: 'Ahora puedes iniciar sesión con tu nueva contraseña.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                }).then(() => {
                    router.push('/');
                });
            } else {
                const errorData = await response.json();
                MySwal.fire({
                    title: 'Error',
                    text: errorData.message || 'Error al restablecer la contraseña',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            MySwal.fire({
                title: 'Error',
                text: 'Error al procesar la solicitud',
                icon: 'error',
                confirmButtonText: 'Aceptar',
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
                        className="text-2xl text-center font-bold mb-4 "
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Restablecer Contraseña
                    </motion.h2>
                    <motion.p
                        className="text-center text-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Ingresa una nueva contraseña para tu cuenta.
                    </motion.p>
                </div>

                {/* Sección del formulario */}
                <div className="w-full md:w-1/2 p-8 bg-gray-100 text-gray-500 font-bold">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <h3 className="text-2xl font-bold mb-6 text-center"> Restablecer Contraseña</h3>
                        <div>
                            <label className="block  mb-2">Nueva Contraseña</label>
                            <input
                                type="password"
                                {...register("password")}
                                className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring focus:ring-blue-200`}
                                placeholder="Nueva Contraseña"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2">Confirmar Contraseña</label>
                            <input
                                type="password"
                                {...register("confirmPassword")}
                                className={`w-full px-4 py-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}  focus:outline-none focus:ring focus:ring-blue-200`}
                                placeholder="Confirmar Contraseña"
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition disabled:opacity-50"
                        >
                            {isSubmitting ? 'Procesando...' : 'Restablecer Contraseña'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
