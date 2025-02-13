"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "@/src/schema/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Logo from "@/src/ui/Logo";
import Titulo from "@/src/ui/Titulo";

const MySwal = withReactContent(Swal);

export default function Register() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: data.username,
                    email: data.email,
                    password: data.password
                }),
            });

            const result = await response.json();

            if (response.ok) {
                MySwal.fire({
                    title: 'Éxito',
                    text: 'Usuario registrado exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    router.push('/login');
                    reset();
                });
            } else {
                MySwal.fire({
                    title: 'Error',
                    text: result.message || 'Hubo un error al registrar el usuario',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                MySwal.fire({
                    title: 'Error',
                    text: `Hubo un error al procesar la solicitud: ${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            } else {
                MySwal.fire({
                    title: 'Error',
                    text: 'Hubo un error al procesar la solicitud',
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
                <div className="w-full md:w-1/2 p-8  bg-teal-600 text-gray-100 flex flex-col justify-center items-center">
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
                        transition={{ duration: 0.5 }}
                    >
                        Bienvenido
                    </motion.h2>
                    <motion.h2
                        className="text-2xl font-semibold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Titulo />
                    </motion.h2>
                    <motion.p
                        className="text-center text-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Por favor, completa el formulario para registrarte.
                    </motion.p>
                </div>

                {/* Sección del formulario */}
                <div className="w-full md:w-1/2 p-8 bg-gray-50 text-gray-500 font-bold">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Registro</h3>

                        {/* Campo Usuario */}
                        <div className="mb-4">
                            <label className="block mb-2">Usuario</label>
                            <input
                                required
                                type="text"
                                {...register("username")}
                                className={`w-full px-4 py-2 border ${errors.username ? "border-red-500" : "border-gray-300"
                                    }  focus:outline-none focus:ring focus:ring-blue-200`}
                                placeholder="Usuario"
                            />
                            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                        </div>

                        {/* Campo Correo */}
                        <div className="mb-4">
                            <label className="block mb-2">Correo electrónico</label>
                            <input
                                required
                                type="email"
                                {...register("email")}
                                className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                                    }  focus:outline-none focus:ring focus:ring-blue-200`}
                                placeholder="Correo electrónico"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Campo Contraseña */}
                        <div className="mb-6">
                            <label className="block  mb-2">Contraseña</label>
                            <input
                                required
                                type="password"
                                {...register("password")}
                                className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring focus:ring-blue-200`}
                                placeholder="Contraseña"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Botón de Registro */}
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-gray-100 py-2 hover:bg-teal-700 transition"
                        >
                            Registrarse
                        </button>
                        <p className="text-center text-gray-500 mt-4">
                            ¿Ya tienes una cuenta? <Link href="/" className="text-teal-500 font-normal hover:underline">Inicia sesión</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}