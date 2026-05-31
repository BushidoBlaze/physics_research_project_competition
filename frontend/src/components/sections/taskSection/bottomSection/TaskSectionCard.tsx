import CardTitle from "@/ui/card/cardTitle/CardTitle.tsx";
import {Button} from "@/ui/button/Button.tsx";
import "../TaskSection.css";

interface TaskSectionCardProps {
    title: string;
    description?: string[];
    filePath: string;
}

export default function TaskSectionCard({title, description = [], filePath}: TaskSectionCardProps) {
    const filename = decodeURIComponent(filePath.split("/").pop() || `${title}.docx`);

    return (
        <section className="task-section-card">
            <div className="task-section-card__content">
                <CardTitle title={title} className="task-section-card__title"/>

                <div className="task-section-card__description">
                    {description.map((text, i) => (
                        <p className="task-section-card__text" key={i}>
                            {text}
                        </p>
                    ))}
                </div>

                <div className="task-section-card__controls">
                    <Button
                        variant="primary"
                        size="md"
                        href={filePath}
                        download={filename}
                        aria-label={`Скачать файл для ${title}`}
                    >
                        Скачать файл
                    </Button>
                </div>
            </div>
        </section>
    );
}
