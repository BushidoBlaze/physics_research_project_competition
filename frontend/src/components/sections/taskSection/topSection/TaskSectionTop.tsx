import { FileCheckCorner } from "lucide-react";
import "../TaskSection.css";

export default function TaskSectionTop() {
    return (
        <section className="task-section-top">
            <div className="task-section-top__body">
                <header className="task-section-top__header">
                    <span className="task-section-top__badge">Задание</span>
                    <h3 className="task-section-top__title">Выберите теоретическую задачу</h3>
                </header>

                <p className="task-section-top__description">
                    Скачайте файл с задачами и подготовьте теоретический проект.
                    Выберите не более двух задач и подготовьте проект на русском языке.
                </p>

                <div className="task-section-top__requirements">
                    <p className="task-section-top__requirements-label">
                        В проекте необходимо указать:
                    </p>
                    <ul className="task-section-top__requirements-list">
                        <li className="task-section-top__requirements-item">
                            Методику определения характеристики, свойства или параметра для представленной задачи
                        </li>
                        <li className="task-section-top__requirements-item">
                            Предложить конструкцию измерительной установки
                        </li>
                        <li className="task-section-top__requirements-item">
                            Предложить методику проведения измерений
                        </li>
                        <li className="task-section-top__requirements-item">
                            Предложить методику описания полученных результатов
                        </li>
                    </ul>
                </div>
            </div>

            <div className="task-section-top__visual" aria-hidden="true">
                <FileCheckCorner strokeWidth={0.8} size={160} />
            </div>
        </section>
    );
}
