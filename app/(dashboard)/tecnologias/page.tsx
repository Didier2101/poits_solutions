import Tecnologias from '@/components/dashboard/Tecnologias'
import { tecnologias } from '@/data/tecnologiasData'
export default function page() {
    return (
        <>
            <Tecnologias tecnologias={tecnologias} />
        </>
    )
}
