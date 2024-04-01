const targetDate = new Date(2024, 3, 16); // April 16, 2024 (Month starts from 0)

function updateCountdown() {
  const currentDate = new Date();
  const timeDiff = targetDate.getTime() - currentDate.getTime();

  // Check if countdown has expired
  if (timeDiff <= 0) {
    // Display message for expired countdown (optional)
    x = document.querySelector(".countdown-container")
    x.style.display = "None";
    document.querySelector(".message").style.display = "block";
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  const daysElement = document.querySelector('.days');
  const hoursElement = document.querySelector('.hours');
  const minutesElement = document.querySelector('.minutes');
  const secondsElement = document.querySelector('.seconds');

  daysElement.querySelector('.ten').textContent = Math.floor(days / 10);
  daysElement.querySelector('.one').textContent = days % 10;

  hoursElement.querySelector('.ten').textContent = Math.floor(hours / 10);
  hoursElement.querySelector('.one').textContent = hours % 10;

  minutesElement.querySelector('.ten').textContent = Math.floor(minutes / 10);
  minutesElement.querySelector('.one').textContent = minutes % 10;

  secondsElement.querySelector('.ten').textContent = Math.floor(seconds / 10);
  secondsElement.querySelector('.one').textContent = seconds % 10;

  // Add active class for flip animation
  daysElement.classList.add('active');
  hoursElement.classList.add('active');
  minutesElement.classList.add('active');
  secondsElement.classList.add('active');

  setTimeout(() => {
    daysElement.classList.remove('active');
    hoursElement.classList.remove('active');
    minutesElement.classList.remove('active');
    secondsElement.classList.remove('active');
  }, 500); // Adjust duration for flip animation (in milliseconds)

  // Call updateCountdown again every second
  setTimeout(updateCountdown, 1000);
}

updateCountdown(); // Start the countdown
