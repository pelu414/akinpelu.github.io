// Dark Mode
function toggleBar () {
    const themeLink = document.getElementById('themeStyle');
    const toggleIcon = document.getElementById('toggle');
    const border1 = document.getElementById('border1');
    const border2 = document.getElementById('border2');
    const border3 = document.getElementById('border3');

    if (themeLink.getAttribute('href') === '../assets/css/light.css') {
        // Switch to Dark Mode
        themeLink.setAttribute('href','../assets/css/dark.css');
        toggleIcon.className='fa-solid fa-toggle-off toggleon';
        border1.src='../assets/img/shape-top-black-80.png';
        border2.src='../assets/img/shape-bottom-black-80.png';
        border3.src='../assets/img/shape-top-dark-grey-80.png';
    } else {
        // Switch to Light Mode
        themeLink.setAttribute('href','../assets/css/light.css');
        toggleIcon.className='fa-solid fa-toggle-on toggleon';
        border1.src='../assets/img/shape-top-white-80.png';
        border2.src='../assets/img/shape-bottom-white-80.png';
        border3.src='../assets/img/shape-top-grey-80.png';
    }
}

// Show the button when user scrolls down
window.onscroll = function () {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show button when scrolled 100px
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button at the top
    }
};

// Smooth scroll to the top when the button is clicked
document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mouse Scroll
document.getElementById("mouseIcon").addEventListener("click", function () {
    // Scroll smoothly to the next section
    window.scrollTo({
        top: window.innerHeight, // Scroll to the next screen height
        behavior: "smooth"       // Smooth scrolling effect
    });
});

// Set the date for the audition countdown (replace with your event date)
    const auditionDate = new Date("2024-11-30T00:00:00").getTime();

// Update the countdown every 1 second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = auditionDate - now;

 // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// Display the result
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

// If the countdown is over, display "Event Started!"
        if (timeLeft < 0) {
            clearInterval(countdown);
            document.getElementById("days").innerHTML = 0;
            document.getElementById("hours").innerHTML = 0;
            document.getElementById("minutes").innerHTML = 0;
            document.getElementById("seconds").innerHTML = 0;
            document.querySelector("#countdown-section h2").innerHTML = "Audition Started!";
        }
    }, 1000);