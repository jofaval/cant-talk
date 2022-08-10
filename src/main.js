const textArea  = document.querySelector('#text');
const btnTalk   = document.querySelector('#btnTalk');
const btnClean  = document.querySelector('#btnClean');
const btnPause  = document.querySelector('#btnPause');
const btnResume = document.querySelector('#btnResume');
const btnStop   = document.querySelector('#btnStop');

let canTalk = true;

/**
 * Speaks with all the required actions
 * 
 * @param {String} msg Message to communicate
 */
function speakEvent(msg) {
    speak(msg, function (event) { // When the browser is done speaking
        console.log('Texto reproducido');
        btnTalk.removeAttribute('disabled');
        canTalk = true;
    })
    canTalk = false;
}

// Implements the speech event
btnTalk.addEventListener('click', function (event) {
    // If can't talk, then stop the click event
    if (!canTalk) return this.setAttribute('disabled', true);

    // Null secure event catcher, just in case
    var event = event || window.event;

    // Enable the button by default
    this.setAttribute('disabled', false);

    // Retrieve textArea's value
    const text = textArea.value;

    // Guard clause, if no text was given
    if (isEmpty(text)) return speakEvent(strings.speech.noText);

    // TODO: implement check for cursing words?

    console.log('Texto a reproducir', text);
    speakEvent(text);
})

/**
 * Cleans the textarea content
 */
function clean() { textArea.value = ''; }

// Implements the clean event
btnClean.addEventListener('click', clean)
// Implements the pause event
btnPause.addEventListener("click", pause);
// Implements the resume event
btnResume.addEventListener("click", resume);
// Implements the stop event
btnStop.addEventListener("click", stop);