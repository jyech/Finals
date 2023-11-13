window.addEventListener('load', function() {
    // This code will run when the page and all resources have finished loading.
    document.querySelector('.loading-screen').style.display = 'none';
});

$(document).ready(function() {
    // This code will run when the DOM is fully loaded
    $('.box').hide(); // Hide the boxes initially

    // Fade in the boxes when the page is loaded
    $('.box').each(function(index) {
        $(this).delay(700 * index).fadeIn(2000); // Adjust the delay and fadeIn duration as needed
    });
});