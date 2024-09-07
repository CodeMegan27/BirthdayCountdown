function fire(ratio, opt){
    confetti(Object.assign({}, opt, {
        origin: {y: .6},
        particleCount: Math.floor(1000 * ratio)
    }));
}

function startConfetti() {
    fire(.25, {
        spread: 30,
        startVelocity: 60,
    });
    fire(.2, {
        spread: 60
    });
    fire(.35, {
        spread: 100,
        decay: .9,
        scalar: 1
    });

    fire(.1, {
        spread: 130,
        startVelocity: 30,
        decay: .92,
        scalar: 1.2
    });

    fire(.2, {
        spread: 120,
        startVelocity: 40,
    });
}

function updateCountdown() {
    const endDate = new Date('2024-09-09T00:00:00'); // Replace with your desired date and time
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
        console.log("Countdown has ended. Starting confetti...");
        document.getElementById('countdown').innerHTML = "<h1>Happy Birthday Usha rani 💙🖤!</h1>";
        document.getElementById('title').style.display = "none";
        document.getElementById('rmv').style.display = "none";
        document.getElementById('rmv2').style.display = "none";
        document.getElementById('rmv3').style.display = "none";
        document.getElementById('rmv4').style.display = "none";
        
        // startConfetti();
        // setInterval(startConfetti, 5000); // Burst confetti every 5 seconds
        return; // Exit the function
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateCountdown()
setInterval(startConfetti, 7000); // Burst confetti every 5 seconds
setInterval(updateCountdown, 1000);
startConfetti()
