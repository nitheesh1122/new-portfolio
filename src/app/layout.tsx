import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as requested
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praneesh C | Aspiring Software Developer",
  description: "Portfolio of Praneesh C, an Aspiring Software Developer specializing in MERN stack and Python. View projects, skills, and resume.",
  keywords: ["aspiring software developer", "full stack developer", "MERN stack developer", "React developer", "Python developer", "student developer portfolio"],
  openGraph: {
    title: "Praneesh C | Aspiring Software Developer",
    description: "Portfolio of Praneesh C, an Aspiring Software Developer specializing in MERN stack and Python.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praneesh C - Portfolio",
    description: "Aspiring Software Developer | MERN & Python Projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-foreground bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
