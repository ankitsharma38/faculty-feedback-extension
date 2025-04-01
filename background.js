chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
     if (request.action === "fillRatings") {
         chrome.tabs.sendMessage(sender.tab.id, request);
     }
 });
 