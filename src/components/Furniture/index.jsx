import { NavLink } from 'react-router-dom'
import './style.css'

function Furniture({ name, image, id }) {
    return (
        <div className="furniture__container">

            <div className="furniture">
                <NavLink to={"product/" + id}>
                    <img src={image} alt={name} width={405} height={452} />
                </NavLink>
            </div>

            <div className="furniture__name">{name}</div>

        </div>
    )
}

export default Furniture