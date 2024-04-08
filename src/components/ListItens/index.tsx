import { NavLink } from 'react-router-dom';
import './style.css';

export default function ListItens() {
    return (
        <div className="rr-product">
            <NavLink to="computers"
                className={({ isActive }) => isActive ? "menu-active" : "menu-desactive"}>
                <h4>Computadores</h4>
            </NavLink>
            <NavLink to="eletronics"
                className={({ isActive }) => isActive ? "menu-active" : "menu-desactive"}>
                <h4>Eletrônicos</h4>
            </NavLink>
            <NavLink to="books"
                className={({ isActive }) => isActive ? "menu-active" : "menu-desactive"}>
                <h4>Livros</h4>
            </NavLink>
        </div>
    );
}