import { FOOTER_SECTION_LINKS } from "../data/footer-sections.data.tsx";

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
            {FOOTER_SECTION_LINKS.map((link) => {
              return (
                <li key={link.href}>
                  <a className="footer__nav-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="footer__contacts">
          <p className="footer__nav-title">Контакты</p>
          <p className="footer__nav-number">
            Номер телефона <br />
            <span className="footer__nav-number--contact">
              +9 (999) 999-99-99
            </span>
          </p>

          <div className="footer__socials-wrap">
            <FooterSocials />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">© 2025–{year} «Just Ryan».</p>
        <p className="footer__legal">
          Учебный проект, созданный для практики работы
        </p>
      </div>
    </div>
  );
}
