const input = document.querySelector("input");
const sendBtn = document.getElementById("send-btn");
const chat = document.getElementById("body");
const emptyState = document.getElementById("empty-state");
const sendIcon = document.getElementById("s-icon");
const stopIcon = document.getElementById("stop-icon");

let controller;
let isGenerating = false;
let typingInterval;

stopIcon.style.display = "none";

sendBtn.addEventListener("click", handleButtonClick);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleButtonClick();
    }
});

function handleButtonClick() {
    if (isGenerating) {
        controller.abort();
        isGenerating = false;
        updateButtonUI();
        stopTypingAnimation();
        return;
    }

    sendMessage();
}


function sendMessage() {
    const text = input.value.trim();

    if (!text) return;

    controller = new AbortController();

    addMessage(text, "user");
    input.value = "";

    const botMessage = addMessage("", "bot");

    isGenerating = true;
    updateButtonUI();

    startTypingAnimation(botMessage);
    getBotResponse(text, botMessage);

}

function addMessage(text, type) {
    const div = document.createElement("div");
    div.classList.add("message", type);
    div.textContent = text;

    chat.appendChild(div);
    updateEmptyState();
    chat.scrollTop = chat.scrollHeight;

    return div;
}

function updateEmptyState() {
    const messages = chat.querySelectorAll(".message");

    emptyState.style.display = messages.length === 0 ? "block" : "none";
}

function startTypingAnimation(element) {
    let dots = 0;

    typingInterval = setInterval(() => {
        dots = (dots + 1) % 4;

        element.textContent = "Mimo is typing" + ".".repeat(dots);
    }, 500);
}

function stopTypingAnimation() {
    clearInterval(typingInterval);
}

function updateButtonUI() {
    if (isGenerating) {
        sendIcon.style.display = "none";
        stopIcon.style.display = "block";
    } else {
        sendIcon.style.display = "block";
        stopIcon.style.display = "none";
    }
}

async function getBotResponse(prompt, botMessage) {

    try {
        const res = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "MIMO2",
                prompt: prompt,
                stream: true
            }),
            signal: controller.signal
        });

        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");

        let fullText = "";
        let firstChunk = true;

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;


            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n").filter(Boolean);

            for (const line of lines) {
                try {
                    const json = JSON.parse(line);

                    if (json.response) {

                        if (firstChunk) {
                            stopTypingAnimation();
                            fullText = "";
                            firstChunk = false;
                        }

                        fullText += json.response;
                        botMessage.textContent = fullText;

                        chat.scrollTop = chat.scrollHeight;
                    }

                } catch (e) { }
            }
        }

        isGenerating = false;
        updateButtonUI();

    } catch (err) {
        stopTypingAnimation();
        isGenerating = false;
        updateButtonUI();

        if (err.name === "AbortError") {
            return;
        }

        botMessage.textContent = "AI server not running or failed.";
        console.error(err);
    }
}


updateEmptyState();