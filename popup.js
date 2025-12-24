// Popup script for toggle control
document.addEventListener('DOMContentLoaded', function() {
  // Use browser API (Firefox) or chrome API (Chrome) - both work cross-browser
  const browserAPI = (typeof browser !== 'undefined') ? browser : chrome;
  
  const togglePanel = document.getElementById('togglePanel');
  const statusDiv = document.getElementById('status');

  // Load saved state
  browserAPI.storage.local.get(['panelEnabled']).then(function(result) {
    const isEnabled = result.panelEnabled === true; // Default to false (OFF)
    togglePanel.checked = isEnabled;
    updateStatus(isEnabled);
  }).catch(function(error) {
    console.error('Error loading state:', error);
  });

  // Handle toggle change
  togglePanel.addEventListener('change', async function() {
    const isEnabled = togglePanel.checked;
    
    // Save state
    try {
      await browserAPI.storage.local.set({ panelEnabled: isEnabled });
      updateStatus(isEnabled);
      
      // If enabled, check if user is on TradingView
      if (isEnabled) {
        await checkAndNavigateToTradingView();
      }
      
      // Notify user
      showNotification(isEnabled);
    } catch (error) {
      console.error('Error saving state:', error);
    }
  });

  // Check current tab and navigate to TradingView if needed
  async function checkAndNavigateToTradingView() {
    try {
      const tabs = await browserAPI.tabs.query({ active: true, currentWindow: true });
      if (tabs.length > 0) {
        const currentTab = tabs[0];
        const url = currentTab.url || '';
        
        // Check if already on TradingView
        const isTradingView = url.includes('tradingview.com');
        
        if (!isTradingView) {
          // Navigate to TradingView chart page
          await browserAPI.tabs.update(currentTab.id, {
            url: 'https://in.tradingview.com/chart/'
          });
        }
      }
    } catch (error) {
      console.error('Error checking/navigating to TradingView:', error);
    }
  }

  function updateStatus(isEnabled) {
    if (isEnabled) {
      statusDiv.textContent = 'Panel is Active ✓';
      statusDiv.className = 'status on';
    } else {
      statusDiv.textContent = 'Panel is Hidden (OFF)';
      statusDiv.className = 'status off';
    }
  }

  function showNotification(isEnabled) {
    const message = isEnabled ? 'Panel enabled instantly!' : 'Panel removed instantly!';
    
    // Animate status
    statusDiv.style.transform = 'scale(1.05)';
    setTimeout(() => {
      statusDiv.style.transform = 'scale(1)';
    }, 200);
  }
});
