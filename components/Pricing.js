function Pricing() {
    const plans = [
        {
            name: "Monthly",
            price: "$9.99",
            period: "/mo",
            description: "Perfect for trying the service with full flexibility.",
            features: ["5 Devices", "All Server Locations", "High-Speed Streaming", "No-Logs Policy"],
            highlight: false
        },
        {
            name: "2 Years",
            price: "$4.99",
            period: "/mo",
            billed: "Billed $119.76 every 2 years",
            description: "Maximum savings for long-term protection.",
            features: ["Unlimited Devices", "Dedicated IP Option", "Ad & Tracker Blocker", "24/7 Priority Support", "3 Months Free"],
            highlight: true
        },
        {
            name: "1 Year",
            price: "$6.99",
            period: "/mo",
            billed: "Billed $83.88 yearly",
            description: "Smart choice for consistent privacy and savings.",
            features: ["10 Devices", "All Server Locations", "Malware Protection", "Standard Support"],
            highlight: false
        }
    ];


    return (
        <section id="pricing" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Premium privacy.<br/>Accessible price.
                    </h2>
                    <p className="text-gray-400">
                        30-day money-back guarantee on all plans.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative glass-panel rounded-3xl p-8 transition-transform duration-300 ${plan.highlight ? 'scale-105 border-purple-500/50 bg-purple-900/10 z-10 shadow-[0_0_40px_rgba(124,58,237,0.2)]' : 'hover:scale-105'}`}>
                            
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                    Best Value
                                </div>
                            )}

                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

                            <div className="flex items-end gap-1 mb-1">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-400 mb-1">{plan.period}</span>
                            </div>

                            {plan.billed && (
                                <p className="text-xs text-purple-300 mb-4">{plan.billed}</p>
                            )}

                            <p className="text-gray-400 text-sm mb-8 leading-relaxed border-b border-white/5 pb-8">
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="icon-check text-green-400 w-4 h-4"></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
