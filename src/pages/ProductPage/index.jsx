import { useParams } from "react-router-dom"
import furniture from '../../helpers/furniture-database'
import './style.css'

function ProductPage() {

    const { productId } = useParams()

    function findProduct(oneFurniture) {
        return (productId === oneFurniture.id)
    }

    const productSelect = furniture.find(findProduct)

    console.log(productSelect)

    return (
        <>
            <div className="container-furniture--selected">

                <img src={productSelect.image} alt={productSelect.name} />

                <div>{productSelect.name}</div>

                <button>Objednat</button>

            </div>
        </>
    )
}

export default ProductPage









