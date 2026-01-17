"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Certifications</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Validated expertise in industry-standard technologies.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-2xl border border-border shadow-md max-w-md w-full flex items-center gap-6"
                    >
                        <div className="p-4 bg-green-100 text-green-600 rounded-full shrink-0">
                            <Award className="size-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">MongoDB Certified Associate Developer</h3>
                            <p className="text-muted-foreground mt-1">Issued: 2025</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
