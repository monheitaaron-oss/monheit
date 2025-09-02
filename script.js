function handleQ1(answer) {
    if (answer === 'yes') {
        document.getElementById('q1').style.display = 'none';
        document.getElementById('q2').style.display = 'block';
    } else {
        alert("Okay, maybe next time!");
        // You can add different logic here, like resetting the form or showing a different message
    }
}

function handleQ2(answer) {
    if (answer === 'yes') {
        document.getElementById('q2').style.display = 'none';
        document.getElementById('q3').style.display = 'block';
    } else {
        alert("No problem. Let us know if you change your mind!");
        // Reset or end the flow
    }
}

function handleQ3() {
    const timeInput = document.getElementById('timeInput').value;
    const durationInMinutes = parseInt(timeInput, 10);

    if (isNaN(durationInMinutes) || durationInMinutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    document.getElementById('q3').style.display = 'none';
    document.getElementById('countdown').style.display = 'block';

    const endTime = Date.now() + durationInMinutes * 60 * 1000;
    const timerDisplay = document.getElementById('timer-display');

    const countdownInterval = setInterval(() => {
        const timeLeft = endTime - Date.now();

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.innerHTML = "EXPIRED";
            return;
        }

        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerDisplay.innerHTML = `${minutes}m ${seconds}s`;
    }, 1000);
}