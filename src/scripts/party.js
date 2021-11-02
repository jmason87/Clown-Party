import { displayReservations } from "./displayReservations.js"
import { reservationForm } from "./reservationForm.js"


export const party = () => {
    return `
    <h1>Bubble's totalty not creepy clown parties</h1>
    <section class="reservationForm">
        ${reservationForm()}
    </section>

    <section class="serviceRequests">
        <h2>Reservations</h2>
        ${displayReservations()}
    </section>
    `
}
