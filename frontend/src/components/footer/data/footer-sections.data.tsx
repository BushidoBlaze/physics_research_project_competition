//FooterSocial.tsx
import type { ReactNode } from "react";

import { MessageCircle } from "lucide-react";
import { BsTelegram } from "react-icons/bs";
import { SiVk, SiGithub } from "react-icons/si";

type FooterSocialMedias = {
  href: string;
  icon: ReactNode;
  ariaLabel: string;
};

export const FOOTER_SOCIAL_MEDIAS_SECTION: FooterSocialMedias[] = [
  {
    href: "https://t.me/aTLASov1",
    icon: <BsTelegram size={24} />,
    ariaLabel: "Telegram",
  },
  {
    href: "https://vk.com/ryan_exe",
    icon: <SiVk size={24} />,
    ariaLabel: "VK",
  },
  {
    href: "https://max.ru/u/f9LHodD0cOL44Mst_fa2cei4N-vrhMoJ6NeTHfa6RDgnA9cZLrnlDGhcoDs",
    icon: <MessageCircle size={24} />,
    ariaLabel: "MAX",
  },
  {
    href: "https://github.com/BushidoBlaze",
    icon: <SiGithub size={24} />,
    ariaLabel: "GitHub",
  },
];

// FooterBottom.tsx
export const FOOTER_SECTION_LINKS = [
  {
    href: "#about",
    label: "О проекте",
  },
  {
    href: "#dates",
    label: "Сроки",
  },
  {
    href: "#how",
    label: "Как участвовать",
  },
  {
    href: "#projects",
    label: "Список заданий",
  },
  {
    href: "#prizes",
    label: "Призы",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];
