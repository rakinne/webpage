$("h1").on("click", function() {
    console.log("Clicked!");
});

$(document).ready(function () {
    $('div.hidden').fadeIn(1500).removeClass('hidden');
});