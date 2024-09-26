function sendMessage() {
    const input = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Add user's message to the chatbox
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = "You: " + message;
    chatBox.appendChild(userMessage);

    // Get the bot's response and add it to the chatbox
    const botResponse = getBotResponse(message);
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.textContent = "Bot: " + botResponse;
    chatBox.appendChild(botMessage);

    // Clear input and scroll chatbox to the bottom
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// A simple function to generate a response based on keywords
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (input.includes("how are you")) {
        return "I'm just a bunch of code, but I'm doing fine! How about you?";
    } else if (input.includes("name")) {
        return "I'm an artificial chatbot. What's your name?";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else if (input.includes("weather")) {
        return "I can't tell the weather right now, but you can check it online!";
    } else {
        return "Sorry, I don't understand that. Can you ask something else?";
    }
}
