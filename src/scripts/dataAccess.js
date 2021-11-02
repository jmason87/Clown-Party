const reservationState = {
    reservations: []
}

const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (partyReservation) => {
                
                // Store the external state in application state
                reservationState.reservations = partyReservation
            }
        )
}



export const getParties = () => {
    return reservationState.reservations.map(reservation => ({...reservation}))
}

const mainContainer = document.querySelector("#container")

export const sendReservation = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
