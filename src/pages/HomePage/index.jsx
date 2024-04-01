import furniture from '../../helpers/furniture-database'
import Furniture from '../../components/Furniture'
import './style.css'

function HomePage() {
    return (
        <>
            <h1>Aktuální nabídka</h1>
            <p>Nejnovější prémiové produkty od předních českých designerů.</p>
            <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>

            {furniture.map(oneFurniture => <Furniture key={oneFurniture.id} name={oneFurniture.name} image={oneFurniture.image} id={oneFurniture.id} />)}
        </>
    )
}

export default HomePage