"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import confetti from "canvas-confetti";
import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        // Trigger Confetti
        const end = Date.now() + 1000;
        const colors = ['#8b5cf6', '#ec4899', '#ffffff'];

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Reset after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            I am actively seeking opportunities for <span className="text-foreground font-medium">internships, freelance projects, and full-time roles</span> in software development.
                            Whether you have a question, a project idea, or just want to connect, I’d love to hear from you!
                        </p>

                        <div className="space-y-8">
                            {/* Email (Primary) */}
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                                    <Mail className="size-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a href="mailto:praneeshchandran06@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                                        praneeshchandran06@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Social Bar */}
                            <div>
                                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Praneesh773" target="_blank" rel="noreferrer" className="p-4 bg-muted rounded-xl hover:bg-gray-900 hover:text-white transition-all hover:scale-110">
                                        <FaGithub className="size-6" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/praneesh773" target="_blank" rel="noreferrer" className="p-4 bg-muted rounded-xl hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110">
                                        <FaLinkedin className="size-6" />
                                    </a>
                                    <a href="#" target="_blank" rel="noreferrer" className="p-4 bg-muted rounded-xl hover:bg-[#f89f1b] hover:text-white transition-all hover:scale-110">
                                        <SiLeetcode className="size-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-muted/30 p-8 rounded-2xl border border-border"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white transition-colors"
                                    placeholder="Hello, I'd like to discuss..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={submitted}
                                className="w-full h-12 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {submitted ? "Message Sent!" : "Send Message"}
                                {!submitted && <Send className="size-4" />}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
