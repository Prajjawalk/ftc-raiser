import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import ContextProvider from '@/context'
import {headers} from "next/headers";
import Navbar from "@/components/nav-bar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "FtC Chiang Mai Raiser",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const cookies = headers().get('cookie')
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ContextProvider cookies={cookies}>
            <Navbar />
            {children}
            <footer className="flex gap-6 flex-wrap items-center justify-center p-4 bg-[#F4EFEA]">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.fundingthecommons.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Built at Funding the Commons
                </a>
            </footer>
        </ContextProvider></body>
        </html>
        
    );
}
