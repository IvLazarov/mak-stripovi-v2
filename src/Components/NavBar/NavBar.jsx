import { Link } from "react-router";
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/членови">Членови</Link>
            <Link to="/како-збиднавме">Никулец</Link>
            <Link to="/стрип-школа">Стрип Школа</Link>
            <Link className="navbar-img-link" to="/" >
            <img src='../images/mak-stripovi-logo.jpg' alt="logo" />
            </Link>
            <Link to="/Стрип-Трип">СтрипТрип</Link>
            <Link to="/настани">Настани</Link>
            <Link to="/вести">Вести</Link>
        </div>
    )
}

export default NavBar;

//Kopiraj od Dargaud design, Our Authors so slika zaednichka