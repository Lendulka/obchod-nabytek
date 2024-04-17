import { Link, Outlet } from 'react-router-dom'
import ScrollToTop from 'react-scroll-up'
import IconUp from './img/icon.png'
import './style.css'

function MainLayout() {

    const scrollStyle = {
        position: "sticky",
        bottom: "0px",
        right: "0px",
        display: "flex",
        justifyContent: "end",
    }

    const iconStyle = {
        opacity: 0.6,
    }

    return (
        <div className="container">

            <header className="header">
                <Link to="/">
                    <div className="logo">XXXMuck</div>
                </Link>
            </header>

            <main className="main">
                <Outlet />

                <ScrollToTop showUnder={160} style={scrollStyle}>
                    <span><img src={IconUp} alt="Icon-Up" style={iconStyle} /></span>
                </ScrollToTop>
            </main>

            <footer className="footer">
                <p>Czechitas, Digitální akademie: Web</p>
            </footer>

        </div>
    )
}

export default MainLayout