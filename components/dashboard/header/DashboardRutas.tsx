"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type DashboardRutasProps = {
    setIsMobileMenuOpen: (value: boolean) => void;
    link: {
        url: string;
        text: string;
        blank: boolean;
    };
};

export default function DashboardRutas({ link, setIsMobileMenuOpen }: DashboardRutasProps) {
    const pathname = usePathname();
    const isActive = pathname === link.url || pathname.startsWith(link.url);

    return (
        <Link
            onClick={() => setIsMobileMenuOpen(false)}
            href={link.url}
            target={link.blank ? "_blank" : ""}
            className={`
                lg:flex-col px-4 py-2 text-sm font-semibold text-gray-100
                hover:bg-gray-200 rounded-md hover:text-teal-900
                relative transition-all duration-300
                ${isActive
                    ? `font-bold text-gray-100 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:translate-x-[-50%] 
                            before:w-[60%] before:h-[2px] before:bg-gray-200 before:rounded-full before:transition-all before:duration-300 before:hidden lg:before:block`
                    : ''
                }
            `}
        >
            {link.text}
        </Link>
    );
}
