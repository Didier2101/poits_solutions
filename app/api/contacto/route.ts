import { generateEmailTemplate } from "@/src/utils/emailTemplate";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: Request) {
    try {
        const body = await request.json(); // Parsear el cuerpo de la solicitud
        const { name, email, message } = body;

        // Validar campos requeridos
        if (!name || !email || !message) {
            return NextResponse.json({
                error: true,
                message: "Todos los campos son obligatorios."
            },
                { status: 400 });
        }

        // Configurar el transporte de Nodemailer
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Servidor SMTP (Ejemplo: Gmail)
            port: 587, // Puerto para STARTTLS
            secure: false, // Usar STARTTLS
            auth: {
                user: process.env.EMAIL_USER, // Tu correo electrónico
                pass: process.env.EMAIL_PASS, // Contraseña o App Password
            },
        });

        // Configurar el contenido del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_DEST,
            subject: `Nuevo mensaje de contacto de ${name}`,
            html: generateEmailTemplate(name, email, message)
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);


        // Respuesta exitosa
        return NextResponse.json({
            error: true,
            message: "¡Gracias por tu mensaje! Te contactaremos pronto."
        },
            { status: 200 });
    } catch {
        return NextResponse.json({
            error: true,
            message: "Hubo un problema al procesar la solicitud."
        },
            { status: 500 });
    }
}


