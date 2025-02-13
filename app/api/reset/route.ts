import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { prisma } from '@/src/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token, password } = body;

        if (!token || !password) {
            return NextResponse.json(
                { message: 'Token y contraseña son requeridos' },
                { status: 400 }
            );
        }

        const user = await prisma.users.findFirst({
            where: {
                resetToken: token,
                resetTokenExpiry: {
                    gt: new Date(),
                },
            },
        });

        if (!user) {
            return NextResponse.json(
                { message: 'Token inválido o expirado' },
                { status: 400 }
            );
        }

        const hashedPassword = await hash(password, 12);

        await prisma.users.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpiry: null,
            },
        });

        return NextResponse.json(
            { message: 'Contraseña actualizada exitosamente' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { message: 'Error al procesar la solicitud' },
            { status: 500 }
        );
    }
}