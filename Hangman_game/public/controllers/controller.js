
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ['abisselfa', 'wagon', 'buckaroo', 'charro', 'ranahan', 'rep', 'cowman', 'cowboy', 'drover', 'rustler', 'peeler', 'shoer'];
var randomNumber = Math.floor(words.length * Math.random());
var randomWord = words[randomNumber];
var arrRandomWord = randomWord.split('');
var triesLeft = 6;
var letterSelected;
var i;
var spaces = [];


function init() {
        for(i = 0; i < arrRandomWord.length; i++){
            spaces.push('_ ');
        }

    $('#wordPlayed').append(spaces);

    $('#tries').html('Tries Left '+ triesLeft);

    for(i = 0; i < alphabet.length; i++) {
        $('#keyboardLetters').append('<div class="btn btn-success letters ">'+alphabet[i]+'</div>');
    }

    createListeners();
}

function createListeners(){
    $('.letters').on('click', function(event){
        letterSelected = $(event.currentTarget).text();
        letterMatched();
        disableLetter(event);
        decrementTries();
    });

    $("#about").click(function(){
        alert("alert");
    });

    $('#new').click(function(reloadPage){
        window.location.reload();
    })
}

function letterMatched (){
    for(i = 0; i < arrRandomWord.length; i++){
        if(letterSelected === arrRandomWord[i]){
            spaces[i] = letterSelected;
            $('#wordPlayed').text(spaces.join(' '));
        }
    }
    if(spaces.indexOf('_ ') === -1){
        $('#tries').html('You win');
    }
}

function decrementTries(){
     if(randomWord.indexOf(letterSelected) === -1){
         triesLeft -=1;
        if(triesLeft === 0){
            $('#tries').html('Gameover');
            $('.letters').off('click');
            $('.wordplay_wrapper').empty('spaces');
            alert(arrRandomWord.join(' '));
        } else {
            $('#tries').html('Tries Left '+ triesLeft)
        }
    }
}

function disableLetter(event){
    $(event.currentTarget).addClass('active')
    $(event.currentTarget).off('click');
}



init();
