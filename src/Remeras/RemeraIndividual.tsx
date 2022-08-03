import { remera } from "./remeras.model";
import css from './RemeraIndividual.module.css'

export default function RemeraIndividual(props:RemeraIndividualProps){
    
    const remeraLink = () => `/remera/${props.remera.id}`
    
    return (
        <div className={css.div}>
            <a href={remeraLink()}>
                <img src={props.remera.estampa} alt="Estampado" />
            </a>
            <p>
                <a href={remeraLink()}>{props.remera.nombre}</a>
            </p>
        </div>
    )
}

interface RemeraIndividualProps{
    remera: remera;

}