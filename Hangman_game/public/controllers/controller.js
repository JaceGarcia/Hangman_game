
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];{

for(var i = 0; i < alphabet.length; i++)
$('#keyboardLetters').append('<div class="btn btn-success Abuttons ">'+alphabet[i]+'</div>');
}

var words = ['jace', 'richared', 'david'];
var randomNumber = Math.floor(words.length * Math.random());
var randomWords = words[randomNumber].split('');
var trysLeft = (6)
for(var i = 0; i < randomWords.length; i++){}
var spaces = []
    for( var i = 0; i < randomWords.length; i++){
    spaces.push('_ ');
}
$('#wordPlayed').append(spaces);
var lettersSelected;
function letterMatched (){
    for(var i = 0; i < randomWords.length; i++){
        if(lettersSelected === randomWords[i]){
            spaces[i] = lettersSelected;
            $('#wordPlayed').text(spaces.join(' '));
}}};
function wrong(){
    if(words.indexOf(lettersSelected) === (-1));{
        trysLeft -=1;
    }
    $('#trys').html('Trys Left '+ trysLeft)
};

function wrongLetters(event){
    for(var i = 0; i < randomWords.length; i++){
        if(lettersSelected !== randomWords[i]){
            spaces[i] != lettersSelected;
            $(event.currentTarget).addClass('active')
            $(event.currentTarget).off('click');
         }
    }
}
//function gameOver(){
if(trysLeft === 0){
    $('#trys').html('GAME OVER!!!!');
    $('#keyboardLetters').off('click');
};
$('.Abuttons').on('click', function(event){
    lettersSelected = $(event.currentTarget).text();
        letterMatched();
        wrongLetters(event);
        wrong();

    });
$(function(){
    $("#button1").click(function(){
        alert("this is the alert button");
    });
    })
