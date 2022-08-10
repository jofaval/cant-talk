const speech = new SpeechSynthesisUtterance();
const speaker = window.speechSynthesis;

/**
 * Allows the text to speech conversion
 * 
 * @param {String} msg The message to speak out
 * @param {any} callback The callback function
 * 
 * @author [Nick Foscarini](https://www.linkedin.com/in/nick-foscarini)
 * @source [LinkedIn post](https://www.linkedin.com/posts/nick-foscarini_javascript-activity-6848949886847643648-Mg_N)
 */
function speak (msg, callback = null) {
    speech.text = msg;

    if (callback) speech.onend = callback;

    const voices = speaker.getVoices();
    // console.log('Voces disponibles', voices);
    [speech.voice] = voices;
    // speech.voice = voices[1];

    speaker.speak(speech);
}

function pause()  { speaker.pause()  }
function resume() { speaker.resume() }
function stop()   { speaker.cancel() }