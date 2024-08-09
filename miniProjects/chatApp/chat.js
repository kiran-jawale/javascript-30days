const messagesList = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const usernameInput = document.getElementById("username-input");
const joinButton = document.getElementById("join-button");
const chatContainer = document.getElementById("chat-container");
const usernameContainer = document.getElementById("username-container");

let username = "";

joinButton.addEventListener("click", () => {
    username = usernameInput.value.trim();
    if (username) {
        chatContainer.style.display = "block";
        usernameContainer.style.display = "none";
        connectWebSocket();
    }
});

function connectWebSocket() {
    const ws = new WebSocket("ws://localhost:9000");

    ws.onopen = () => {
        console.log("WebSocket connection opened");
        sendButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                // Send the message along with the username
                ws.send(JSON.stringify({ username, message }));

                // Display the sent message on the right side (user's side)
                const li = document.createElement("li");
                li.classList.add("user-message");
                li.innerHTML = `<div class="message"><strong>${username}: </strong>${message}</div>`;
                messagesList.appendChild(li);

                messageInput.value = '';
            }
        });
    };

    ws.onmessage = async (event) => {
        const parsedData = JSON.parse(event.data);
        
        // Check if the message is not from the current user
        if (parsedData.username !== username) {
            const li = document.createElement("li");
            li.classList.add("bot-message");
            li.innerHTML = `<div class="message"><strong>${parsedData.username}: </strong>${parsedData.message}</div>`;
            messagesList.appendChild(li);
        }
    };

    ws.onclose = () => {
        console.log("WebSocket connection closed");
    };
}
