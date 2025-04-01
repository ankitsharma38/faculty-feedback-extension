chrome.runtime.onMessage.addListener((request) => {
     if (request.action === "fillRatings") {
         let rating = parseInt(request.rating);
 
         // Find all star rating containers
         let ratingFields = document.querySelectorAll(".rating input[type='radio'], .star-rating");
 
         ratingFields.forEach(starGroup => {
             let stars = starGroup.querySelectorAll("input[type='radio']");
             
             if (stars.length > 0) {
                 let targetStar = stars[rating - 1]; // Select correct star
 
                 if (targetStar) {
                     targetStar.click(); // Click to select
                     console.log(`Set rating ${rating}`);
                 }
             }
         });
 
         // Trigger form validation if needed
         if (typeof validateFeedback === "function") {
             validateFeedback();
         }
     }
 });
 