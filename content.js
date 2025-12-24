// TradingView Wishlist Panel - Content Script
(function() {
  'use strict';

  // Use browser API (Firefox) or chrome API (Chrome) - both work cross-browser
  const browserAPI = (typeof browser !== 'undefined') ? browser : chrome;

  let stocks = [];
  let selectedIndex = 0;
  const STORAGE_KEY = 'tradingview_wishlist_selected';

  // Initialize the extension
  async function init() {
    // Check if panel is enabled
    const result = await browserAPI.storage.local.get(['panelEnabled']);
    const isEnabled = result.panelEnabled === true; // Default to false (OFF)
    
    if (!isEnabled) {
      console.log('TradingView Wishlist Panel is disabled');
      removePanel();
      return;
    }

    try {
      // Load stocks from list.txt
      const listUrl = browserAPI.runtime.getURL('list.txt');
        const response = await fetch(listUrl);
        const text = await response.text();
        stocks = text.trim().split('\n').filter(s => s.trim());

        if (stocks.length === 0) {
          console.error('No stocks found in list.txt');
          return;
        }

        // Get current symbol from URL
      const currentSymbol = getCurrentSymbolFromURL();
      
      // Try to restore selected index from storage or URL
      const savedData = await browserAPI.storage.local.get([STORAGE_KEY]);
      if (savedData[STORAGE_KEY] !== undefined) {
        selectedIndex = savedData[STORAGE_KEY];
      } else if (currentSymbol) {
        // Find matching stock in list
        const matchIndex = stocks.findIndex(s => s === currentSymbol);
        if (matchIndex !== -1) {
          selectedIndex = matchIndex;
        }
      }

      // Ensure valid index
      if (selectedIndex >= stocks.length) selectedIndex = 0;

      createPanel();
      setupKeyboardNavigation();
    } catch (error) {
      console.error('Error initializing TradingView Wishlist:', error);
    }
  }

  // Extract current symbol from TradingView URL
  function getCurrentSymbolFromURL() {
    try {
      const url = new URL(window.location.href);
      const symbolParam = url.searchParams.get('symbol');
      if (symbolParam) {
        // Decode URL encoding (NSE%3AINFY -> NSE:INFY)
        return decodeURIComponent(symbolParam);
      }
    } catch (e) {
      console.error('Error parsing URL:', e);
    }
    return null;
  }

  // Remove the wishlist panel
  function removePanel() {
    const existing = document.getElementById('tv-wishlist-panel');
    if (existing) {
      existing.remove();
      console.log('TradingView Wishlist Panel removed');
    }
  }

  // Create the wishlist panel
  function createPanel() {
    // Remove existing panel if any
    const existing = document.getElementById('tv-wishlist-panel');
    if (existing) existing.remove();

    // Create panel container
    const panel = document.createElement('div');
    panel.id = 'tv-wishlist-panel';
    panel.className = 'tv-wishlist-panel';

    // Create collapse button (outside header)
    const collapseBtn = document.createElement('button');
    collapseBtn.className = 'tv-wishlist-collapse-btn';
    collapseBtn.title = 'Hide Panel';
    collapseBtn.innerHTML = '<span class="tv-collapse-icon">‹</span>';

    // Create header
    const header = document.createElement('div');
    header.className = 'tv-wishlist-header';
    header.innerHTML = `
      <h3>📊 Wishlist</h3>
      <div class="tv-wishlist-subtitle">${stocks.length} Stocks</div>
    `;

    // Create list container
    const listContainer = document.createElement('div');
    listContainer.className = 'tv-wishlist-list';

    // Create stock items
    stocks.forEach((stock, index) => {
      const item = document.createElement('div');
      item.className = 'tv-wishlist-item';
      item.dataset.index = index;
      
      if (index === selectedIndex) {
        item.classList.add('active');
      }

      // Extract symbol name (NSE:INFY -> INFY)
      const symbolName = stock.split(':')[1] || stock;
      
      item.innerHTML = `
        <div class="tv-wishlist-item-number">${index + 1}</div>
        <div class="tv-wishlist-item-content">
          <span class="tv-wishlist-symbol">${symbolName}</span>
          <span class="tv-wishlist-exchange">${stock.split(':')[0]}</span>
        </div>
        <div class="tv-wishlist-arrow">→</div>
      `;

      item.addEventListener('click', () => selectStock(index));
      listContainer.appendChild(item);
    });

    // Assemble panel
    panel.appendChild(collapseBtn);
    panel.appendChild(header);
    panel.appendChild(listContainer);
    document.body.appendChild(panel);

    // Setup collapse/expand functionality
    const collapseIcon = collapseBtn.querySelector('.tv-collapse-icon');
    let isCollapsed = false;

    collapseBtn.addEventListener('click', () => {
      isCollapsed = !isCollapsed;
      
      if (isCollapsed) {
        panel.classList.add('collapsed');
        collapseIcon.textContent = '›'; // >
        collapseBtn.title = 'Show Panel';
      } else {
        panel.classList.remove('collapsed');
        collapseIcon.textContent = '‹'; // <
        collapseBtn.title = 'Hide Panel';
      }
    });

    // Scroll selected item into view
    setTimeout(() => {
      const activeItem = panel.querySelector('.tv-wishlist-item.active');
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }, 100);
  }

  // Select a stock and update chart
  function selectStock(index) {
    if (index < 0 || index >= stocks.length || index === selectedIndex) {
      if (index === selectedIndex) {
        // If clicking same stock, just navigate to it (refresh)
        navigateToStock(index);
      }
      return;
    }

    selectedIndex = index;
    
    // Save to storage
    browserAPI.storage.local.set({ [STORAGE_KEY]: selectedIndex });

    // Update UI
    updateActiveItem();

    // Navigate to new stock
    navigateToStock(index);
  }

  // Update active item styling
  function updateActiveItem() {
    const items = document.querySelectorAll('.tv-wishlist-item');
    items.forEach((item, idx) => {
      if (idx === selectedIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Scroll into view
    const activeItem = document.querySelector('.tv-wishlist-item.active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  // Navigate to stock chart
  function navigateToStock(index) {
    const stock = stocks[index];
    const encodedSymbol = encodeURIComponent(stock);
    // Use current domain instead of hardcoding
    const currentDomain = window.location.origin;
    const url = `${currentDomain}/chart/?symbol=${encodedSymbol}`;
    
    // Update URL and reload to show new chart
    window.location.href = url;
  }

  // Setup keyboard navigation (Arrow Up/Down)
  function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Only handle arrows if not typing in an input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (selectedIndex + 1) % stocks.length;
        selectStock(nextIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (selectedIndex - 1 + stocks.length) % stocks.length;
        selectStock(prevIndex);
      }
    });
  }

  // Listen for storage changes (toggle from popup)
  browserAPI.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.panelEnabled) {
      const isEnabled = changes.panelEnabled.newValue;
      
      if (isEnabled) {
        // Turn ON: initialize and create panel
        console.log('Panel enabled - loading...');
        init();
      } else {
        // Turn OFF: remove panel immediately
        console.log('Panel disabled - removing...');
        removePanel();
      }
    }
  });

  // Wait for page to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
