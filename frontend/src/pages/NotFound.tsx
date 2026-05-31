import {Link, useNavigate} from "react-router-dom";
import {Telescope} from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found" aria-labelledby="not-found-title">
            <div className="not-found__bg" aria-hidden="true"/>

            <div className="not-found__inner">
                <p className="not-found__code" aria-hidden="true">404</p>

                <div className="not-found__icon" aria-hidden="true">
                    <Telescope size={28} strokeWidth={1.5}/>
                </div>

                <h1 id="not-found-title" className="not-found__title">
                    Страница не найдена
                </h1>
                <p className="not-found__text">
                    Кажется, такой страницы нет — или она переехала. Проверьте адрес
                    или вернитесь на главную, чтобы продолжить.
                </p>

                <div className="not-found__actions">
                    <Link className="not-found__btn not-found__btn--primary" to="/">
                        На главную
                    </Link>
                    <button
                        type="button"
                        className="not-found__btn not-found__btn--ghost"
                        onClick={() => navigate(-1)}
                    >
                        Назад
                    </button>
                </div>
            </div>
        </section>
    );
}
