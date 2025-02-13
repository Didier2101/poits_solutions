// types/links.ts
export type DashboardLink = {
    url: string;
    text: string;
    blank: boolean;
};

export const DashboardNavegacion: DashboardLink[] = [
    { url: '/inicio', text: 'Inicio', blank: false },
    { url: '/servicios', text: 'Servicios', blank: false },
    { url: '/nosotros', text: 'Nosotros', blank: false },
    { url: '/contacto', text: 'Contacto', blank: false },
];

// Nuevas rutas para Clientes y Colaboradores que no se mostrarán en la navegación principal
export const DashboardSubmenu: DashboardLink[] = [
    { url: '/clientes', text: ' Clientes', blank: false },
    { url: '/colaboradores', text: 'Colaboradores', blank: false },
    { url: '/tecnologias', text: 'Tecnologías', blank: false },
];



