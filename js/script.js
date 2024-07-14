$(document).ready(function() {
    $('.art_apartment_location-coming-soon a').each(function() {
        $(this).removeAttr('href');
        
        $(this).addClass('disabled-link');
        
        $(this).click(function(event) {
            event.preventDefault();
        });
    });
});