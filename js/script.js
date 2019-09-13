// Override fancybox default
$.fancybox.defaults.showNavArrows = true;


// Search functionality
let captions = [];
let search = '';


$('#search').keyup(function() {
    search = $('#search').val().toLowerCase();

    // search through the captions.  
    for (let i = 0; i < captions.length; i++) {
        if (captions[i].indexOf(search) < 0) {
            //if a non-match is found, hide its corresponding li element.
            $('li').eq(i).hide();
        } else {
            // if matches are found, show the li elements.
            $('li').eq(i).show();
        }
    }

});


// collect all the captions and store in an array
$('ul li').each(function(index) {
    let caption = $(this).children().attr('data-caption').toLowerCase();
    captions.push(caption);
});