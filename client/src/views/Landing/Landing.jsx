import './Landing.module.css'
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div>
            <Link to="/home">Bienvenidos a tu pagina de POKEMON</Link>
        </div>
    )
}

export default Landing;