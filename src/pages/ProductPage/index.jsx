import { useParams } from 'react-router-dom'
import furnitureArray from '../../helpers/furniture-database'
import './style.css'

function ProductPage() {

    const { productId } = useParams()

    function findProduct(oneFurniture) {
        return (oneFurniture.id === productId)
    }

    const productSelect = furnitureArray.find(findProduct)

    console.log(productSelect)

    return (
        <div className="product--selected">

            <img src={productSelect.image} alt={productSelect.name} width={405} height={452} />

            <div className="product__details">
                <div className="product__name">{productSelect.name}</div>
                <button className="product__button">Objednat</button>
            </div>

        </div>
    )
}

export default ProductPage









