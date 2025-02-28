// Wait a few seconds, then show the chatbot
setTimeout(() => {
    const chatbot = document.getElementById("chatbot");
    if (chatbot) {
        chatbot.classList.remove("hidden");
    } else {
        console.error("Chatbot element not found!");
    }
}, 3000); // 3 seconds delay to appear

// Track conversation count
let conversationCount = 0;
const maxConversations = 10;

// Listen for user input
const input = document.getElementById("chatbot-input");
if (input) {
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && input.value.trim() !== "") {
            conversationCount++; // Increment conversation count

            if (conversationCount < maxConversations) {
                // Random alien-themed responses
                const responses = [
                    "THE GREYS SAY UR BRAIN IS TOO SMALL LMAO",
                    "Can you maybe articulate a bit more? Its like talking to a brick wall.",
                    "Yo momma.",
                    "Can you even bend spacetime? Do you even understand what space is?",
                    "BTW Calling us gleep glorps is pretty offensive...",
                    "Who made this shitty website and why am I here talking to you?",
                    "Can you go get someone who can understand ⍙⊑⊬⏃⍀⟒?",
                    "English is a very dumb and stupid language, I have no idea what you are saying."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                document.getElementById("chatbot-body").innerHTML = `
                    <img src="gleep6.gif" alt="Gleep Alien" style="width: 200px; height: auto; display: block; margin: 10px auto;">
                    <p>${randomResponse}</p>
                `;
            } else {
                // Wait 2 seconds before final message and fart sound
                setTimeout(() => {
                    document.getElementById("chatbot-body").innerHTML = `
                        <img src="gleep6.gif" alt="Gleep Alien" style="width: 200px; height: auto; display: block; margin: 10px auto;">
                        <p>Screw you guys, I'm going home!</p>
                    `;
                    const fartSound = document.getElementById("fart-sound");
                    if (fartSound) {
                        fartSound.play(); // Play fart sound
                    } else {
                        console.error("Fart sound element not found!");
                    }

                    // Hide chatbot and show UFO after 2 more seconds
                    setTimeout(() => {
                        const chatbot = document.getElementById("chatbot");
                        chatbot.style.display = "none";
                        const ufoContainer = document.getElementById("ufo-container");
                        if (ufoContainer) {
                            ufoContainer.style.display = "block"; // Show UFO
                        }
                    }, 2000);
                }, 2000); // 2 seconds delay before "shitting itself"
            }

            // Clear input
            input.value = "";
        }
    });
} else {
    console.error("Chatbot input element not found!");
}

// Reset chatbot when UFO is clicked
const ufoButton = document.getElementById("ufo-button");
if (ufoButton) {
    ufoButton.addEventListener("click", () => {
        const chatbot = document.getElementById("chatbot");
        const ufoContainer = document.getElementById("ufo-container");
        if (chatbot && ufoContainer) {
            // Reset chatbot state
            conversationCount = 0;
            chatbot.style.display = "block"; // Show chatbot
            chatbot.classList.add("hidden"); // Reapply hidden class
            setTimeout(() => {
                chatbot.classList.remove("hidden"); // Reappear after 2 seconds
            }, 2000);
            document.getElementById("chatbot-body").innerHTML = `
                <img src="gleep6.gif" alt="Gleep Alien" style="width: 200px; height: auto; display: block; margin: 10px auto;">
                <p>ALIEN LIFEFORM ATTEMPTING TO CONTACT YOU! TAKE ME TO YOUR LEADER!</p>
            `;
            ufoContainer.style.display = "none"; // Hide UFO
        }
    });
} else {
    console.error("UFO button not found!");
}
