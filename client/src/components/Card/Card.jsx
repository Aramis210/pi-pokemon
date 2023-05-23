import style from './Card.module.css'
const Card = (props) => {
    return (
        <div className={style.card}>
            <img src={props.image} alt={props.name} className={style.img}/>
            <p>NAME: {props.name}</p>
            <p>HP: {props.hp}</p>
            <p>ATTACK: {props.attack}</p>
            <p>DEFENSE: {props.defense}</p>
        </div>
    )
}

export default Card