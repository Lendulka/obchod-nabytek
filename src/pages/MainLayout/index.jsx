import { Outlet } from 'react-router-dom'
import './style.css'

function MainLayout() {
    return (

        <div className="container">
            <header>
                <div className="logo">Logo</div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Czechitas, Digitální akademie: Web</p>
            </footer>
        </div>

    )
}

export default MainLayout