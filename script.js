import {
  db,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  onSnapshot
} from "./firebase.js";

// ----------------------
// MATCH CODE
// ----------------------

const MATCH_CODE = "LAST DANCE";

// ----------------------
// PORTUGAL PLAYERS
// ----------------------

const portugal = [
"#2 Nélson Semedo",
"#3 Rúben Dias",
"#4 Tomás Araújo",
"#5 Diogo Dalot",
"#6 Matheus Nunes",
"#7 Cristiano Ronaldo",
"#8 Bruno Fernandes",
"#9 Gonçalo Ramos",
"#10 Bernardo Silva",
"#11 João Félix",
"#13 Renato Veiga",
"#14 Gonçalo Inácio",
"#15 João Neves",
"#16 Francisco Trincão",
"#17 Rafael Leão",
"#18 Pedro Neto",
"#19 Gonçalo Guedes",
"#20 João Cancelo",
"#21 Rúben Neves",
"#23 Vitinha",
"#24 Samu Costa",
"#25 Nuno Mendes",
"#26 Francisco Conceição"
];

// ----------------------
// CROATIA PLAYERS
// ----------------------

const croatia = [
"#2 Josip Stanišić",
"#3 Marin Pongračić",
"#4 Joško Gvardiol",
"#5 Martin Erlić",
"#6 Josip Šutalo",
"#7 Lovro Majer",
"#8 Mateo Kovačić",
"#9 Andrej Kramarić",
"#10 Luka Modrić",
"#11 Ivan Perišić",
"#12 Luka Sučić",
"#13 Nikola Moro",
"#14 Luka Vušković",
"#15 Mario Pašalić",
"#16 Kristijan Jakić",
"#17 Petar Sučić",
"#18 Marin Baturina",
"#19 Igor Matanović",
"#20 Franjo Ivanović",
"#21 Borna Sosa",
"#22 Josip Juranović",
"#25 Toni Fruk",
"#26 Ante Budimir"
];

// ----------------------
// TICKET CONTAINER
// ----------------------

const ticketContainer =
document.getElementById("tickets");

// ----------------------
// CREATE 23 TICKETS
// ----------------------

function createTickets(){

ticketContainer.innerHTML="";

for(let i=0;i<23;i++){

const card=document.createElement("div");

card.className="ticket";

card.innerHTML=`

<h3>Ticket ${i+1}</h3>

<p><b>Portugal</b></p>

<p id="p${i}">
**************
</p>

<p><b>Croatia</b></p>

<p id="c${i}">
**************
</p>

<p class="status available">
Available
</p>

<button
class="buyBtn"
data-id="${i+1}">
Buy Ticket
</button>

`;

ticketContainer.appendChild(card);

}

}

// ----------------------
// START
// ----------------------

createTickets();
// ----------------------
// PAYMENT MODAL
// ----------------------

const modal = document.getElementById("paymentModal");
const closeBtn = document.querySelector(".close");
const paidBtn = document.getElementById("paidBtn");
const buyerName = document.getElementById("buyerName");

let selectedTicket = null;

// Open payment popup
document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("buyBtn")) return;

    selectedTicket = e.target.dataset.id;

    buyerName.value = "";

    modal.style.display = "block";

});

// Close popup
closeBtn.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if (e.target == modal) {

        modal.style.display = "none";

    }

};

// Buyer clicks Payment Done
paidBtn.addEventListener("click", async () => {

    const name = buyerName.value.trim();

    if (name === "") {

        alert("Please enter your name.");

        return;

    }

    try {

        await setDoc(doc(db, "tickets", selectedTicket), {

            buyer: name,
            status: "Pending",
            ticket: selectedTicket,
            updated: Date.now()

        }, { merge: true });

        alert("Payment submitted. Waiting for admin verification.");

        modal.style.display = "none";

    }

    catch (err) {

        console.error(err);

        alert("Unable to save ticket.");

    }

});// ----------------------
// REAL-TIME FIRESTORE
// ----------------------

const ticketsRef = collection(db, "tickets");

onSnapshot(ticketsRef, (snapshot) => {

    snapshot.forEach((docSnap) => {

        const data = docSnap.data();

        const ticketNo = Number(docSnap.id);

        const card = document.querySelectorAll(".ticket")[ticketNo - 1];

        if (!card) return;

        const status = card.querySelector(".status");
        const button = card.querySelector(".buyBtn");

        status.textContent = data.status;

        status.className = "status " + data.status.toLowerCase();

        if (data.status !== "Available") {

            button.disabled = true;
            button.textContent = data.buyer || "Sold";

        } else {

            button.disabled = false;
            button.textContent = "Buy Ticket";

        }

    });

});

// ----------------------
// REVEAL PLAYERS
// ----------------------

const revealBtn = document.getElementById("revealBtn");

const matchCode = document.getElementById("matchCode");

const message = document.getElementById("message");

revealBtn.addEventListener("click", () => {

    if (matchCode.value.trim() !== MATCH_CODE) {

        message.textContent = "Incorrect code.";

        return;

    }

    message.textContent = "Players Revealed!";

    for (let i = 0; i < 23; i++) {

        document.getElementById("p" + i).textContent = portugal[i];

        document.getElementById("c" + i).textContent = croatia[i];

    }

});
