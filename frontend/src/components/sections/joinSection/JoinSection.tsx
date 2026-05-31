import MainTitle from "@/ui/mainTitle/MainTitle.tsx";
import {Button} from "@/ui/button/Button.tsx";
import "./JoinSection.css";

export default function JoinSection() {
    return (
        <section className="join">
            <MainTitle
                id="join"
                className="join__title"
                title="Участвуй и присоединяйся к нам!"
            />

            <p className="join__text">
                Стремление к знаниям и интерес к науке помогают глубже понимать современные технологии
                и находить рациональные решения. Участие в конкурсе — это возможность развивать мышление,
                учиться анализировать и делать осознанный выбор в пользу знаний.
            </p>

            <div className="join__actions">
                <Button to="/404" variant="primary" size="lg">
                    Хочу участвовать!
                </Button>
            </div>
        </section>
    );
}
