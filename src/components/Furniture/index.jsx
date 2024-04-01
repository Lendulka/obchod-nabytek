import { NavLink } from 'react-router-dom'
import './style.css'

function Furniture({ name, image, id }) {
    return (
        <>
            <div className="container-furniture">

                <NavLink to={"product/" + id}>
                    <img src={image} alt={name} />
                </NavLink>

                <div>{name}</div>

            </div>
        </>
    )
}

export default Furniture