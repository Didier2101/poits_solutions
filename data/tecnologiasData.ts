export type Tecnologia = {
    id: number;
    categoria: string;
    descripcion: string; // Descripción corta de la categoría
    herramientas: { nombre: string; logo: string; descripcion: string }[]; // Descripción por herramienta
};

export const tecnologias: Tecnologia[] = [
    {
        id: 1,
        categoria: "Frontend",
        descripcion: "Herramientas para la creación de interfaces de usuario interactivas y dinámicas.",
        herramientas: [
            { nombre: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg", descripcion: "Librería para interfaces de usuario." },
            { nombre: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg", descripcion: "Framework para React, optimiza el SEO y el rendimiento." },
            { nombre: "Angular", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg", descripcion: "Framework de desarrollo web de Google." },
            { nombre: "Vite", logo: "https://cdn.worldvectorlogo.com/logos/vitejs.svg", descripcion: "Herramienta de construcción de aplicaciones rápida." },
            { nombre: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", descripcion: "Framework CSS de utilidad." },
            { nombre: "Material UI", logo: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg", descripcion: "Librería de componentes React basada en Material Design." },
            { nombre: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg", descripcion: "Superconjunto de JavaScript con tipado estático." },
            { nombre: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", descripcion: "Lenguaje de programación para la web." }
        ]
    },
    {
        id: 2,
        categoria: "Backend",
        descripcion: "Tecnologías para el desarrollo de la lógica de servidor y APIs.",
        herramientas: [
            { nombre: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", descripcion: "Entorno de ejecución JavaScript del lado del servidor." },
            { nombre: "Express", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg", descripcion: "Framework minimalista para Node.js." },
            { nombre: "NestJS", logo: "https://cdn.worldvectorlogo.com/logos/nestjs.svg", descripcion: "Framework para Node.js basado en TypeScript." },
            { nombre: "GraphQL", logo: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg", descripcion: "Lenguaje de consulta para APIs." },
            { nombre: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", descripcion: "Framework PHP para aplicaciones web." },
            { nombre: "C#", logo: "https://cdn.worldvectorlogo.com/logos/c--4.svg", descripcion: "Lenguaje de programación de Microsoft." },
            { nombre: ".NET", logo: "https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg", descripcion: "Framework de desarrollo para aplicaciones multiplataforma de Microsoft." }
        ]
    },
    {
        id: 3,
        categoria: "Bases de Datos",
        descripcion: "Sistemas para almacenar y gestionar datos de manera eficiente.",
        herramientas: [
            { nombre: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg", descripcion: "Sistema de gestión de bases de datos relacional." },
            { nombre: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", descripcion: "Base de datos NoSQL orientada a documentos." },
            { nombre: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", descripcion: "Sistema de bases de datos relacional de código abierto." },
            { nombre: "SQLite", logo: "https://cdn.worldvectorlogo.com/logos/sqlite.svg", descripcion: "Base de datos ligera y embebida." },
            { nombre: "MariaDB", logo: "https://cdn.worldvectorlogo.com/logos/mariadb.svg", descripcion: "Base de datos relacional compatible con MySQL." }
        ]
    },
    {
        id: 4,
        categoria: "DevOps",
        descripcion: "Herramientas para automatizar procesos de desarrollo y despliegue.",
        herramientas: [
            { nombre: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker-1.svg", descripcion: "Plataforma para crear, desplegar y ejecutar aplicaciones dentro de contenedores." },
            { nombre: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", descripcion: "Sistema de control de versiones distribuido." }
        ]
    },
    {
        id: 5,
        categoria: "Testing",
        descripcion: "Herramientas para la automatización de pruebas de software.",
        herramientas: [
            { nombre: "Jest", logo: "https://cdn.worldvectorlogo.com/logos/jest-2.svg", descripcion: "Framework de pruebas en JavaScript." },
            { nombre: "Mocha", logo: "https://cdn.worldvectorlogo.com/logos/mocha.svg", descripcion: "Framework de pruebas para Node.js." },
            { nombre: "Chai", logo: "https://cdn.worldvectorlogo.com/logos/chai.svg", descripcion: "Librería de aserciones para pruebas en JavaScript." }
        ]
    },
    {
        id: 6,
        categoria: "Diseño",
        descripcion: "Herramientas para diseño de interfaces y prototipos.",
        herramientas: [
            { nombre: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg", descripcion: "Herramienta de diseño colaborativo en la nube." },
            { nombre: "Adobe XD", logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg", descripcion: "Herramienta de diseño de interfaces y prototipos." },
            { nombre: "SharePoint", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sharepoint.svg", descripcion: "Plataforma de colaboración y gestión de documentos de Microsoft." }
        ]
    }
];
