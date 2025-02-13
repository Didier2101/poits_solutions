
import Image from 'next/image';

export default function Logo() {
    return (
        <>

            <Image
                src="/logo.svg"
                alt="Logo de Points Solutions SAS"
                fill
                priority
                className="animate-spin-slow mb-4"
            />
        </>
    );
}
