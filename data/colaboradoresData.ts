export type Colaborador = {
    id: string;
    nombre: string;
    cargo: string;
    descripcion: string;
    foto: string;
    linkedin: string;
    tecnologias: string[];
    experiencia: string;
    educacion: string;
    certificaciones: string[];
    logros: string[];
};

export const colaboradores: Colaborador[] = [
    {
        id: "1",
        nombre: "Didier Chávez",
        cargo: "Tecnólogo en Desarrollo de Software",
        descripcion: "Desarrollador especializado en frontend con experiencia en backend y creador del sistema de gestión de esta empresa.",
        foto: "/imagenes_colaboradores/foto-didier.jpg",
        linkedin: "https://www.linkedin.com/in/dcg-didierchavez",
        tecnologias: ["HTML", "CSS", "JavaScript", "React", "Vite", "Next.js", "Node.js", "Angular", "MySQL", "Prisma", "MongoDB", "TypeScript", "Git", "NPM"],
        experiencia: "Especialista en desarrollo web con habilidades en diseño y mantenimiento de sistemas escalables y modernos.",
        educacion: "Tecnólogo en Desarrollo de Software.",
        certificaciones: [],
        logros: [
            "Creador del sistema de gestión y página web de la empresa.",
            "Desarrollo de aplicaciones modernas utilizando tecnologías avanzadas como React y Node.js.",
        ],
    },
];
