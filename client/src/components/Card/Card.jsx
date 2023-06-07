import style from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className={style.card}>
            <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} className={style.img}/> </Link>
            <p>NAME: {props.name}</p>
            {console.log(props)}
            <p>HP: {props.hp} ATTACK: {props.attack}</p>
            <p>DEFENSE: {props.defense}</p>
            {props.type? <p>{props.type && `TYPES ${props.type[0].toUpperCase()}`} {props.type[1] && `AND ${props.type[1].toUpperCase()}`}</p> : ""}
        </div>
    )
}

export default Card