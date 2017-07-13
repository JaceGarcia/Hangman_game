$("#button1").click(function(){
    alert("this is the alert button");
});

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];{




for(var i = 0; i < alphabet.length; i++)
$('#keyboardLetters').append('<div class="btn btn-success Abuttons ">'+alphabet[i]+'</div>');
}

var words = ['Jace', 'Richared', 'David'];{
var randomNumber = Math.floor(words.length * Math.random());
var randomWords = words[randomNumber].split('');
for(var i = 0; i < randomWords.length; i++)
$('').append('<div class="">'+randomWords[i]+'</div>');
}
var spaces = []
    for( var i = 0; i < randomWords.length; i++){
    spaces.push('_ ');
$('#wordPlayed').append('<div class="underlines placeholder'+i+'">'+spaces[i]+'</div>');
}
var lettersSelected;
//var letterMatched = function (){
    for(var i = 0; i < lettersSelected; i++){

        if(lettersSelected === randomWords[i]){
            spaces[i] === lettersSelected;
        }};

console.log(spaces[i])


//$('.Abuttons').on('click', function(event) {
//    lettersSelected = $(event.currentTarget).text();
//    letterMatched();

//});
