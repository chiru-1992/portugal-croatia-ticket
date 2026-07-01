const ticketsDiv = document.getElementById("tickets");
const revealBtn = document.getElementById("revealBtn");
const revealInput = document.getElementById("revealCode");

const REVEAL_CODE = "LAST DANCE";

let players = [];

// Load players.json
async function loadPlayers() {
    const response = await fetch("players.json");
    const data = await response.json();
    players = data.tickets;

    createTickets();
}

function createTickets() {

    ticketsDiv.innerHTML = "";

    players.forEach((ticket) => {

        const card = document.createElement("div");

        card.className = "ticket";

        card.innerHTML = `
            <h3>🎟 Ticket ${ticket.ticket}</h3>

            <div class="player portugal">🇵🇹 ?????</div>

            <div class="player croatia">🇭🇷 ?????</div>

            <div class="status">🟢 Available</div>

            <input
                type="text"
                placeholder="Enter Buyer Name">

            <img src="qr.png" alt="QR Code">

            <button>Buy Ticket</button>
        `;

        ticketsDiv.appendChild(card);

    });

}

loadPlayers();
