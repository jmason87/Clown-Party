import { sendReservation } from "./dataAccess.js"

export const reservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numOfKids">Number of kids</label>
            <input type="number" name="numOfKids" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfRes">Length of Reservation (hours)</label>
            <input type="number" name="lengthOfRes" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Reservation</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userChildName = document.querySelector("input[name='childName']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userKidCount = document.querySelector("input[name='numOfKids']").value
        const userHours = document.querySelector("input[name='lengthOfRes']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
           childName: userChildName,
            address: userAddress,
            numOfKids: userKidCount,
            lengthOfRes: userHours,
            Date: userDate
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})