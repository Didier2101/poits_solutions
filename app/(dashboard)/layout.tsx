import Footer from '@/components/dashboard/footer/Footer';
import { Header } from '@/components/dashboard/header/Header';
import React from 'react'

import { redirect } from 'next/navigation'
import { getUser } from '@/src/lib/auth'

export default async function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    const user = await getUser()

    if (!user) {
        redirect('/')
    }

    return (
        <>
            <div>
                <Header />
                <main className='mt-[70px]'>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}