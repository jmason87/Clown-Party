import { getParties } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"




export const displayReservations = () => {
    const parties = getParties()
    const convertToList = (tomato) => {
        return `
            <li>
                ${tomato.childName}
                <button class="request__delete"
                        id="request--${tomato.id}">
                    Deny
                </button>
            </li>
        `
    }

    let html = `
        <ul>
            ${
                parties.map(convertToList).join("")
            }    
    `
    return html            
} 

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})