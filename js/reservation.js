const form = document.getElementById("reservationForm");

const reservationList =
document.getElementById("reservationList");

const message =
document.getElementById("message");

let reservations =
JSON.parse(
localStorage.getItem("reservations")
) || [];

displayReservations();

form.addEventListener(
"submit",
function(event){

    event.preventDefault();

    const reservation = {

        name:
        document.getElementById("name").value,

        phone:
        document.getElementById("phone").value,

        guests:
        document.getElementById("guests").value,

        date:
        document.getElementById("date").value,

        time:
        document.getElementById("time").value
    };

    reservations.push(reservation);

    localStorage.setItem(
        "reservations",
        JSON.stringify(reservations)
    );

    message.innerText =
    "✅ Reservation Successful!";

    form.reset();

    displayReservations();
});

function displayReservations(){

    reservationList.innerHTML = "";

    reservations.forEach(function(r){

        reservationList.innerHTML += `

        <div class="booking">

            <h3>${r.name}</h3>

            <p>📞 ${r.phone}</p>

            <p>👥 Guests: ${r.guests}</p>

            <p>📅 ${r.date}</p>

            <p>⏰ ${r.time}</p>

        </div>

        `;
    });
}