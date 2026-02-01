import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TargetAudience } from "./components/TargetAudience";

import { Transformation } from "./components/Transformation";
import { GTMEngineArchitecture } from "./components/GTMEngineArchitecture";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { WhyThisWorks } from "./components/WhyThisWorks";
import { Footer } from "./components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-bg selection:bg-brand-pink/30 selection:text-brand-pink">
            <Navbar />
            <main>
                <Hero />
                <TargetAudience />
                <Transformation />

                <GTMEngineArchitecture />

                <WhatWeOffer />
                <WhyThisWorks />

                {/* Final CTA Section */}
                <section className="py-16 md:py-20 relative overflow-hidden border-t border-brand-border/50">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-pink/5 to-transparent" />
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-5xl md:text-7xl mb-8 font-bold">If Your GTM Feels Fragmented, It’s Time to <span className="text-brand-pink">Systemize It</span></h2>
                        <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                            We’ll map your current setup and show you exactly where leverage exists.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-12 py-5 bg-brand-pink text-brand-bg font-bold text-lg rounded-full hover:scale-105 transition-all glow-pink shadow-xl shadow-brand-pink/20">
                                Book a GTM Strategy Call
                            </button>
                        </div>
                        <p className="mt-6 text-sm text-text-secondary font-medium uppercase tracking-widest">
                            No pitch. Just architecture.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
