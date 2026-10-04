import React from "react";
import "./CardBackgroundIcon.css";

interface CardBackgroundIconProps {
    Icon?: React.ElementType;
    size?: number;
    strokeWidth?: number;
    className?: string;
}

export default function CardBackgroundIcon({Icon, size, strokeWidth, className}: CardBackgroundIconProps) {
    return (
        <div className={`card-item__background-icon ${className || ""}`}>
            {Icon && <Icon strokeWidth={strokeWidth} size={size}/>}
        </div>
    );
}