"use client";
import React, { useState } from "react";
import {
    Navbar as ResizableNavbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export function Navbar() {
    const navItems = [
        {
            name: "Infrastructure",
            link: "#infrastructure",
        },
        {
            name: "Solutions",
            link: "#solutions",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <ResizableNavbar>
            {/* Desktop Navigation */}
            <NavBody className="border-brand-border/50">
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-sm font-medium hover:text-brand-pink transition-colors px-4 py-2">
                        Log in
                    </button>
                    <NavbarButton variant="pink" className="rounded-full px-6">
                        Book Demo
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader className="px-6 py-2 border border-brand-border/50 rounded-full bg-brand-surface/50 backdrop-blur-md">
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                    className="mt-2 bg-brand-surface/90 backdrop-blur-xl border-brand-border/50"
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-text-secondary hover:text-white transition-colors w-full py-2 font-medium"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4 mt-4 pt-4 border-t border-brand-border/50">
                        <button className="w-full text-sm font-medium hover:text-brand-pink transition-colors py-2">
                            Log in
                        </button>
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="pink"
                            className="w-full rounded-full"
                        >
                            Book Demo
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </ResizableNavbar>
    );
}
