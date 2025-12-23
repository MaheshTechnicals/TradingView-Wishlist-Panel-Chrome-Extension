// Popup script for toggle control
document.addEventListener('DOMContentLoaded', function() {
  const togglePanel = document.getElementById('togglePanel');
  const statusDiv = document.getElementById('status');

  // Load saved state
  chrome.storage.local.get(['panelEnabled'], function(result) {
    const isEnabled = result.panelEnabled === true; // Default to false (OFF)
    togglePanel.checked = isEnabled;
    updateStatus(isEnabled);
  });

  // Handle toggle change
  togglePanel.addEventListener('change', function() {
    const isEnabled = togglePanel.checked;
    
    // Save state
    chrome.storage.local.set({ panelEnabled: isEnabled }, function() {
      updateStatus(isEnabled);
      
      // Notify user to refresh
      showNotification(isEnabled);
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
