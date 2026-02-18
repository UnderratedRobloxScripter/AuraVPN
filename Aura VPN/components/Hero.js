function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center" data-name="hero" data-file="components/Hero.js">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-left">
                
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs text-gray-300 uppercase tracking-wider font-medium">System Operational</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        <span className="text-gradient block mb-2">Invisible Protection.</span>
                        <span className="text-white">Unstoppable Speed.</span>
                    </h1>
                    
                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        Aura isn't just a VPN. It's a digital shield forged in elegance. 
                        Browse the web with absolute anonymity wrapped in a beautiful, glass-like interface.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-8">
                        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:brightness-110 transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] flex items-center gap-2 group">
                            <span>Start Free Trial</span>
                            <div className="icon-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1"></div>
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-md transition-all">
                            View Server Map
                        </button>
                    </div>

                    <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/5">
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">9.8k+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Servers</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">92</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Countries</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">0%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Logs</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">10Gb</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Speed</div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-float">
                    <ConnectionWidget />
                </div>
            </div>
        </section>
    );
}