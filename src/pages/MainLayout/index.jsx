import { Link, Outlet } from 'react-router-dom'
import './style.css'

function MainLayout() {
    return (
        <div className="container">
            <header className="header">
                <Link to="/">
                    <div className="logo">XXXMuck</div>
                </Link>
            </header>

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                <p>Czechitas, Digitální akademie: Web</p>
            </footer>
        </div>
    )
}

export default MainLayout