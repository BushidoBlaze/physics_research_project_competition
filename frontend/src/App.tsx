import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

import './assets/styles/fonts.css';
import './assets/styles/reset.css';

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home/>
                    </MainLayout>
                }
            />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
