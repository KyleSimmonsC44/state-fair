const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "rideTicket"){
        const customEvent = new CustomEvent ("rideTicketPurchased",{
            // detail: {
            //     rideTicketButtonClicked: true
            // }
        })
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}