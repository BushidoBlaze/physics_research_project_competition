import type {ReactNode} from "react";
import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <div className="layout" id="top">
            <Header/>
            <main className="layout__content">
                {children}
            </main>
            <Footer/>
        </div>
    );
}