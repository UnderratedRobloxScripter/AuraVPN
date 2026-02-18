function Features() {
    const features = [
        {
            icon: "icon-shield-check",
            title: "Military-Grade Encryption",
            description: "Your data is locked behind AES-256 encryption. Virtually impossible to crack, ensuring your secrets stay secret."
        },
        {
            icon: "icon-zap",
            title: "Lightning Fast",
            description: "Optimized for streaming and gaming. No buffering, no lag, just pure speed delivered through our proprietary protocol."
        },
        {
            icon: "icon-globe",
            title: "Global Access",
            description: "Break down digital borders. Access content from anywhere in the world with a single click."
        },
        {
            icon: "icon-ghost",
            title: "Complete Anonymity",
            description: "We don't track you. We don't log you. Your digital footprint vanishes the moment you connect."
        },
        {
            icon: "icon-smartphone",
            title: "Multi-Device Support",
            description: "Secure your iPhone, Android, Mac, Windows, and Linux devices simultaneously with one account."
        },
        {
            icon: "icon-headset",
            title: "24/7 Expert Support",
            description: "Real humans, real help. Our team of network engineers is available around the clock."
        }
    ];

    return (
        <section id="features" className="py-24 px-6 relative" data-name="features" data-file="components/Features.js">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for perfection.</h2>
                    <p className="text-gray-400 text-lg">
                        Experience the internet as it was meant to be: open, fast, and secure. 
                        Aura combines power with simplicity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <GlassCard key={index} className="group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className={`${feature.icon} text-2xl text-purple-400`}></div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}