import HeroSection from "@/components/sections/heroSection/HeroSection.tsx";
import PageContent from "@/layouts/PageContent.tsx";
import OlympiadInfoSectionBlock from "@/components/sections/olympiadInfo/OlympiadInfoSectionBlock.tsx";
import OlympiadPeriodSectionBlock from "@/components/sections/olympiadPeriod/OlympiadPeriodSectionBlock.tsx";
import OlympiadCompeteSectionBlock from "@/components/sections/olympiadCompete/OlympiadCompeteSectionBlock.tsx";
import TaskSection from "@/components/sections/taskSection/TaskSection.tsx";
import OlympiadPrizesSectionBlock from "@/components/sections/olympiadPrizes/OlympiadPrizesSectionBlock.tsx";
import FaqSection from "@/components/sections/faqSection/FaqSection.tsx";
import JoinSection from "@/components/sections/joinSection/JoinSection.tsx";

import Marquee from "@/components/marquee/Marquee";
import BackToTopButton from "@/components/backToTop/BackToTopButton";

export default function Home() {
    return (
      <>
        {/*Кнопка для быстрой прокрутки страницы к началу*/}
        <BackToTopButton />

        {/*Главный экран*/}
        <HeroSection />

        {/*Основной контейнер*/}
        <PageContent>
          {/*Общая информация об олимпиаде*/}
          <OlympiadInfoSectionBlock />

          {/*Расписание и ключевые этапы*/}
          <OlympiadPeriodSectionBlock />

          {/*Информация о соревнованиях*/}
          <OlympiadCompeteSectionBlock />

          {/*Списки олимпиадных заданий*/}
          <TaskSection />

          {/*Бегущая строка (Эффект)*/}
          <Marquee />

          {/*Информация о наградах*/}
          <OlympiadPrizesSectionBlock />

          {/*Блок часто задаваемых вопросов*/}
          <FaqSection />

          {/*Секция призыва к действию*/}
          <JoinSection />
        </PageContent>
      </>
    );
}
