import { NavLink } from 'react-router-dom'
import './style.css'

function Furniture({ name, image, id }) {
    return (

        <NavLink className="reference" to={"product/" + id}>

            <div className="container-furniture">

                <img className="img" src={image} alt={name} />

                <div className="product-name">{name}</div>

            </div>

        </NavLink>

    )
}

export default Furniture