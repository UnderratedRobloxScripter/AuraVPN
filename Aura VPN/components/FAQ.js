function FAQ() {
    const [openIndex, setOpenIndex] = React.useState(0);

    const faqs = [
        {
            question: "How does Aura protect my privacy?",
            answer: "Aura routes your internet traffic through an encrypted tunnel, hiding your real IP address and location. We use military-grade AES-256 encryption, meaning your data is unreadable to anyone who might intercept it, including your ISP."
        },
        {
            question: "Do you keep any logs of my activity?",
            answer: "Absolutely not. We operate under a strict no-logs policy. We do not track, collect, or share your private data. Our headquarters are located in a privacy-friendly jurisdiction with no data retention laws."
        },
        {
            question: "Will using a VPN slow down my internet?",
            answer: "While all VPNs cause some speed reduction due to encryption overhead, Aura is engineered for speed. Our 10Gbps server network ensures minimal latency, often undetectable during browsing or streaming."
        },
        {
            question: "Can I use Aura on multiple devices?",
            answer: "Yes! A single Aura subscription covers up to 10 devices simultaneously. We have dedicated apps for Windows, macOS, iOS, Android, Linux, and even routers."
        }
    ];

    return (
        <section className="py-24 px-6 bg-black/20" data-name="faq" data-file="components/FAQ.js">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently asked questions</h2>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-panel rounded-2xl overflow-hidden transition-all duration-300">
                            <button 
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="font-medium text-white pr-8">{faq.question}</span>
                                <div className={`icon-chevron-down text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></div>
                            </button>
                            <div className={`px-6 text-gray-400 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-48 py-5 border-t border-white/5' : 'max-h-0'}`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}