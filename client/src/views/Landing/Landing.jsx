import style from './Landing.module.css'
import { NavLink } from "react-router-dom"

const Landing = () => {
    return (
        <div>
            <h1 style={{color: "white"}}>THIS IS THE POKEDEX VIRTUAL</h1>
            <NavLink to="/home" className={style.navLink}>
                <button>INGRESAR</button>
            </NavLink>
        </div>
    )
}

export default Landing;