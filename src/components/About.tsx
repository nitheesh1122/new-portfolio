"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Me</h2>

                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
                        <p>
                            I am a final-year Computer Science student at <span className="font-semibold text-foreground">Kongu Engineering College</span> with a strong academic track record and a genuine drive for engineering. My journey began with a varied curiosity for how things work, which quickly evolved into a focused passion for building robust software solutions.
                        </p>
                        <p>
                            I specialize in the <span className="text-primary font-medium">MERN stack</span> (MongoDB, Express, React, Node.js) and enjoy crafting responsive, user-centric web applications. Beyond the syntax, I value clean architecture and efficient problem-solving—skills I’ve honed through competitive programming and hackathon wins like <span className="text-secondary font-medium">HackOn'2.0</span>.
                        </p>
                        <p>
                            I’m seeking a role where I can contribute meaningful code, learn from experienced teams, and help build products that make a real difference.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
