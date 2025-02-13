import Servicios from "@/components/dashboard/Servicios";
import { servicios } from "@/data/servicios";

export default function ServiciosPage() {
    return (
        <>
            <Servicios servicios={servicios} />
        </>
    )
}
