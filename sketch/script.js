// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    // Get all <a> tags with the text 'Powered by Visme Forms'
    var aTags = document.querySelectorAll('a');

    // Loop through each <a> tag
    aTags.forEach(function(aTag) {
        // Check if the text content matches 'Powered by Visme Forms'
        if (aTag.textContent.trim() === "Powered by Visme Forms") {
            // Remove the <a> tag
            aTag.parentNode.removeChild(aTag);
        }
    });
});
