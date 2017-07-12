$("#button1").click(function(){
    alert("this is the alert button");
});

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];{

for(var i = 0; i < alphabet.length; i++)
$('#keyboardLetters').append('<div class="btn btn-success">'+alphabet[i]+'</div>');
}

var words = ['Jace', 'Richared', 'David'];{
var randomNumber = Math.floor(words.length * Math.random());
var randomWords = words[randomNumber].split('');
for(var i = 0; i < randomWords.length; i++)
$('#wordPlayed').append('<div class="dashes">'+randomWords[i]+'</div>');
}
//for( var i = 0; i < spaces.length; i++)

    
