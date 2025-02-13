export type Servicio = {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
}

export const servicios: Servicio[] = [
    {
        id: 1,
        titulo: "Transformación Digital",
        descripcion:
            "Ayudamos a las empresas a implementar tecnologías innovadoras para optimizar sus procesos y mantenerse competitivas en el mercado.",
        imagen: "/iconos/servicio-digital.svg",
    },
    {
        id: 2,
        titulo: "Desarrollo de Software a Medida",
        descripcion:
            "Creamos soluciones personalizadas que se adaptan a las necesidades específicas de nuestros clientes, desde aplicaciones móviles hasta plataformas web.",
        imagen: "/iconos/servicio-desarrollo.svg",
    },
    {
        id: 3,
        titulo: "Consultoría Tecnológica",
        descripcion:
            "Ofrecemos asesoría experta para planificar y ejecutar estrategias tecnológicas alineadas con los objetivos de negocio.",
        imagen: "/iconos/servicio-tecnologia.svg",
    },
    {
        id: 4,
        titulo: "Automatización de Procesos",
        descripcion:
            "Implementamos soluciones de automatización que optimizan las operaciones empresariales y aumentan la productividad.",
        imagen: "/iconos/servicio-proceso.svg",
    }
];