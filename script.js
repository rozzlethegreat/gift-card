// localStorage.clear();
var textChange = $(".changingText");
var box = $(".box");
var box1 = $(".box1");
// var colourOnPage = 0;
// var decoOnPage = 0;
// var colourOnDeco = 0;
var messageOnCard = "";
var previewOfCard = "";
//
// localStorage.setItem("colourOnPage", colourOnPage);
//
// localStorage.setItem("decoOnPage", decoOnPage);
//
// localStorage.setItem("colourOnDeco", colourOnDeco);
//
// localStorage.setItem("previewOfCard", previewOfCard);

$(document).ready(function(){
    textChange.css("fontFamily","Verdana, Geneva, sans-serif");
    textChange.css("fontSize","12px");
    $("textarea").keyup(function(){
        messageOnCard = $("#message").val().replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/(?:\r\n|\r|\n)/g, '<br />');
        var inputBox = $(".changingText");
        inputBox.html(messageOnCard);
        return messageOnCard;
        });

    $("#blue").click(function(){
        box.css("backgroundColor","lightcyan");

    });
    $("#white").click(function(){
        box.css("backgroundColor","white");
        // colourOnPage = 0;
    });
    $("#beige").click(function(){
        box.css("backgroundColor","beige");
    });
    $("#green").click(function(){
        box.css("backgroundColor","#bdf4bd");
    });
    $("#pink").click(function(){
        box.css("backgroundColor","lavenderblush");
    });
    $("#orange").click(function(){
        box.css("backgroundColor","peachpuff");
    });

    // $("#blue, #beige, #orange, #pink, #green").click(function(){
    //     colourOnPage = 2;
    //     localStorage.setItem("colourOnPage", colourOnPage);
    // });

    $("#verdana").click(function(){
        textChange.css("fontFamily",'Verdana, Geneva, sans-serif');
    });
    $("#courier").click(function(){
        textChange.css("fontFamily",'"Courier New", Courier, monospace');
    });
    $("#impact").click(function(){
        textChange.css("fontFamily",'Impact, Charcoal, sans-serif');
    });
    $("#lucida").click(function(){
        textChange.css("fontFamily",'"Lucida Sans Unicode", "Lucida Grande", sans-serif');
    });

    $('select').change(function() {
        newFontSize = $(this).val();
        textChange.css("fontSize",newFontSize);
    });

    $("#balloon").click(function(){
        box1.css('backgroundImage','url("images/balloon.png")');
        box1.css('backgroundSize','260px');
        $("#red").click(function() {
            box1.css('backgroundImage', 'url("images/balloon-red.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#darkBlue").click(function() {
            box1.css('backgroundImage', 'url("images/balloon-blue.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#yellow").click(function() {
            box1.css('backgroundImage', 'url("images/balloon-yellow.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#black").click(function() {
            box1.css('backgroundImage', 'url("images/balloon.png")');
            box1.css('backgroundSize', '260px');
            // colourOnDeco = 0;
        });
    });
    $("#dots").click(function(){
        box1.css('backgroundImage','url("images/dots.png")');
        box1.css('backgroundSize','260px');
        $("#red").click(function() {
            box1.css('backgroundImage', 'url("images/dots-red.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#darkBlue").click(function() {
            box1.css('backgroundImage', 'url("images/dots-blue.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#yellow").click(function() {
            box1.css('backgroundImage', 'url("images/dots-yellow.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#black").click(function() {
            box1.css('backgroundImage', 'url("images/dots.png")');
            box1.css('backgroundSize', '260px');
            // colourOnDeco = 0;
        });
    });
    $("#curls").click(function(){
        box1.css('backgroundImage','url("images/curls.png")');
        box1.css('backgroundSize','260px');
        $("#red").click(function() {
            box1.css('backgroundImage', 'url("images/curls-red.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#darkBlue").click(function() {
            box1.css('backgroundImage', 'url("images/curls-blue.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#yellow").click(function() {
            box1.css('backgroundImage', 'url("images/curls-yellow.png")');
            box1.css('backgroundSize', '260px');
        });
        $("#black").click(function() {
            box1.css('backgroundImage', 'url("images/curls.png")');
            box1.css('backgroundSize', '260px');
            // colourOnDeco = 0;
        });
    });

    // $("#curls, #dots, #balloon").click(function(){
    //     decoOnPage = 3;
    //     localStorage.setItem("decoOnPage", decoOnPage);
    // });
    //
    // $("#yellow, #black, #red").click(function(){
    //     colourOnDeco = 1;
    //     localStorage.setItem("colourOnDeco", colourOnDeco);
    // });

    $("#none").click(function() {
        box1.css('backgroundImage', 'none');
        // decoOnPage = 0;
    });

    $("#right").click(function(){
        textChange.css('textAlign','right');
    });
    $("#left").click(function(){
        textChange.css('textAlign','left');
    });
    $("#center").click(function(){
        textChange.css('textAlign','center');
    });



    $("#congratz").click(function(){
        $(".preview img").attr('src','images/invitation-card-congratz.png');
        previewOfCard = 'invitation-card-congratz.png';
        localStorage.setItem("previewOfCard", previewOfCard);
        });
    $("#birthday").click(function(){
        $(".preview img").attr('src','images/invitation-card-birthday.png');
        previewOfCard = 'invitation-card-birthday.png';
        localStorage.setItem("previewOfCard", previewOfCard);
    });
    $("#sorry").click(function(){
        $(".preview img").attr('src','images/invitation-card-sorry.png');
        previewOfCard = 'invitation-card-sorry.png';
        localStorage.setItem("previewOfCard", previewOfCard);

    });


    $("#order").click(function() {
        $(".display-none-success").css('display', 'none');
        var statementError = false;
        var noErrors = false;
        if($(".preview img").attr('src') === ('images/invitation-card.jpg') ) {
            $(".display-none-theme").css('display', 'block');

        }else{
            $(".display-none-theme").css('display','none');
            statementError = true;
        }
        if(statementError) {
            if (messageOnCard === "") {
                $(".display-none-msg").css('display', 'block');
            } else {
                $(".display-none-msg").css('display', 'none');
                noErrors = true;
            }
        }

        if(noErrors){
            $(".display-none-success").css('display', 'block');
            
        }


    });



});

