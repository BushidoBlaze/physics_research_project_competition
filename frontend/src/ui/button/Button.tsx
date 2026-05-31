import type {ReactNode} from "react";
import {Link} from "react-router-dom";
import "./Button.css";

type Variant = "primary" | "secondary" | "outline" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    className?: string;

    to?: string;
    href?: string;
    download?: string;
    target?: string;
    rel?: string;

    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;

    "aria-label"?: string;
    "aria-expanded"?: boolean;
}

export function Button({
                           children,
                           variant = "primary",
                           size = "md",
                           fullWidth = false,
                           className = "",
                           to,
                           href,
                           download,
                           target,
                           rel,
                           type = "button",
                           onClick,
                           disabled,
                           "aria-label": ariaLabel,
                           "aria-expanded": ariaExpanded,
                       }: ButtonProps) {
    const classes = [
        "ui-btn",
        `ui-btn--${variant}`,
        `ui-btn--${size}`,
        fullWidth ? "ui-btn--full" : "",
        className,
    ].filter(Boolean).join(" ");

    if (to) {
        return (
            <Link className={classes} to={to} aria-label={ariaLabel}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                className={classes}
                href={href}
                download={download}
                target={target}
                rel={rel}
                aria-label={ariaLabel}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={classes}
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-expanded={ariaExpanded}
        >
            {children}
        </button>
    );
}
