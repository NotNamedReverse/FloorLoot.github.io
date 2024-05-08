document.title = "SUPER STATE WAR!!";

// Get the element by ID
const countdownElement = document.getElementById('DestructionTimer');

// Set the target date for the countdown (May 16th of the current year)
const targetDate = new Date(new Date().getFullYear(), 4, 16);

// Function to update the countdown
function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    // Calculate time left
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // When the countdown is over
    if (difference < 0) {
        clearInterval(interval);
        countdownElement.textContent = "The countdown is over!";
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
