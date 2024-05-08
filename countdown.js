function startCountdown(targetDate) {
    const destructionTimerElement = document.getElementById("DestructionTimer");

    function updateTimer() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            destructionTimerElement.innerHTML = "Time's up!";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        destructionTimerElement.text = "TIME UNTIL GLOBAL DESTRUCTION: " + `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;
        
    }

    updateTimer(); // initial call
    const timerInterval = setInterval(updateTimer, 1000);
}


const targetDate = new Date("May 10, 2024 00:00:00").getTime();
startCountdown(targetDate);
