"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [complete, setComplete] = useState(false);
    const [startExit, setStartExit] = useState(false);
    const [isGlitching, setIsGlitching] = useState(true);

    // Split the name. Letters are separate, spaces are their own character
    const text = "Praneesh Chandran";
    const letters = Array.from(text);

    useEffect(() => {
        // Stop glitching after letters mostly land (approx 1.2s)
        const glitchTimer = setTimeout(() => setIsGlitching(false), 1200);

        // Wait for entrance animation to likely finish (approx 1.5s) + reading time
        const exitTimer = setTimeout(() => setStartExit(true), 1800);

        // Remove from DOM after exit animation
        const completeTimer = setTimeout(() => setComplete(true), 2400);

        return () => {
            clearTimeout(glitchTimer);
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, []);

    if (complete) return null;

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={startExit ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden"
            style={{ "--background": "#000000" } as React.CSSProperties}
        >
            <div className="relative overflow-hidden flex flex-col items-center">
                <div className="flex overflow-hidden">
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            data-text={letter}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "backOut",
                                delay: index * 0.05 // Stagger effect for "falling"
                            }}
                            className={`text-4xl md:text-6xl font-bold text-white tracking-tighter ${letter === " " ? "w-4" : ""} ${isGlitching ? "glitch-active" : ""}`}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="h-1 bg-primary mt-4 w-full max-w-[200px]"
                />

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    className="text-gray-400 text-sm mt-3 font-mono"
                >
                    praneesh.dev
                </motion.p>
            </div>
        </motion.div>
    );
}
