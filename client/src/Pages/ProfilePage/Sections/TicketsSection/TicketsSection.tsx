import { useContext } from "react";
import Heading from "../../../../Components/UI/Headings/Heading/Heading";
import ProfilePageContext from "../../ProfilePage.context";
import ComboTicket from "./Components/ComboTicket/ComboTicket";
import styles from "./TicketsSection.module.css";

const TicketsSection = () => {
     const { tickets, ProfilePageText } = useContext(ProfilePageContext);

     if (!tickets || tickets.length < 1) {
          return null;
     }

     const disabledTickets: boolean = tickets.filter((ticket) => !ticket.isActive).length > 0;

     return (
          <div className={styles.TicketsSection}>
               <Heading className={styles.heading} headingLevel="h3">
                    {ProfilePageText.ticketHeading}
               </Heading>
               <div className={styles.active}>
                    {tickets?.map((ticket) => {
                         if (ticket.isActive) {
                              switch (ticket.name) {
                                   case "History Combo":
                                        return <ComboTicket {...ticket} />;

                                   case "History Belora":
                                        // return <BeloraTicket {...ticket} />;
                                        return null;

                                   default:
                                        return null;
                              }
                         }
                         return null;
                    })}
               </div>
               {disabledTickets ? (
                    <div className={styles.disabled}>
                         <Heading className={styles.heading}>{ProfilePageText.ticketDisabled}</Heading>
                         {tickets?.map((ticket) => {
                              if (!ticket.isActive) {
                                   switch (ticket.name) {
                                        case "History Combo":
                                             return <ComboTicket {...ticket} />;

                                        case "History Belora":
                                             // return <BeloraTicket {...ticket} />;
                                             return null;

                                        default:
                                             return null;
                                   }
                              }
                              return null;
                         })}
                    </div>
               ) : null}
          </div>
     );
};

export default TicketsSection;
