import { Link, NavLink } from 'react-router-dom';
import imgHome from '../../assets/home.png';
import './style.css';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="rr-header-container">
                    <div className="rr-header-links">
                        <NavLink className={({ isActive }) => isActive ? "menu-active" : "menu-desactive"}
                            to="/initial"> <h4>Início</h4> </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "menu-active" : "menu-desactive"}
                            to="/products"> <h4>Produtos</h4> </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "menu-active" : "menu-desactive"}
                            to="/about-us"> <h4>Sobre nós</h4> </NavLink>
                    </div>
                    <Link to="/initial">
                        <img src={imgHome} alt="Início" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}