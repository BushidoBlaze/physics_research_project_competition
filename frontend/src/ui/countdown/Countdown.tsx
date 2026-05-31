import {useEffect, useState} from "react";
import "./Countdown.css";

interface CountdownProps {
    targetDate?: string;
    label?: string;
    className?: string;
    decorative?: boolean;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function calculateTimeLeft(target: number): TimeLeft {
    const diff = Math.max(0, target - Date.now());
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

function decorativeTime(): TimeLeft {
    // Декоративные «живые» цифры — секунды реально тикают, остальное стабильно красиво
    const now = new Date();
    return {
        days: 42,
        hours: 18,
        minutes: 30,
        seconds: 59 - now.getSeconds(),
    };
}

export default function Countdown({
                                      targetDate,
                                      label,
                                      className = "",
                                      decorative = false,
                                  }: CountdownProps) {
    const target = targetDate ? new Date(targetDate).getTime() : 0;
    const isDecorative = decorative || !targetDate || target <= Date.now();

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
        isDecorative ? decorativeTime() : calculateTimeLeft(target)
    );

    useEffect(() => {
        const tick = () => {
            setTimeLeft(isDecorative ? decorativeTime() : calculateTimeLeft(target));
        };
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [target, isDecorative]);

    return (
        <div className={`countdown ${className}`} role="timer" aria-live="off" aria-hidden="true">
            {label && <p className="countdown__label">{label}</p>}

            <ul className="countdown__list">
                <li className="countdown__item">
                    <span className="countdown__value">{String(timeLeft.days).padStart(2, "0")}</span>
                    <span className="countdown__unit">дней</span>
                </li>
                <li className="countdown__sep" aria-hidden="true">:</li>
                <li className="countdown__item">
                    <span className="countdown__value">{String(timeLeft.hours).padStart(2, "0")}</span>
                    <span className="countdown__unit">часов</span>
                </li>
                <li className="countdown__sep" aria-hidden="true">:</li>
                <li className="countdown__item">
                    <span className="countdown__value">{String(timeLeft.minutes).padStart(2, "0")}</span>
                    <span className="countdown__unit">минут</span>
                </li>
                <li className="countdown__sep" aria-hidden="true">:</li>
                <li className="countdown__item">
                    <span className="countdown__value">{String(timeLeft.seconds).padStart(2, "0")}</span>
                    <span className="countdown__unit">секунд</span>
                </li>
            </ul>
        </div>
    );
}
