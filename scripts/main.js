// Import and invoke the ticket booth component function
import {TicketBooth} from './TicketBooth.js'
import {RideTicketHolders} from './rides/RideTicketHolders.js'
import {FoodTicketHolders} from './food/FoodTicketHolders.js'
import { GameTicketHolders } from './games/GameTicketHolders.js'
import {SideshowTicketHolders} from './sideshows/SideshowsTicketHolder.js'
import {FullPackageTicketHolders} from './fullpackage/FullPackageTicketHolders.js'
FullPackageTicketHolders()
TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()