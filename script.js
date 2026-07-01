import { db, doc, setDoc } from "./firebase.js";/ Load players from players.json
let playerData = [];

fetch("players.json")
  .then(response => response.json())
  .then(data => {
    playerData = data.tickets;
  });

// Reveal players
revealBtn.addEventListener("click", () => {

    if (revealInput.value.trim() !== REVEAL_CODE) {
        alert("Wrong Reveal Code");
        return;
    }

    const portugal = document.querySelectorAll(".portugal");
    const croatia = document.querySelectorAll(".croatia");

    playerData.forEach((ticket, index) => {

        if (portugal[index])
            portugal[index].textContent = "🇵🇹 " + ticket.portugal;

        if (croatia[index])
            croatia[index].textContent = "🇭🇷 " + ticket.croatia;

    });

});
