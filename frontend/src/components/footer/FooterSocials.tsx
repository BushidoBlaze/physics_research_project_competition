import {MessageCircle} from "lucide-react";
import {BsTelegram} from "react-icons/bs";
import {SiVk} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import "./Footer.css";

export default function FooterSocials() {
    return (
        <div className="footer__socials">
            <a
                href="https://t.me/aTLASov1"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Telegram"
            >
                <BsTelegram size={22}/>
            </a>

            <a
                href="https://vk.com/ryan_exe"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="VK"
            >
                <SiVk size={22}/>
            </a>

            <a
                href="https://max.ru/u/f9LHodD0cOL44Mst_fa2cei4N-vrhMoJ6NeTHfa6RDgnA9cZLrnlDGhcoDs"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="MAX"
            >
                <MessageCircle size={24}/>
            </a>

            <a
                href="https://github.com/BushidoBlaze"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
            >
                <SiGithub size={24}/>
            </a>
        </div>
    );
}