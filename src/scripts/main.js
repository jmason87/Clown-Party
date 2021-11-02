import { fetchReservations } from "./dataAccess.js"
import { reservationForm } from "./reservationForm.js"
import { party } from "./party.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {

            mainContainer.innerHTML = party()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)