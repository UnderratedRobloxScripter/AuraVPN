function ServerMap() {
    return (
        <section id="network" className="py-24 px-6 relative overflow-hidden" data-name="server-map" data-file="components/ServerMap.js">
             {/* Background map graphic (Abstract) */}
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Simplified world map outline dots or paths could go here. Using abstract dots for now. */}
                    <circle cx="200" cy="150" r="2" fill="white" className="animate-pulse" />
                    <circle cx="250" cy="180" r="2" fill="white" className="animate-pulse animation-delay-200" />
                    <circle cx="800" cy="120" r="2" fill="white" className="animate-pulse animation-delay-400" />
                    <circle cx="500" cy="100" r="2" fill="white" className="animate-pulse" />
                    <circle cx="550" cy="140" r="2" fill="white" className="animate-pulse animation-delay-200" />
                    <circle cx="850" cy="300" r="2" fill="white" className="animate-pulse animation-delay-400" />
                 </svg>
                 <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)] via-transparent to-[var(--bg-color)]"></div>
             </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Global Reach, <br/>
                            <span className="text-gradient">Local Presence.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            Our network spans 92 countries with over 9,800 ultra-fast servers. 
                            Whether you need an IP in Tokyo, London, or New York, Aura puts the world at your fingertips.
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                    <span className="font-semibold text-white">Americas</span>
                                </div>
                                <span className="text-sm text-gray-500">2,400+ Servers</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                    <span className="font-semibold text-white">Europe</span>
                                </div>
                                <span className="text-sm text-gray-500">3,100+ Servers</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    <span className="font-semibold text-white">Asia Pacific</span>
                                </div>
                                <span className="text-sm text-gray-500">1,800+ Servers</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors">
                                View full server list
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full max-w-lg">
                        {/* Abstract Server Globe Graphic */}
                        <div className="relative aspect-square rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
                            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite]"></div>
                            <div className="absolute inset-8 rounded-full border border-dashed border-white/5 animate-[spin_20s_linear_infinite_reverse]"></div>
                            
                            {/* Central Hub */}
                            <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.3)]">
                                <div className="icon-globe text-4xl text-white"></div>
                            </div>

                            {/* Floating "Nodes" */}
                            <div className="absolute top-1/4 left-1/4 w-12 h-12 glass-panel rounded-full flex items-center justify-center animate-float animation-delay-200">
                                <span className="text-[10px] font-bold">US</span>
                            </div>
                            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 glass-panel rounded-full flex items-center justify-center animate-float animation-delay-400">
                                <span className="text-[10px] font-bold">JP</span>
                            </div>
                            <div className="absolute top-1/3 right-1/4 w-10 h-10 glass-panel rounded-full flex items-center justify-center animate-float">
                                <span className="text-[10px] font-bold">UK</span>
                            </div>
                            <div className="absolute bottom-1/3 left-1/4 w-14 h-14 glass-panel rounded-full flex items-center justify-center animate-float animation-delay-200">
                                <span className="text-[10px] font-bold">DE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}