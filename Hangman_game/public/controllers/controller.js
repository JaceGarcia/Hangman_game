
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ['jace', 'richared', 'david', 'janea'];
var randomNumber = Math.floor(words.length * Math.random());
var randomWord = words[randomNumber];
var arrRandomWord = randomWord.split('');
var trysLeft = 6;
var letterSelected;
var i;
var spaces = [];


function init() {
    for(i = 0; i < arrRandomWord.length; i++){

        for(i = 0; i < arrRandomWord.length; i++){
            spaces.push('_ ');
        }
    }

    $('#button2').click(function(reloadPage){
        window.location.reload();
    })

    $('#wordPlayed').append(spaces);

    $('#trys').html('Trys Left '+ trysLeft)

    for(i = 0; i < alphabet.length; i++) {
        $('#keyboardLetters').append('<div class="btn btn-success letters ">'+alphabet[i]+'</div>');
    }

    createListeners();
}

function createListeners() {
    $('.letters').on('click', function(event){
        letterSelected = $(event.currentTarget).text();
        letterMatched();
        disableLetter(event);
        decrementTries();
    });

    $("#instructions").click(function(){
        alert("this is the alert button");
    });
}

function letterMatched (){
    for(i = 0; i < arrRandomWord.length; i++){
        if(letterSelected === arrRandomWord[i]){
            spaces[i] = letterSelected;
            $('#wordPlayed').text(spaces.join(' '));
        }
    }
}

function decrementTries(){
    if(randomWord.indexOf(letterSelected) === -1){
        trysLeft -=1;
        if(trysLeft === 0){
            $('#trys').html('Gameover');
            $('.letters').off('click');
        } else {
            $('#trys').html('Trys Left '+ trysLeft)
        }
    }
}

function disableLetter(event){
    $(event.currentTarget).addClass('active')
    $(event.currentTarget).off('click');
}



init();
