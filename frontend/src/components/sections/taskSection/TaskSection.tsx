import MainTitle from "@/ui/mainTitle/MainTitle.tsx";
import TaskSectionTop from "./topSection/TaskSectionTop.tsx";
import TaskSectionCard from "./bottomSection/TaskSectionCard.tsx";
import {TASK_SECTION_CONTENT} from "./bottomSection/task-section-bottom.data.ts";
import "./TaskSection.css";

export default function TaskSection() {
    return (
        <section className="task-section">
            <MainTitle id="project" title="Теоретический проект"/>

            <TaskSectionTop/>

            <article className="task-section__cards">
                {TASK_SECTION_CONTENT.map((item, i) => (
                    <TaskSectionCard
                        key={i}
                        title={item.title}
                        description={item.description}
                        filePath={item.filePath}
                    />
                ))}
            </article>
        </section>
    );
}
