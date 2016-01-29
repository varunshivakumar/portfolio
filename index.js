/**
 * Created by vshivakumar on 9/24/15.
 */


$(document).ready(function(){
    //alert('hello');
    //$("#header").load("/cse392/header.html");
    $.get("header.html", function( data ) {
        $("#header").html( data );
        //alert( "Ok. Load." );
    });

    $('.sidebar-item').mouseenter(function(){
        $(this).css('z-index', 9);
        $(this).animate({
            width: 135,
            height: 135
        }, 150, function() {
            // Animation complete.
        });
    });
    $('.sidebar-item').mouseleave(function(){
        $(this).css('z-index', 1);
        $(this).animate({
            width: 125,
            height: 125
        }, 150, function() {
            // Animation complete.
        });
    });

    $('#wave-animation').animate({
        right: '-=1000%'
    }, 250000, 'linear', function () {
        ocean();
    });

    $('#submit-btn').click(function(){
        // delete window.alert;
        // alert("Message Submitted! Thank You!");
        //$('#message-status').innerHTML("");
        //$('#message-status').innerHTML("Message Submitted! Thank You!");
    });

    // Set the picture to be a perfect circle
    var picture = $('#picture');
    picture.css("height", picture.css("width"));

    function postContactToGoogle(){
        alert("hello");
        var name = $('#name').value();
        var message = $('#message').value();
        if (name !== "") {
            $.ajax({ url: "https://docs.google.com/forms/d/1-9ot14C9_ycZadWJJMieKKDPzXy83f-adaahMkdV0aE/formResponse",
                data: {"entry.1010706963" : name, "entry.1673841111" : message },
        type: "POST",
            dataType: "xml",
            statusCode: {
            0: function (){alert("Success 0!")},
            200: function (){alert("Success 200!")}
        }
    });
}  else {  /*Error message*/ }
}
});