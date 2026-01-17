"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";
import { useState } from "react";

export default function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-border bg-gray-50">
                        <div className="flex items-center gap-2 text-foreground font-semibold">
                            <FileText className="size-5 text-primary" />
                            Resume Preview
                        </div>
                        <div className="flex items-center gap-2">
                            <a
                                href="/resume.pdf"
                                download="Praneesh_Chandran_Resume.pdf"
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <Download className="size-4" />
                                Download PDF
                            </a>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X className="size-5 text-gray-500" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-200 overflow-hidden relative">
                        <iframe
                            src="/resume.pdf"
                            className="w-full h-full border-none"
                            title="Resume PDF"
                        />
                        {/* Fallback for mobile if iframe doesn't render PDF well */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden bg-white/90 px-4 py-2 rounded-full text-xs shadow-sm">
                            Tap 'Download' if preview doesn't load
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
