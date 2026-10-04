import React from "react";

interface PageContentProps {
    children: React.ReactNode;
}

export default function PageContent({ children }: PageContentProps) {
    return (
        <div className="page__content">
            {children}
        </div>
    );
}
