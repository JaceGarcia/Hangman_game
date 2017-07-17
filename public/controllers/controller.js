
var alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var words = ['afghanistan', 'albania', 'brazil', 'botswana', 'canada', 'cuba', 'denmark', 'dominica', 'egypt', 'ethiopia', 'fiji', 'finland', 'france', 'gabon', 'greece', 'hati', 'honduras', 'india', 'iran', 'japan', 'jordan', 'kenya', 'kuwait', 'libya'];
var arrBodyLines = ['leftLeg', 'rightLeg', 'rightArm', 'leftArm','Torso', 'Head'];
var randomNumber = Math.floor(words.length * Math.random());
var randomWord = words[randomNumber];
var arrRandomWord = randomWord.split('');
var letterSelected;
var i;
var spaces = [];
var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');

function init() {
    var counter = 0;
    var kbLength0 = 9;
    var kbLength1 = 9;

    for(i = 0; i < arrRandomWord.length; i++){
        spaces.push('_ ');
    }

    $('#wordPlayed').append(spaces);

    for(i = 0; i < alphabet.length; i++) {
        $('#kb' + counter).append('<div class="btn btn-success letters ">'+alphabet[i]+'</div>');

        if (i === kbLength0 || i === kbLength1 + kbLength1) {
            counter++;
        }
    }

    createListeners();

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
}

function createListeners(){
    $('.letters').on('click', function(event){
        letterSelected = $(event.currentTarget).text();
        letterMatched();
        disableLetter(event);
        decrementTries();
    });

    $("#about").click(function(){
        alert("This is a game of hangman and the goal is to guess the country before you fun out of tries. ");
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
         drawLines(arrBodyLines.pop());
        if(arrBodyLines.length === 0){
            $('#tries').html('Gameover');
            $('.letters').off('click');
            $('.wordplay_wrapper').empty('spaces');
            alert(arrRandomWord.join(''));
            //Dead eyes
            c.beginPath();
            c.moveTo(207,43);
            c.lineTo(212,50);
            c.stroke();
            c.beginPath();
            c.moveTo(214,43);
            c.lineTo(205,50);
            c.stroke();
            c.beginPath();
            c.moveTo(227,43);
            c.lineTo(220,50);
            c.stroke();
            c.beginPath();
            c.moveTo(220,43);
            c.lineTo(227,50);
            c.stroke();
        }
    }
}

function disableLetter(event){
    $(event.currentTarget).addClass('active')
    $(event.currentTarget).off('click');
}

function drawLines(bp){
    if(bp === 'Head'){
        //Head
        c.beginPath();
        c.arc(215, 50, 19, 0, Math.PI * 2, false);
        c.stroke();
    } else if(bp === 'Torso'){
        //Torso
        c.beginPath();
        c.moveTo(215, 68);
        c.lineTo(215, 150);
        c.stroke();
    } else if (bp === 'leftArm'){
        //Left arm
        c.beginPath();
        c.moveTo(215, 90);
        c.lineTo(180, 130);
        c.stroke();
    } else if (bp ==='rightArm'){
        //Right arm
        c.beginPath();
        c.moveTo(215, 90);
        c.lineTo(250, 130);
        c.stroke();
    } else if (bp === 'rightLeg'){
        // Right leg
        c.beginPath();
        c.moveTo(215, 150);
        c.lineTo(250, 200);
        c.stroke();
    } else if (bp === 'leftLeg'){
        // Left leg
        c.beginPath();
        c.moveTo(215, 150);
        c.lineTo(180, 200);
        c.stroke();
    }
}

init();
