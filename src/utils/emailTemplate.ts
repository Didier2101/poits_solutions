export const generateEmailTemplate = (name: string, email: string, message: string) => `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
            
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 24px;
                background-color: #f8f9fa;
            }
            
            .header {
                background-color: #2563eb;
                color: white;
                padding: 16px;
                border-radius: 8px;
                margin-bottom: 24px;
                text-align: center;
            }
            
            .header h2 {
                margin: 0;
                font-size: 24px;
                font-weight: bold;
            }
            
            .content {
                background-color: white;
                padding: 24px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .field {
                margin-bottom: 16px;
            }
            
            .field-label {
                font-size: 18px;
                font-weight: bold;
                color: #374151;
                margin-bottom: 4px;
            }
            
            .field-value {
                margin-top: 4px;
                color: #1f2937;
            }
            
            .footer {
                margin-top: 24px;
                text-align: center;
                color: #6b7280;
                font-size: 14px;
            }
            
            .footer p {
                margin: 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Nuevo Mensaje de Contacto</h2>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">
                        Nombre:
                    </div>
                    <div class="field-value">
                        ${name}
                    </div>
                </div>
                <div class="field">
                    <div class="field-label">
                        Correo:
                    </div>
                    <div class="field-value">
                        ${email}
                    </div>
                </div>
                <div class="field">
                    <div class="field-label">
                        Mensaje:
                    </div>
                    <div class="field-value">
                        ${message}
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto</p>
            </div>
        </div>
    </body>
    </html>
`;