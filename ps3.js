// This file should contain two functions
// One function fades odd-numbered list items when the mouse cursor hovers over them
// The second function changes the color of each even numbered list item when clicked
// See https://www.w3schools.com/jquery/jquery_events.asp for assistance on these functions

// let click = 0;

// $(function() {
//     $('.odd').click(function(){
//         click++;
//         if (click == 1) {
//             $(this).css('color', 'red');
//         } else {
//             $(this).css('color', 'blue');
//         }
//     })
// });

// list names are flipped due to index at 0
// i.e. ".odd" are the even elements  and ".even" are the odd elements

$(function() {
    $('.odd').click(function() {
        if ($(this).data('count')) { // check if clicked already
            $(this).data('count', $(this).data('count')+1); // increment click count
            $(this).css('color', 'red'); //first clicks are red
        } else { // hasn't been clicked yet
            $(this).data('count', 1); // initialize click counter
            $(this).css('color', 'blue'); // subsequent clicks are blue
        }
    })
})

$(function() {
    $('.even').hover(function() {
        $(this).fadeToggle(500);
    })
});