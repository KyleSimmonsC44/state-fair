const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
let ticket = 0
eventHub.addEventListener("click", (event) => {
    if (event.target.id === "rideTicket"){
        const customEvent = new CustomEvent ("rideTicketPurchased",{
            // detail: {
            //     rideTicketButtonClicked: true
            // }
        })
        ticket++
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
        TicketBooth()
    }
    if (event.target.id === "foodTicket"){
        const customEvent = new CustomEvent ("foodTicketPurchased",{
            // detail: {
            //     rideTicketButtonClicked: true
            // }
        })
        ticket++
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
        TicketBooth()
    }
    if (event.target.id === "gameTicket"){
        const customEvent = new CustomEvent ("gameTicketPurchased",{
            // detail: {
            //     rideTicketButtonClicked: true
            // }
        })
        ticket++
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
        TicketBooth()
    }
    if (event.target.id === "sideshowTicket"){
        const customEvent = new CustomEvent ("sideshowTicketPurchased",{
            // detail: {
            //     rideTicketButtonClicked: true
            // }
        })
        ticket++
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
        TicketBooth()
    }
    if (event.target.id === "fullPackageTicket"){
        const customEvent = new CustomEvent ("fullPackageTicketPurchased",{
            // detail: {
            //     rideTicketButtonClicked: true
            // }
        })
        ticket++
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
        TicketBooth()
    }

})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
        Tickets Sold = ${ticket}
    `
}