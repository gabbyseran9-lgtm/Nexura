
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexura - Smart Hardware Interface</title>
    <!-- Tailwind CSS CDN para sa Modernong Estilo -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        darkBg: '#0b0f19',
                        cardBg: '#151f32',
                        accentNeon: '#00d2ff',
                        accentGreen: '#05ffc4',
                        accentAlert: '#ff3860'
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom scrollbar para sa Event Console Terminal */
        .custom-scroll::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
            background: #0b0f19;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 3px;
        }
    </style>
</head>
<body class="bg-darkBg text-slate-100 min-h-screen font-sans antialiased">

    <!-- 1. NAVIGATION BAR -->
    <nav class="bg-cardBg/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div class="flex items-center space-x-3">
            <div class="h-9 w-9 bg-gradient-to-tr from-accentNeon to-blue-600 rounded-xl flex items-center justify-center font-bold text-darkBg text-xl shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                N
            </div>
            <div>
                <span class="text-xl font-black tracking-wider bg-gradient-to-r from-accentNeon to-indigo-400 bg-clip-text text-transparent">NEXURA</span>
                <span class="text-[10px] block text-slate-500 font-mono tracking-widest -mt-1">HARDWARE NODE v1.0.4</span>
            </div>
        </div>
        <div class="flex items-center space-x-4">
            <div id="connection-badge" class="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-full border border-accentGreen/30 shadow-[0_0_10px_rgba(5,255,196,0.05)]">
                <span id="status-dot" class="h-2.5 w-2.5 bg-accentGreen rounded-full animate-pulse"></span>
                <span id="status-text" class="text-xs font-mono font-bold text-accentGreen uppercase tracking-wider">Connected</span>
            </div>
        </div>
    </nav>

    <!-- 2. MAIN DASHBOARD CONTENT -->
    <main class="max-w-7xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- MGA MONITOR AT TELEMETRY (KALIWANG BAHAGI) -->
        <div class="lg:col-span-2 space-y-6">
            
            <!-- Real-time Metrics Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <!-- Card 1: Temperature -->
                <div class="bg-cardBg p-5 rounded-xl border border-slate-800 flex flex-col justify-between shadow-lg relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-1 h-full bg-accentNeon"></div>
                    <span class="text-xs font-bold text-slate-400 tracking-widest uppercase font-mono">Core Temperature</span>
                    <div class="flex items-baseline space-x-2 mt-3">
                        <span id="temp-val" class="text-4xl font-black text-white tracking-tight font-mono transition-all">45</span>
                        <span class="text-accentNeon font-bold text-sm">°C</span>
                    </div>
                    <div class="w-full bg-slate-950 h-2 rounded-full mt-4 overflow-hidden p-[1px]">
                        <div id="temp-bar" class="bg-gradient-to-r from-blue-500 to-accentNeon h-full rounded-full transition-all duration-500" style="width: 45%"></div>
                    </div>
                </div>

                <!-- Card 2: Voltage -->
                <div class="bg-cardBg p-5 rounded-xl border border-slate-800 flex flex-col justify-between shadow-lg relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                    <span class="text-xs font-bold text-slate-400 tracking-widest uppercase font-mono">Voltage Output</span>
                    <div class="flex items-baseline space-x-2 mt-3">
                        <span id="volt-val" class="text-4xl font-black text-white tracking-tight font-mono">5.02</span>
                        <span class="text-indigo-400 font-bold text-sm">V</span>
                    </div>
                    <div class="w-full bg-slate-950 h-2 rounded-full mt-4 overflow-hidden p-[1px]">
                        <div id="volt-bar" class="bg-gradient-to-r from-indigo-600 to-purple-500 h-full rounded-full transition-all duration-500" style="width: 83%"></div>
                    </div>
                </div>

                <!-- Card 3: Signal Link -->
                <div class="bg-cardBg p-5 rounded-xl border border-slate-800 flex flex-col justify-between shadow-lg relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-accentGreen"></div>
                    <span class="text-xs font-bold text-slate-400 tracking-widest uppercase font-mono">Signal Strength</span>
                    <div class="flex items-baseline space-x-2 mt-3">
                        <span id="rssi-val" class="text-4xl font-black text-white tracking-tight font-mono">-62</span>
                        <span class="text-accentGreen font-bold text-sm">dBm</span>
                    </div>
                    <div class="w-full bg-slate-950 h-2 rounded-full mt-4 overflow-hidden p-[1px]">
                        <div id="rssi-bar" class="bg-gradient-to-r from-teal-500 to-accentGreen h-full rounded-full transition-all duration-500" style="width: 76%"></div>
                    </div>
                </div>
            </div>

            <!-- Terminal Console Window -->
            <div class="bg-cardBg rounded-xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col h-[400px]">
                <div class="bg-slate-900 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <div class="flex space-x-1.5">
                            <span class="w-3 h-3 rounded-full bg-red-500/70 inline-block"></span>
                            <span class="w-3 h-3 rounded-full bg-yellow-500/70 inline-block"></span>
                            <span class="w-3 h-3 rounded-full bg-green-500/70 inline-block"></span>
                        </div>
                        <span class="text-xs font-mono font-semibold tracking-wider text-slate-400 ml-2">live_hardware_stream.log</span>
                    </div>
                    <button id="clear-console" class="text-[11px] font-mono uppercase bg-slate-950 px-2 py-1 rounded border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition">Clear</button>
                </div>
                <!-- Dito pumapasok ang mga logs gamit ang JavaScript -->
                <div id="console-logs" class="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-2 text-slate-300 custom-scroll bg-slate-950/50">
                    <div><span class="text-slate-500">[00:00:00]</span> <span class="text-accentNeon">[SYSTEM]</span> Initializing Nexura Node Interface Module...</div>
                    <div><span class="text-slate-500">[00:00:01]</span> <span class="text-accentGreen">[SUCCESS]</span> Communication protocol UART0 handshake bound at 115200 baud.</div>
                </div>
            </div>
        </div>

        <!-- MGA KONTROLAN AT PIN MAPPING (KANANG BAHAGI) -->
        <div class="space-y-6">
            
            <!-- Controllers Panel -->
            <div class="bg-cardBg p-6 rounded-xl border border-slate-800 shadow-xl space-y-6">
                <h3 class="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono border-b border-slate-800 pb-3">Hardware Controllers</h3>
                
                <!-- Switch 1 -->
                <div class="flex items-center justify-between p-3 bg-slate-950/40 rounded-lg border border-slate-800/60">
                    <div>
                        <p class="text-sm font-bold text-slate-200">Main Power Relay</p>
                        <p class="text-[11px] text-slate-500 font-mono">Relay Switch Loop A</p>
                    </div>
                    <button id="btn-power" onclick="toggleRelay('Main Power Relay', this)" class="px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all uppercase border border-accentGreen text-accentGreen bg-accentGreen/10 shadow-[0_0_10px_rgba(5,255,196,0.1)]">ON</button>
                </div>

                <!-- Switch 2 -->
                <div class="flex items-center justify-between p-3 bg-slate-950/40 rounded-lg border border-slate-800/60">
                    <div>
                        <p class="text-sm font-bold text-slate-200">Cooling Fan Array</p>
                        <p class="text-[11px] text-slate-500 font-mono">PWM Fan Speed Controller</p>
                    </div>
                    <button id="btn-fan" onclick="toggleRelay('Cooling Fan Array', this)" class="px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all uppercase border border-slate-700 text-slate-400 hover:bg-slate-900">OFF</button>
                </div>

                <!-- Hex Payload Dispatcher -->
                <div class="pt-4 border-t border-slate-800">
                    <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">Send Hex Payload (TX)</label>
                    <div class="flex space-x-2">
                        <input id="hex-input" type="text" placeholder="e.g., 0x41 0xFE 0x0A" class="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-accentNeon flex-1 font-mono tracking-wide">
                        <button onclick="sendHexPayload()" class="bg-gradient-to-r from-accentNeon to-blue-600 hover:opacity-90 text-darkBg font-black px-4 py-2 rounded-lg text-xs font-mono transition uppercase tracking-wider shadow-[0_0_15px_rgba(0,210,255,0.2)]">TX</button>
                    </div>
                </div>
            </div>

            <!-- Pin Out Diagram -->
            <div class="bg-cardBg p-6 rounded-xl border border-slate-800 shadow-xl">
                <h3 class="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono border-b border-slate-800 pb-3 mb-4">I/O Peripheral Pin Mapping</h3>
                <div class="grid grid-cols-4 gap-2 text-center font-mono text-[11px] font-bold">
                    <div class="bg-accentGreen/10 border border-accentGreen/30 text-accentGreen p-2 rounded">GND</div>
                    <div class="bg-blue-500/10 border border-blue-500/30 text-blue-400 p-2 rounded">RX0</div>
                    <div class="bg-blue-500/10 border border-blue-500/30 text-blue-400 p-2 rounded">TX0</div>
                    <div class="bg-accentAlert/10 border border-accentAlert/30 text-accentAlert p-2 rounded">VCC</div>
                    <div id="pin-d01" class="bg-slate-950 border border-slate-800 text-slate-500 p-2 rounded transition-all">D01</div>
                    <div id="pin-d02" class="bg-slate-950 border border-slate-800 text-slate-500 p-2 rounded transition-all">D02</div>
                    <div class="bg-purple-500/10 border border-purple-500/30 text-purple-400 p-2 rounded">A01</div>
                    <div class="bg-purple-500/10 border border-purple-500/30 text-purple-400 p-2 rounded">A02</div>
                </div>
            </div>

        </div>
    </main>

    <!-- 3. JAVASCRIPT CONNECTED UI LOGIC -->
    <script>
        // DOM Elements
        const consoleLogs = document.getElementById('console-logs');
        const clearConsoleBtn = document.getElementById('clear-console');
        const hexInput = document.getElementById('hex-input');

        // Function para magdagdag ng timestamps at entries sa Console Terminal
        function logToConsole(message, type = 'info') {
            const timestamp = new Date().toLocaleTimeString();
            const logRow = document.createElement('div');
            
            let typeTag = '<span class="text-blue-400">[INFO]</span>';
            if (type === 'success') typeTag = '<span class="text-accentGreen">[SUCCESS]</span>';
            if (type === 'warn') typeTag = '<span class="text-amber-400">[WARN]</span>';
            if (type === 'danger') typeTag = '<span class="text-accentAlert">[CRITICAL]</span>';
            if (type === 'tx') typeTag = '<span class="text-accentNeon">[TX_DATA]</span>';

            logRow.innerHTML = `<span class="text-slate-600">[${timestamp}]</span> ${typeTag} ${message}`;
            consoleLogs.appendChild(logRow);
            
            // Auto scroll pababa para laging huling log ang nakikita
            consoleLogs.scrollTop = consoleLogs.scrollHeight;
        }

        // Toggle Buttons Logic (Para sa mga switch)
        function toggleRelay(name, button) {
            const isCurrentlyOn = button.textContent === 'ON';
            
            if (isCurrentlyOn) {
                // Palitan papuntang OFF State
                button.textContent = 'OFF';
                button.className = "px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all uppercase border border-slate-700 text-slate-400 hover:bg-slate-900";
                logToConsole(`Command dispatched: Cut power to physical '${name}'.`, 'warn');
                
                if (name === 'Main Power Relay') {
                    handleSystemDisconnection();
                }
            } else {
                // Palitan papuntang ON State
                button.textContent = 'ON';
                button.className = "px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all uppercase border border-accentGreen text-accentGreen bg-accentGreen/10 shadow-[0_0_10px_rgba(5,255,196,0.1)]";
                logToConsole(`Command dispatched: Energized loop circuit for '${name}'.`, 'success');
                
                if (name === 'Main Power Relay') {
                    handleSystemConnection();
                }
            }
        }

        // Pag-handle ng system disconnection kapag pinatay ang Main Power
        function handleSystemDisconnection() {
            document.getElementById('status-dot').className = "h-2.5 w-2.5 bg-accentAlert rounded-full";
            document.getElementById('status-text').textContent = "Disconnected";
            document.getElementById('status-text').className = "text-xs font-mono font-bold text-accentAlert uppercase tracking-wider";
            document.getElementById('connection-badge').className = "flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-full border border-accentAlert/30 shadow-[0_0_10px_rgba(255,56,96,0.05)]";
            logToConsole("Hardware link dropped. Telemetry processing suspended.", 'danger');
        }

        // Pag-handle ng system reconnection kapag binuhay ang Main Power
        function handleSystemConnection() {
            document.getElementById('status-dot').className = "h-2.5 w-2.5 bg-accentGreen rounded-full animate-pulse";
            document.getElementById('status-text').textContent = "Connected";
            document.getElementById('status-text').className = "text-xs font-mono font-bold text-accentGreen uppercase tracking-wider";
            document.getElementById('connection-badge').className = "flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-full border border-accentGreen/30 shadow-[0_0_10px_rgba(5,255,196,0.05)]";
            logToConsole("Hardware link re-established. Syncing registers...", 'success');
        }

        // Custom Hex Transmitter (TX Command Button)
        function sendHexPayload() {
            const payload = hexInput.value.trim();
            if (!payload) return;

            logToConsole(`Transmitting hexadecimal stream [${payload}] over serial channel UART0.`, 'tx');
            
            // Visual feedback sa pin mapping framework kapag nag-transmit
            const pinD01 = document.getElementById('pin-d01');
            pinD01.className = "bg-accentNeon/20 border border-accentNeon/40 text-accentNeon p-2 rounded transition-all";
            
            setTimeout(() => {
                pinD01.className = "bg-slate-950 border border-slate-800 text-slate-500 p-2 rounded transition-all";
            }, 300);

            hexInput.value = '';
        }

        // Listener para burahin ang logs sa terminal window
        clearConsoleBtn.addEventListener('click', () => {
            consoleLogs.innerHTML = '';
            logToConsole("Event interface log buffers flushed.", 'info');
        });

        // SIMULATION ENGINE: Kusang nagpapabago-bago ng values kada 2.5 segundo para kunwari ay konektado sa totoong device
        setInterval(() => {
            const mainPowerActive = document.getElementById('btn-power').textContent === 'ON';
            
            // Kung naka-patay ang Main Power, huwag mag-update ng telemetry values
            if (!mainPowerActive) return;

            // 1. Core Temp Fluctuations
            const currentTemp = Math.floor(40 + Math.random() * 12);
            document.getElementById('temp-val').textContent = currentTemp;
            document.getElementById('temp-bar').style.width = `${currentTemp}%`;
            
            // Check dynamic styles kung delikado na ang init
            if(currentTemp > 49) {
                logToConsole(`Core registers report high junction thermal limit: ${currentTemp}°C`, 'warn');
            }

            // 2. Voltage Fluctuations (Target stable around 5V)
            const currentVolt = (4.96 + Math.random() * 0.12).toFixed(2);
            document.getElementById('volt-val').textContent = currentVolt;
            document.getElementById('volt-bar').style.width = `${(currentVolt / 6) * 100}%`;

            // 3. RSSI Signal Level Fluctuations
            const currentRssi = Math.floor(-72 + Math.random() * 18);
            document.getElementById('rssi-val').textContent = currentRssi;
            const rssiPercentage = Math.min(Math.max((currentRssi + 100) * 2, 0), 100);
            document.getElementById('rssi-bar').style.width = `${rssiPercentage}%`;

            // Random Status logs paminsan-minsan para sa interface realism
            if(Math.random() > 0.8) {
                const randomHexCheck = Math.floor(Math.random()*256).toString(16).toUpperCase();
                logToConsole(`Heartbeat packet acknowledged. Status register payload: 0x${randomHexCheck}`, 'info');
            }
        }, 2500);
    </script>
</body>
</html>
