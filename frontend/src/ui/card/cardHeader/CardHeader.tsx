import React from "react";

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export default function CardHeader({ children, className }: CardHeaderProps) {
    return <div className={`card-item__header ${className || ""}`}>{children}</div>;
}