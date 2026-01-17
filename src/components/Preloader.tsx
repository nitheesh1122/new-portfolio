"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setComplete(true), 2500); // Adjust duration as needed
        return () => clearTimeout(timer);
    }, []);

    if (complete) return null;

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.8 }}
            className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden"
        >
            <div className="relative overflow-hidden">
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
                >
                    Praneesh Chandran
                </motion.h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="h-1 bg-primary mt-4"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-gray-400 text-sm mt-2 text-center font-mono"
                >
                    praneesh.dev
                </motion.p>
            </div>
        </motion.div>
    );
}
