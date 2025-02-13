"use client"


import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Hook para obtener los parámetros dinámicos
import { colaboradores } from "@/data/colaboradoresData"; // Ruta hacia el archivo de datos
import Link from "next/link";
import Perfil from "@/components/dashboard/Perfil";

export default function IdPage() {
    const params = useParams(); // Hook para obtener `params`
    const [colaborador, setColaborador] = useState<any>(null);

    useEffect(() => {
        if (params?.id) {
            // Busca al colaborador por ID
            const encontrado = colaboradores.find((colab) => colab.id === params.id);
            setColaborador(encontrado);
        }
    }, [params]);

    // Si el colaborador no se encuentra (o los datos aún están cargando)
    if (!colaborador) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold">Colaborador no encontrado</h1>
                <p>El ID proporcionado no corresponde a ningún colaborador registrado.</p>
                <Link href="/colaboradores" className="text-teal-500 hover:underline">
                    Volver
                </Link>
            </div>
        );
    }

    // Renderiza el perfil del colaborador
    return (
        <Perfil
            colaborador={colaborador}
        />
    );
}
