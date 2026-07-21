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
