// Browser API Polyfill for Chrome & Firefox compatibility
// This ensures the extension works on both Chrome and Firefox

(function() {
  'use strict';

  // If browser API doesn't exist but chrome does, create a wrapper
  if (typeof browser === "undefined" && typeof chrome !== "undefined") {
    // Simple polyfill that wraps chrome APIs to work like browser APIs
    window.browser = {
      runtime: {
        getURL: function(path) {
          return chrome.runtime.getURL(path);
        }
      },
      storage: {
        local: {
          get: function(keys) {
            return new Promise(function(resolve) {
              chrome.storage.local.get(keys, resolve);
            });
          },
          set: function(items) {
            return new Promise(function(resolve) {
              chrome.storage.local.set(items, resolve);
            });
          }
        },
        onChanged: {
          addListener: function(callback) {
            chrome.storage.onChanged.addListener(callback);
          }
        }
      }
    };
  }
  
  // If neither exists, we have a problem
  if (typeof browser === "undefined" && typeof chrome === "undefined") {
    console.error("Neither browser nor chrome API is available!");
  }
})();
