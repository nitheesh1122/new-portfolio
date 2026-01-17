"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react"; // Changed Download to Eye for viewing
import { useState, useEffect } from "react";

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
    const roles = ["Aspiring Software Developer", "MERN Stack Specialist", "Tech Enthusiast"];
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleType = () => {
            const fullText = roles[currentRole];

            setDisplayText(prev => isDeleting
                ? fullText.substring(0, prev.length - 1)
                : fullText.substring(0, prev.length + 1)
            );

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole, roles]);

    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-sm md:text-base font-semibold text-primary uppercase tracking-wide mb-2 h-6">
                                {displayText}<span className="animate-pulse">|</span>
                            </h2>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">Praneesh Chandran</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
                                I build effective and scalable software solutions. Passionate about MERN stack development and solving complex problems with code.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                        >
                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                            >
                                View Projects
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                            <button
                                onClick={onOpenResume}
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-border text-foreground font-medium hover:bg-gray-50 transition-colors"
                            >
                                View Resume
                                <Eye className="ml-2 size-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Visual / Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                            {/* Background gradient blur */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl border-4 border-white shadow-2xl overflow-hidden bg-gray-100 rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/profile.jpg"
                                    alt="Praneesh C"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
