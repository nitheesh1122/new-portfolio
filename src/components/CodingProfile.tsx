"use client";

import { GitHubCalendar } from "react-github-calendar";
import Image from "next/image";
// @ts-ignore
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CodingProfile() {
    return (
        <section id="coding-profile" className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding Profile</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My contributions and problem-solving journey on GitHub and LeetCode.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* GitHub Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between w-full items-center mb-6">
                            <h3 className="text-xl font-bold">GitHub Contributions</h3>
                            <a
                                href="https://github.com/Praneesh773"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium"
                            >
                                Praneesh773 <ExternalLink className="size-4" />
                            </a>
                        </div>
                        <div className="w-full flex justify-center overflow-x-auto pb-2">
                            <GitHubCalendar
                                username="Praneesh773"
                                blockSize={12}
                                blockMargin={5}
                                fontSize={16}
                                colorScheme="light"
                                style={{ color: "var(--foreground)" }}
                            />
                        </div>
                    </motion.div>

                    {/* LeetCode Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow h-full"
                    >
                        <div className="flex justify-between w-full items-center mb-6">
                            <h3 className="text-xl font-bold">LeetCode Stats</h3>
                            <a
                                href="https://leetcode.com/u/Praneeshc/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium"
                            >
                                Praneeshc <ExternalLink className="size-4" />
                            </a>
                        </div>
                        {/* LeetCode Stats Card - Using a popular open-source generator */}
                        <div className="relative w-full max-w-[500px] aspect-[2/1]">
                            <Image
                                src="https://leetcard.jacoblin.cool/Praneeshc?theme=light&font=Inter&ext=heatmap"
                                alt="LeetCode Stats"
                                fill
                                className="object-contain rounded-lg shadow-sm"
                                unoptimized // Optional: if external generator doesn't play nice with optimization, but usually fine
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
