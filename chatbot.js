document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    const botResponses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm here to help!",
        "what is your name": "I'm your friendlyChatbot!",
        "help": "Sure, let me know what you need help with. I'm here for you!",
        "bye": "Goodbye!!",
        "default": "I'm not sure I understand that. Can you rephrase?"
    };

    function addMessage(message, className) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `chat-message ${className}`;
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();
        for (const key in botResponses) {
            if (userMessage.includes(key)) {
                return botResponses[key];
            }
        }
        return botResponses["default"];
    }

    sendButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user-message");
            userInput.value = "";

            setTimeout(() => {
                const botMessage = getBotResponse(userMessage);
                addMessage(botMessage, "bot-message");
            }, 500);
        }
    });

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});