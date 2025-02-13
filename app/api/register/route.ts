import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        // Obtener los datos del cuerpo de la solicitud
        const body = await request.json();

        const { username, email, password } = body;

        // Validación básica de campos
        if (!username || !email || !password) {
            return NextResponse.json(
                { message: "Todos los campos son obligatorios" },
                { status: 400 }
            );
        }

        // Verificar si el usuario o email ya existen
        const existingUser = await prisma.users.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email }
                ]
            }
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "El usuario o email ya están registrados" },
                { status: 400 }
            );
        }

        // Encriptar la contraseña usando bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el nuevo usuario
        const newUser = await prisma.users.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        // Respuesta exitosa
        return NextResponse.json(
            {
                message: "Usuario registrado exitosamente",
            },
            { status: 201 }
        );

    } catch (error) {
        return NextResponse.json(
            { message: "Error al procesar la solicitud", error },
            { status: 500 }
        );
    }
}