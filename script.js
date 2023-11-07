// Get elements from the DOM
let countInput = document.getElementById('countInput');
const startButton = document.getElementById('startButton');
const countOutput = document.getElementById('countOutput');

// Read data (previous input) from the local storage
let previousInput = localStorage.getItem('lastInput');

// Declare a variable to store and manipulate with input value
let inputValue;

// Declare a variable to store intervalID
let nIntervId;

// Add event listener to a button
startButton.addEventListener('click', () => {
    startCounting();
});

// Create a function which takes in a parameter and updates
// the count output with it
function updateCountOutput(currentInputValue) {
    countOutput.innerHTML = currentInputValue;
}

// Create a self-invoking function that uses the previously used input
(function () {
    if (previousInput) {
        countInput.value = previousInput;
    }
})();

// Create a function that starts the countdown
function startCounting() {
    // Get a value from the input
    inputValue = document.getElementById('countInput').value;
    // Save data to the local storage
    localStorage.setItem('lastInput', inputValue);
    // Update the countdown output in the DOM with the value from the input
    updateCountOutput(inputValue);
    // Check if the intervalID has already been set up
    // If not, set the interval
    if (!nIntervId) {
        nIntervId = setInterval(handleCountdown, 1000);
    }
}

// Create a function to handle the countdown mechanism
function handleCountdown() {
    // Set the condition
    if (inputValue > 0) {
        // Decrement the value
        inputValue--;
        // Update the output in the DOM
        updateCountOutput(inputValue);
        // Set the condition for the timer to stop
    } else if (inputValue === 0) {
        // Update the output in the DOM
        updateCountOutput('Countdown completed!');
        // Cancel set intervalID
        clearInterval(nIntervId);
        // Clear intervalID
        nIntervId = null;
    }
}
