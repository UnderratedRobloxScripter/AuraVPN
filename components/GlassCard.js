function GlassCard({ children, className = "" }) {
    return (
        <div className={`glass-panel rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] ${className}`} data-name="glass-card" data-file="components/GlassCard.js">
            {children}
        </div>
    );
}