// data/clientesData.ts
export type Cliente = {
    id: number;
    nombre: string;
    descripcion: string;
    url: string;
    logo: string; // URL o path del logo de la empresa
};

export const clientes: Cliente[] = [
    {
        id: 1,
        nombre: "Cocacola",
        descripcion: "Empresa de bebidas refrescantes.",
        url: "https://www.entuhogar.coca-cola.com.co/",
        logo: "/imagenes_clientes/logo-cocacola.svg", // Asegúrate de tener esta imagen en tu carpeta pública o assets
    },
    {
        id: 2,
        nombre: "EPM",
        descripcion: "Servicios públicos esenciales.",
        url: "https://www.epm.com.co/clientesyusuarios/",
        logo: "/imagenes_clientes/logo-epm.svg", // Asegúrate de tener esta imagen en tu carpeta pública o assets
    },
    {
        id: 3,
        nombre: "Tuscany",
        descripcion: "Expertos en decoración de interiores.",
        url: "https://www.tuscanydrilling.com",
        logo: "/imagenes_clientes/logo-tuscany.png",
    },
    {
        id: 4,
        nombre: "ISA",
        descripcion: "Soluciones energéticas y sostenibles.",
        url: "https://www.isa.co/es",
        logo: "/imagenes_clientes/logo-isa.png",
    }

];
