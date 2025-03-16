// Redirect to Quiz Page
function startGame() {
    window.location.href = "quiz.html";
}

// Redirect to Final Page after Quiz Completion
function checkAnswers() {
    let correct = 0;
    
    // Get selected answers
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
    };

    // Correct answers
    const correctAnswers = {
        q1: "Blue",
        q2: "Ronaldo",
        q3: "Bus"
    };

    // Check answers
    for (let key in answers) {
        if (answers[key] === correctAnswers[key]) {
            correct++;
        }
    }

    if (correct === 3) {
        localStorage.setItem("quizCompleted", "true");
        window.location.href = "final.html";
    } else {
        alert("Oops! Some answers are wrong. Try again! 💔");
    }
}

// Redirect to Gallery After Final Page
function goToGallery() {
    window.location.href = "gallery.html";
}

// Redirect to Home Page
function goHome() {
    window.location.href = "index.html";
}

// Generate Floating Hearts Effect
function createHearts() {
    const heartContainer = document.querySelector(".hearts-container");
    if (!heartContainer) return; // Prevent error if not on a page with hearts

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartContainer.appendChild(heart);
    }
}

// Generate Floating Butterflies Effect
function createButterflies() {
    const butterflyContainer = document.querySelector(".butterflies-container");
    if (!butterflyContainer) return;

    for (let i = 0; i < 5; i++) {
        let butterfly = document.createElement("div");
        butterfly.className = "butterfly";
        butterfly.style.left = Math.random() * 100 + "vw";
        butterfly.style.animationDuration = Math.random() * 2 + 3 + "s";
        butterflyContainer.appendChild(butterfly);
    }
}

// Ensure Background Video Works on All Pages
function checkBackgroundVideo() {
    const bgVideo = document.getElementById("bg-video");
    if (bgVideo) {
        bgVideo.play().catch(error => console.log("Autoplay blocked:", error));
    }
}

// Execute Functions on Page Load
document.addEventListener("DOMContentLoaded", () => {
    createHearts();
    createButterflies();
    checkBackgroundVideo();

    // If on the final page, enable the gallery button only after a delay
    if (window.location.pathname.includes("final.html")) {
        setTimeout(() => {
            document.getElementById("galleryButton").style.display = "block";
        }, 3000);
    }
});
// Music Control
let music = document.getElementById("background-music");
let volumeSlider = document.getElementById("volumeSlider");
let musicIcon = document.getElementById("music-icon");

// Function to enable autoplay when user interacts
function enableMusicAutoplay() {
    if (music.paused) {
        music.muted = false; // Unmute when user interacts
        music.play().catch(error => console.log("Autoplay prevented:", error));
    }
}

// Play/Pause Music Toggle
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.textContent = "🔊"; // Change icon to speaker
    } else {
        music.pause();
        musicIcon.textContent = "🔇"; // Change icon to mute
    }
}

// Adjust Music Volume
function adjustVolume() {
    let volume = volumeSlider.value;
    music.volume = volume; // Set volume
}
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-item img");
    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");
    document.body.appendChild(overlay);

    const overlayImage = document.createElement("img");
    overlay.appendChild(overlayImage);

    images.forEach((image) => {
        image.addEventListener("click", () => {
            overlayImage.src = image.src;
            overlay.classList.add("show");
        });
    });

    overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
    });
});
function revealText(box) {
    let text = box.querySelector(".hidden-text");
    if (!text.classList.contains("revealed")) {
        text.classList.add("revealed");
        releaseButterflies();
    }
}

function releaseButterflies() {
    for (let i = 0; i < 5; i++) {
        let butterfly = document.createElement("div");
        butterfly.className = "butterfly";
        butterfly.style.left = Math.random() * 100 + "vw";
        document.querySelector(".butterflies-container").appendChild(butterfly);

        setTimeout(() => {
            butterfly.remove();
        }, 4000);
    }
}

