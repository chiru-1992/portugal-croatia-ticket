import {
  db,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  onSnapshot
} from "./firebase.js";

// ======================
// ADMIN PASSWORD
// ======================

const ADMIN_PASSWORD = "MONEY";

// ======================
// ELEMENTS
// ======================

const loginBtn = document.getElementById("loginBtn");
const password = document.getElementById("adminPassword");
const message = document.getElementById("loginMessage");
const adminArea = document.getElementById("adminArea");
const tableBody = document.querySelector("#ticketTable tbody");

const shuffleBtn = document.getElementById("shuffleBtn");
const resetAllBtn = document.getElementById("resetAllBtn");

// ======================
// LOGIN
// ======================

loginBtn.onclick = () => {

    if (password.value.trim() !== ADMIN_PASSWORD) {

        message.innerHTML = "Wrong Password";

        return;

    }

    message.innerHTML = "Login Successful";

    adminArea.style.display = "block";

    loadTickets();

};

// ======================
// LOAD TICKETS
// ======================

function loadTickets() {

    onSnapshot(collection(db, "tickets"), (snapshot) => {

        tableBody.innerHTML = "";

        snapshot.forEach((ticket) => {

            const data = ticket.data();

            const row = document.createElement("tr");

            row.innerHTML = `

<td>${ticket.id}</td>

<td>${data.buyer || "-"}</td>

<td>${data.status}</td>

<td>

<button onclick="approve('${ticket.id}')">

Approve

</button>

<button onclick="resetTicket('${ticket.id}')">

Reset

</button>

</td>

`;

            tableBody.appendChild(row);

        });

    });

}
