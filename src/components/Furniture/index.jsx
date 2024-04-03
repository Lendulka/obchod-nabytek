import { NavLink } from 'react-router-dom'
import './style.css'

function Furniture({ name, image, id }) {
    return (
        <div className="furniture">
            <NavLink className="furniture__reference" to={"product/" + id}>
                <img src={image} alt={name} width={405} height={452} />
                <div className="furniture__name">{name}</div>
            </NavLink>
        </div>
    )
}

export default Furniture