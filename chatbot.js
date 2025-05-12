// Multilingual Support and Voice Interaction

// Google Translate API Demo Functionality
async function translateText(text, targetLang) {
    // Simulated translation for illustration (replace with a real API call)
    const translations = {
        'en': text,
        'es': `Traducido: ${text}`,
        'fr': `Traduit: ${text}`,
        'de': `Übersetzt: ${text}`
    };
    return translations[targetLang] || text;
}

// Chatbot Logic
async function processMessage(message, language) {
    const chatWindow = document.getElementById('chat-window');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.textContent = `You: ${message}`;
    chatWindow.appendChild(userMessageDiv);

    // Simulate chatbot response
    const botResponse = `Response to: ${message}`;
    const translatedResponse = await translateText(botResponse, language);

    const botMessageDiv = document.createElement('div');
    botMessageDiv.textContent = `Bot: ${translatedResponse}`;
    chatWindow.appendChild(botMessageDiv);

    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll
}

// Voice Interaction (Speech Recognition and Synthesis)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onresult = (event) => {
    const userInput = event.results[0][0].transcript;
    const language = document.getElementById('language-select').value;
    processMessage(userInput, language);
};

document.getElementById('voice-button').addEventListener('click', () => {
    recognition.start();
});

document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const language = document.getElementById('language-select').value;
    processMessage(userInput, language);
    document.getElementById('user-input').value = ''; // Clear input
});
