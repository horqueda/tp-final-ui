import RemeraIndividual from "./RemeraIndividual";
import { remera } from "./remeras.model";
import css from './ListadoRemeras.module.css'

export default function ListadoRemeras(props: ListadoRemerasProps){
    return (
        <div className={css.div}>
            {props.remeras.map(remera => 
            <RemeraIndividual remera={remera}
                              key={remera.id}
            />)}
        </div>
    )
}

interface ListadoRemerasProps{
    remeras: remera[]
}