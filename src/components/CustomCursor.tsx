"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Dynamic Hover Detection (Event Delegation)
            const target = e.target as HTMLElement;
            // Check if the hovered element or its parent is interactive
            const isInteractive = target.closest("a, button, input, textarea, [role='button'], .cursor-hover");
            setLinkHovered(!!isInteractive);
        };

        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);
        const onMouseLeave = () => setHidden(true);
        const onMouseEnter = () => setHidden(false);

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    if (typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block w-4 h-4 bg-white"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: clicked ? 0.8 : linkHovered ? 2.5 : 1, // Larger scale on hover
                    rotate: linkHovered ? 45 : 0, // Diamond rotation on hover
                    opacity: hidden ? 0 : 1,
                    borderRadius: linkHovered ? "0%" : "20%" // Transforms to sharp square on hover
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
        </>
    );
}
