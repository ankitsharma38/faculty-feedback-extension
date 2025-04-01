document.getElementById("apply").addEventListener("click", async () => {
     let rating = document.getElementById("rating").value;
     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
 
     chrome.scripting.executeScript({
         target: { tabId: tab.id },
         func: (rating) => {
             chrome.runtime.sendMessage({ action: "fillRatings", rating });
         },
         args: [rating]
     });
 
     document.getElementById("status").innerText = `Applied ${rating} stars`;
 });
 