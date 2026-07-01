const ticketsDiv = document.getElementById("tickets");

const revealBtn = document.getElementById("revealBtn");
const revealInput = document.getElementById("revealCode");

const REVEAL_CODE = "LAST DANCE";

let revealPlayers = false;

// Create 23 tickets
for (let i = 1; i <= 23; i++) {

    const card = document.createElement("div");
    card.className = "ticket";

    card.innerHTML = `
        <h3>🎟 Ticket ${i}</h3>

        <div class="player portugal">🇵🇹 ?????</div>

        <div class="player croatia">🇭🇷 ?????</div>

        <div class="status">🟢 Available</div>

        <input
            type="text"
            placeholder="Enter Buyer Name">

        <img src="qr.png" alt="QR Code">

        <button>
            Buy Ticket
        </button>
    `;

    ticketsDiv.appendChild(card);

}
