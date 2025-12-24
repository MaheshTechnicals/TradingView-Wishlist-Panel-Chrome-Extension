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
  togglePanel.addEventListener('change', function() {
    const isEnabled = togglePanel.checked;
    
    // Save state
    browserAPI.storage.local.set({ panelEnabled: isEnabled }).then(function() {
      updateStatus(isEnabled);
      
      // Notify user to refresh
      showNotification(isEnabled);
    }).catch(function(error) {
      console.error('Error saving state:', error);
    });
  });

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
