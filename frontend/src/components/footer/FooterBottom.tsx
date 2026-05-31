import FooterSocials from "./FooterSocials.tsx";
import "./Footer.css";

export default function FooterBottom() {
    const year = new Date().getFullYear();

    return (
        <div className="footer__wrapper">
            <div className="footer__top">
                <div className="footer__brand">
                    <span className="footer__brand-mark">A|R</span>
                    <div className="footer__brand-text">
                        <p className="footer__brand-name">Конкурсы для школьников</p>
                        <p className="footer__brand-tagline">
                            Исследовательские проекты по физике для 9–11 классов
                        </p>
                    </div>
                </div>

                <nav className="footer__nav" aria-label="Подвал — навигация">
                    <p className="footer__nav-title">Разделы</p>
                    <ul className="footer__nav-list">
                        <li><a className="footer__nav-link" href="#about">О проекте</a></li>
                        <li><a className="footer__nav-link" href="#dates">Сроки</a></li>
                        <li><a className="footer__nav-link" href="#how">Как участвовать</a></li>
                        <li><a className="footer__nav-link" href="#project">Задание</a></li>
                        <li><a className="footer__nav-link" href="#prizes">Призы</a></li>
                        <li><a className="footer__nav-link" href="#faq">FAQ</a></li>
                    </ul>
                </nav>

                <div className="footer__contacts">
                    <p className="footer__nav-title">Контакты</p>
                    <p className="footer__nav-number">Номер телефона <br/>
                        <span className="footer__nav-number--contact">
                            +7 (902) 664-93-93
                        </span>
                    </p>

                    <div className="footer__socials-wrap">
                        <FooterSocials/>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copy">© 2025–{year} «Just Ryan». Все права защищены.</p>
                <p className="footer__legal">
                    Сделано с заботой о юных исследователях
                </p>
            </div>
        </div>
    );
}
