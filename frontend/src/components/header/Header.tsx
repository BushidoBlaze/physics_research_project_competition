import HeaderLogo from "./HeaderLogo.tsx";
import HeaderNav from "./HeaderNav.tsx";
import BurgerHeader from "./BurgerHeader.tsx";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="header__navbar" aria-label="Основная навигация">
                <div className="header__container">
                    <HeaderLogo/>
                    <div className="header__desktop-nav">
                        <HeaderNav/>
                    </div>
                    <div className="header__mobile-nav">
                        <BurgerHeader/>
                    </div>
                </div>
            </nav>
        </header>
    );
}
