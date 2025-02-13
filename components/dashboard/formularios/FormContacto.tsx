"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { contactoSchema, type ContactoForm } from "@/src/schema/zod";

export default function FormContacto() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactoForm>({
        resolver: zodResolver(contactoSchema),
        mode: "onChange",
    });

    const onSubmit = async (data: ContactoForm) => {
        try {
            const response = await fetch('/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Verifica si hay un cuerpo en la respuesta
            let result = null;
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                result = await response.json();
            }

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: result?.message || "Mensaje enviado con éxito.",
                    confirmButtonText: 'Aceptar',
                });
                reset(); // Limpiar el formulario
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: result?.message || "Error al enviar el mensaje.",
                    confirmButtonText: 'Aceptar',
                });
            }
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "Hubo un problema al enviar el mensaje.",
                confirmButtonText: 'Aceptar',
            });
        }
    };

    return (
        <div

            className="rounded-md shadow-lg p-6 w-96 bg-gray-50 text-gray-500 font-bold">
            <h2 className="text-2xl mb-4 text-center font-bold text-teal-800">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        {...register("name")}
                        className="w-full rounded-md px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Tu nombre"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full rounded-md px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Tu correo electrónico"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Mensaje
                    </label>
                    <textarea
                        rows={2}
                        {...register("message")}
                        className="w-full px-4 rounded-md py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Tu mensaje"
                        required
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-teal-700 rounded-md text-gray-50 py-2 px-4 w-full hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}

                </button>
            </form>
        </div>
    );
}
