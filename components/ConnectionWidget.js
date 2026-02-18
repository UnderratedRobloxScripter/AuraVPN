function ConnectionWidget() {
    const [isConnected, setIsConnected] = React.useState(false);
    const [isConnecting, setIsConnecting] = React.useState(false);
    const [location, setLocation] = React.useState("Seattle, US");
    const [ip, setIp] = React.useState("192.168.1.1");
    const [duration, setDuration] = React.useState("00:00:00");

    React.useEffect(() => {
        let interval;
        if (isConnected) {
            const startTime = Date.now();
            interval = setInterval(() => {
                const diff = Date.now() - startTime;
                const date = new Date(diff);
                const h = String(date.getUTCHours()).padStart(2, '0');
                const m = String(date.getUTCMinutes()).padStart(2, '0');
                const s = String(date.getUTCSeconds()).padStart(2, '0');
                setDuration(`${h}:${m}:${s}`);
            }, 1000);
            setIp("104.28.142.1"); // Fake VPN IP
            setLocation("Tokyo, JP");
        } else {
            setIp("192.168.1.1");
            setLocation("Seattle, US");
            setDuration("00:00:00");
        }
        return () => clearInterval(interval);
    }, [isConnected]);

    const handleConnect = () => {
        if (isConnected) {
            setIsConnected(false);
            return;
        }
        setIsConnecting(true);
        setTimeout(() => {
            setIsConnecting(false);
            setIsConnected(true);
        }, 1500);
    };

    return (
        <div className="relative group w-full max-w-sm mx-auto" data-name="connection-widget" data-file="components/ConnectionWidget.js">
            {/* Glow effect behind widget */}
            <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20 transition-opacity duration-500 ${isConnected ? 'opacity-40' : 'opacity-20'}`}></div>
            
            <div className="relative glass-panel rounded-3xl p-6 border border-white/10 backdrop-blur-2xl bg-black/40 shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-red-500'}`}></div>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{isConnected ? 'Protected' : 'Unprotected'}</span>
                    </div>
                    <div className="icon-settings text-gray-400 hover:text-white cursor-pointer transition-colors"></div>
                </div>

                {/* Main Button Area */}
                <div className="flex justify-center mb-8">
                    <button 
                        onClick={handleConnect}
                        disabled={isConnecting}
                        className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 
                            ${isConnected 
                                ? 'bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-500/30' 
                                : 'bg-white/5 border-white/10 hover:bg-white/10'} 
                            border-2`}
                    >
                        {/* Ripples when connecting */}
                        {isConnecting && (
                            <>
                                <div className="absolute inset-0 rounded-full border border-purple-500/50 animate-[ping_1.5s_ease-out_infinite]"></div>
                                <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-[ping_1.5s_ease-out_infinite_200ms]"></div>
                            </>
                        )}
                        
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg
                            ${isConnected ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/20' : 'bg-gradient-to-br from-purple-600 to-blue-600 shadow-purple-500/20 group-hover:scale-105'}
                        `}>
                            <div className={`icon-power text-3xl text-white transition-all duration-300 ${isConnected ? 'scale-110' : ''}`}></div>
                        </div>
                    </button>
                </div>

                {/* Status Details */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <div className="icon-map-pin text-gray-300 text-xs"></div>
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Location</div>
                                <div className="text-sm text-white font-medium">{location}</div>
                            </div>
                        </div>
                        <div className="icon-chevron-right text-gray-600"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                         <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-left">
                            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">IP Address</div>
                            <div className="text-sm text-gray-300 font-mono">{ip}</div>
                         </div>
                         <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-left">
                            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Duration</div>
                            <div className="text-sm text-gray-300 font-mono">{duration}</div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}