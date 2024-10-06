import Image from "next/image";
import localFont from "next/font/local";
import LandingPage from "@/components/landing/LandingPage";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

export default function Home() {
    return (
        <section className="text-4xl w-[100vw] ">
            <LandingPage />
        </section>
    );
}
