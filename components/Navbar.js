function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl" data-name="navbar" data-file="components/Navbar.js">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                        <div className="icon-shield text-white text-sm"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tight">Aura</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
                    <a href="#network" className="text-sm text-gray-400 hover:text-white transition-colors">Network</a>
                    <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-sm text-white hover:text-gray-300 transition-colors">Log in</button>
                    <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Get Aura
                    </button>
                </div>
            </div>
        </nav>
    );
}