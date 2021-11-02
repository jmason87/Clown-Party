import { getParties } from "./dataAccess.js"




export const displayReservations = () => {
    const parties = getParties()
    const convertToList = (tomato) => {
        return `<li>${tomato.childName}</li>`
    }

    let html = `
        <ul>
            ${
                parties.map(convertToList).join("")
            }    
    `
    return html            
} 