export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-border">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-muted-foreground font-medium">
                    Built with React, Next.js & Tailwind CSS
                </p>
                <p className="text-xs text-muted-foreground/60 mt-2">
                    © {new Date().getFullYear()} Praneesh Chandran. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
