
var alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var words = ['afghanistan', 'albania', 'brazil', 'botswana', 'canada', 'cuba', 'denmark', 'dominica', 'egypt', 'ethiopia', 'fiji', 'finland', 'france', 'gabon', 'greece', 'hati', 'honduras', 'india', 'iran', 'japan', 'jordan', 'kenya', 'kuuait', 'libya'];
var randomNumber = Math.floor(words.length * Math.random());
var randomWord = words[randomNumber];
var arrRandomWord = randomWord.split('');
var triesLeft = 6;
var letterSelected;
var i;
var spaces = [];
var canvas = document.querySelector("canvas");
console.log(canvas);
var c = canvas.getContext('2d');

//Hangman frame

c.beginPath();
c.moveTo(240, 260);
c.lineTo(350, 260);
c.stroke();
c.moveTo(300, 20);
c.lineTo(300, 260);
c.stroke();
c.moveTo(300, 20);
c.lineTo(215, 20);
c.stroke();
c.moveTo(215, 20);
c.lineTo(215, 30);
c.stroke();








function init() {
    var counter = 0;
    var kbLength0 = 9;
    var kbLength1 = 9;

    for(i = 0; i < arrRandomWord.length; i++){
        spaces.push('_ ');
    }

    $('#wordPlayed').append(spaces);

    $('#tries').html('Tries Left '+ triesLeft);

    for(i = 0; i < alphabet.length; i++) {
        $('#kb' + counter).append('<div class="btn btn-info letters ">'+alphabet[i]+'</div>');

        if (i === kbLength0 || i === kbLength1 + kbLength1) {
            counter++;
        }
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
        $('.letters').off('click');
    }
}

function decrementTries(){
     if(randomWord.indexOf(letterSelected) === -1){
         triesLeft -=1;
        if(triesLeft === 0){
            $('#tries').html('Gameover');
            $('.letters').off('click');
            $('.wordplay_wrapper').empty('spaces');
            alert(arrRandomWord.join(''));
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
