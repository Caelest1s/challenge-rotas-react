import imgHome from '../../assets/home.png';
import './style.css';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="rr-header-container">
                    <div className="rr-header-links">
                        <h1>Início</h1>
                        <h1>Produtos</h1>
                        <h1>Sobre nós</h1>
                    </div>
                    <img src={imgHome} alt="Início" />
                </div>
            </nav>
        </header>
    );
}