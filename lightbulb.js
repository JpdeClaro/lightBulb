var lightBulb = document.getElementById("light_Bulb");
var soundEffect = document.getElementById("soundEffect");

var playButton = document.getElementById('playButton');
var soundEffect = document.getElementById('soundEffect');

// Add a click event listener to the button
playButton.addEventListener('click', () => {
    // Play the sound effect
    soundEffect.play();
});

function toDisappear () {

    lightBulb.classList.toggle("nothing");
    }