document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("graph-canvas");
  const efficiencyText = document.getElementById("efficiency-val");
  const loadText = document.getElementById("load-val");
  const optimizeBtn = document.getElementById("optimize-btn");
  const cycleBtn = document.getElementById("cycle-btn");

  const BAR_COUNT = 24;
  let barElements = [];
  let baseSystemLoad = 42.8;
  let optimizationMode = false;

  // 1. Programmatically assemble the layout visualization columns
  function initGraph() {
    canvas.innerHTML = '';
    barElements = [];
    for (let i = 0; i < BAR_COUNT; i++) {
      const bar = document.createElement("div");
      bar.classList.add("graph-bar");
      // Give bars a starting random height curve
      const startingHeight = Math.floor(Math.random() * 50) + 20;
      bar.style.height = `${startingHeight}%`;
      canvas.appendChild(bar);
      barElements.push(bar);
    }
  }

  // 2. Continuous Telemetry Update Loop Simulation
  function updateTelemetry() {
    // Generate organic flux baseline
    let targetEfficiency = optimizationMode 
      ? 98.4 + (Math.random() * 1.2) 
      : 92.1 + (Math.random() * 3.5);
      
    let targetLoad = baseSystemLoad + (Math.sin(Date.now() / 5000) * 4) + (Math.random() * 2);

    // Apply data values into DOM strings safely
    efficiencyText.textContent = `${targetEfficiency.toFixed(1)}%`;
    loadText.textContent = `${targetLoad.toFixed(1)} Gb/s`;
    
    // Animate individual track nodes sequentially
    barElements.forEach((bar, index) => {
      setTimeout(() => {
        let variance = optimizationMode ? 15 : 45;
        let skew = optimizationMode ? 65 : 15;
        let finalHeight = Math.floor(Math.random() * variance) + skew;
        bar.style.height = `${finalHeight}%`;
      }, index * 15); // Layered delay cascading effect
    });
  }

  // 3. Command Interactions Bindings
  optimizeBtn.addEventListener("click", () => {
    optimizationMode = !optimizationMode;
    
    if (optimizationMode) {
      optimizeBtn.textContent = "System Optimized";
      optimizeBtn.style.filter = "hue-rotate(45deg)"; // Change gradient output to green hues
      efficiencyText.style.color = "#00c6fb";
    } else {
      optimizeBtn.textContent = "Optimize Nodes";
      optimizeBtn.style.filter = "none";
      efficiencyText.style.color = "";
    }
    updateTelemetry();
  });

  cycleBtn.addEventListener("click", () => {
    // Simulate cycling networks frequency payload changes
    baseSystemLoad = 20 + Math.random() * 60;
    
    // Flash text to communicate visual acknowledgment
    loadText.style.opacity = "0.3";
    setTimeout(() => {
      loadText.style.opacity = "1";
      updateTelemetry();
    }, 150);
  });

  // Execute initial startup tasks
  initGraph();
  updateTelemetry();
  
  // Keep live telemetry loop executing every 2.5 seconds
  setInterval(updateTelemetry, 2500);
});
