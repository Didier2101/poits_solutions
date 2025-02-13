import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    try {
        // Obtener el gestor de cookies
        const cookieStore = await cookies();

        // Eliminar la cookie del token estableciendo una expiración inmediata
        cookieStore.set({
            name: 'auth-token',
            value: '',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 0, // Expiración inmediata
        });

        return NextResponse.json(
            { message: "Sesión cerrada exitosamente" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        return NextResponse.json(
            { message: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
