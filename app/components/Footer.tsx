"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-20 border-t border-brand-border mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-brand-pink flex items-center justify-center font-space-grotesk font-bold text-brand-bg">
                                J
                            </div>
                            <span className="text-xl font-space-grotesk font-bold tracking-tight">
                                JUGGERNOT<span className="text-brand-pink">AI</span>
                            </span>
                        </div>
                        <p className="text-text-secondary max-w-xs mb-8">
                            The infrastructure for the next generation of GTM teams.
                            Powering operational certainty with AI-native systems.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Infrastructure</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Solutions</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Lead Gen</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Content</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">AI Voice</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Analytics</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Security</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-brand-pink transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-text-secondary">
                        © 2024 JuggernotAI. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-text-secondary">
                        <Link href="#" className="hover:text-text-primary transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-text-primary transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-text-primary transition-colors">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
