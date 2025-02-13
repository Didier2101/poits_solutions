import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const user = await prisma.users.findUnique({
            where: { email }
        });

        if (!user) {
            return NextResponse.json({ message: 'El usuario no se encuentra registrado' }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Contraseña incorrecta' }, { status: 401 });
        }

        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
            return NextResponse.json({ message: 'JWT_SECRET no está definido' }, { status: 500 });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: "8h" }
        );

        // Crear la respuesta
        const response = NextResponse.json({
            message: "Inicio de sesión exitoso",
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
            },
        });

        // Establecer la cookie en la respuesta
        const cookieStore = await cookies();
        cookieStore.set({
            name: 'auth-token',
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 8 // 8 horas
        });

        return response;

    } catch (error) {
        return NextResponse.json(
            { message: "Error interno del servidor", error },
            { status: 500 }
        );
    }
}