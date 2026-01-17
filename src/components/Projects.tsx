"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa"; // Using React Icons Github

type Project = {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    date: string;
    github?: string;
    demo?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Centralized Blood Bank Network Hub",
        description: "Integrated platform for hospitals, blood banks, and donors with stock management.",
        longDescription: "A comprehensive solution connecting hospitals, blood banks, receivers, and donors. Features include FIFO Stock management, an integrated chatbot for queries, and an emergency call feature to streamline critical communication during blood requirements.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        date: "July 2025",
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Integrated Camera View Portal",
        description: "Cloud-based camera streaming portal for multi-location monitoring.",
        longDescription: "Currently working on a project where cameras from 5 different locations are connected to the cloud and streamed to a centralized public portal. Allows real-time viewing accessibility.",
        techStack: ["HTML", "Python", "Cloud"],
        date: "Ongoing",
        github: "#",
    },
    {
        id: 3,
        title: "Senior Citizen Support Portal",
        description: "All-in-one platform for senior citizens including medical and grocery services.",
        longDescription: "Developed a platform offering doctor appointments, grocery delivery, and other essential features tailored for senior citizens. Includes Face Login models for ease of access.",
        techStack: ["MERN Stack", "FaceModels"],
        date: "May 2025",
        github: "#",
    },
    {
        id: 4,
        title: "Sentiment Analysis Using AI",
        description: "Emotion classification tool using VADER sentiment analysis.",
        longDescription: "Built a sentiment analyzer that classifies emotions from user input text using the VADER Sentiment analysis tool. Useful for feedback analysis and social monitoring.",
        techStack: ["Python", "VADER"],
        date: "May 2025",
        github: "#",
    },
    {
        id: 5,
        title: "Maserati Website Clone",
        description: "Enterprise-level product website recreation with modern UI.",
        longDescription: "Recreated and enhanced the Maserati enterprise product website. Focused on modern features, responsive design, and high-quality visual presentation.",
        techStack: ["MERN Stack"],
        date: "May 2025",
        github: "#",
    }
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const selectedProject = projects.find(p => p.id === selectedId);

    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work in web development and software engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow cursor-pointer group relative"
                            onClick={() => setSelectedId(project.id)}
                            whileHover={{ y: -5 }}
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Code className="size-6" />
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <div className="p-2 bg-gray-100 rounded-full text-foreground hover:bg-gray-200 transition-colors" title="View Source">
                                                <FaGithub className="size-4" />
                                            </div>
                                        )}
                                        <span className="text-xs font-medium text-muted-foreground border border-border px-2 py-1 rounded-full flex items-center">
                                            {project.date}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-xs bg-muted text-foreground px-2 py-1 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-colors"
                                onClick={() => setSelectedId(null)}
                            />
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                                <motion.div
                                    layoutId={`card-${selectedId}`}
                                    className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
                                >
                                    <div className="relative p-6 md:p-8">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                            className="absolute top-4 right-4 p-2 bg-muted rounded-full hover:bg-muted-foreground/20 transition-colors"
                                        >
                                            <X className="size-5" />
                                        </button>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h3>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {selectedProject.techStack.map(tech => (
                                                <span key={tech} className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="prose prose-sm max-w-none text-muted-foreground mb-8">
                                            <p>{selectedProject.longDescription}</p>
                                        </div>

                                        <div className="flex gap-4">
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 inline-flex items-center justify-center h-12 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors gap-2"
                                            >
                                                <FaGithub className="size-5" />
                                                View Source
                                            </a>
                                            <a
                                                href={selectedProject.demo || "#"}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 inline-flex items-center justify-center h-12 rounded-lg border border-border bg-white text-foreground font-medium hover:bg-gray-50 transition-colors gap-2"
                                            >
                                                <ExternalLink className="size-5" />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
