import { FOOTER_SOCIAL_MEDIAS_SECTION } from "../data/footer-sections.data.tsx";

import "./Footer.css";

export default function FooterSocials() {
  return (
    <div className="footer__socials">
      {FOOTER_SOCIAL_MEDIAS_SECTION.map((socialMedia) => {
        return (
          <a
            href={socialMedia.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label={socialMedia.ariaLabel}
          >
            {socialMedia.icon}
          </a>
        );
      })}
    </div>
  );
}
