const contentTarget = document.querySelectorAll(".food, .games, .sideshow, .rides")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
eventHub.addEventListener("fullPackageTicketPurchased" , event =>{
        // for (const element of contentTarget){
        //     element.innerHTML += `<div class="bigSpender person"></div>` 
        // }
        contentTarget.forEach(element =>{
            element.innerHTML += `<div class="bigSpender person"></div>`
        })
})
}