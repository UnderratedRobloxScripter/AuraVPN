function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/50 py-12 px-6" data-name="footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                            <div className="icon-shield text-white text-[10px]"></div>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white">Aura</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                        Redefining privacy with elegance. <br />
                        Secure your digital life today.
                    </p>
                </div>
                
                <div>
                    <h4 className="text-white font-semibold mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Download</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Servers</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
                &copy; 2026 Aura VPN. All rights reserved.
            </div>
        </footer>
    );
}