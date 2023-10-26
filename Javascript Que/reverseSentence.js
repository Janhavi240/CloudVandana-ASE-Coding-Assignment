//que - A. Take a sentence as an input and reverse every word in that sentence.

function reverseWords(sentence) {
    
    var words = sentence.split(' ');
  
    // Initialize an array to store the reversed words
    var reversedWords = [];
  
   
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var reversedWord = '';
  
      // Reverse the characters in the word
      for (var j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
      }
  
      reversedWords.push(reversedWord);
    }
  
    // Join the reversed words back into a sentence
    var reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  var inputSentence = "hello Everyone";
  var reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); 
  