import React from "react";
import type { ButtonHTMLAttributes } from "react";
import "./SwitchButton.css";

interface SwitchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactElement;
    isEnd?: boolean;
}

const SwitchButton = React.forwardRef<HTMLButtonElement, SwitchButtonProps>(
    ({ className = "", icon, isEnd = false, ...buttonProps }, ref) => {
        return (
            <button
                ref={ref}
                className={`switch-button ${className} ${isEnd ? "end" : ""}`}
                disabled={isEnd}
                {...buttonProps}
            >
                {icon}
            </button>
        );
    }
);

export default SwitchButton;