//Anon-function to prevent multiple instantiations
(function() {
  // console.log("write is injected")
  // Set up a new WebkitSpeechRecognition object
  const recognition = new webkitSpeechRecognition();

  // Set the language
  recognition.lang = "en-US";

  // Start listening for spoken text
  recognition.start();

  // When the WebkitSpeechRecognition API returns a result, write the text to the selected text field
  recognition.onresult = function(event) {
    const spokenText = event.results[0][0].transcript;
    document.activeElement.value += spokenText;
  }
})();

