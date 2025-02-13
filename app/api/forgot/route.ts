// app/api/forgot/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { prisma } from '@/src/lib/prisma';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { success: false, message: 'El correo electrónico es requerido' },
                { status: 400 }
            );
        }

        // Buscar el usuario
        const user = await prisma.users.findUnique({
            where: { email }
        });

        // Por seguridad, no revelamos si el usuario existe o no
        if (!user) {
            // Simulamos el tiempo que tomaría enviar un correo real
            await new Promise(resolve => setTimeout(resolve, 1000));

            return NextResponse.json(
                { success: true, message: 'Si el correo existe, recibirás instrucciones para restablecer tu contraseña' },
                { status: 200 }
            );
        }

        const token = crypto.randomBytes(20).toString('hex');
        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 1);

        await prisma.users.update({
            where: { email },
            data: {
                resetToken: token,
                resetTokenExpiry: expirationDate,
            },
        });

        const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset?token=${token}`;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Recuperación de contraseña',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #2563eb;">Recuperación de contraseña</h1>
                    <p>Has solicitado restablecer tu contraseña.</p>
                    <p>Haz clic en el siguiente enlace para restablecerla:</p>
                    <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 15px 0;">
                        Restablecer contraseña
                    </a>
                    <p style="color: #666;">Este enlace expirará en 1 hora.</p>
                    <p style="color: #666;">Si no solicitaste este cambio, puedes ignorar este correo.</p>
                </div>
            `,
        };

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                    reject(error);
                } else {
                    console.log('Correo enviado:', info.response);
                    resolve(info);
                }
            });
        });

        return NextResponse.json(
            { success: true, message: 'Correo de recuperación enviado' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error detallado:', error);
        return NextResponse.json(
            { success: false, message: 'Error al procesar la solicitud' },
            { status: 500 }
        );
    }
}