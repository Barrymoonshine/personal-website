import "./globals.css";
import Header from "./components/Header"; 
import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";

export const metadata = {
    title: "Nick Sheward — Personal Website",
    description: "Portfolio and personal site for Software Engineer Nick Sheward"
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Sidebar />
                <div className="main-container">
                    <Header />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}