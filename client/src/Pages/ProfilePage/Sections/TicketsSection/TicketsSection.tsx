import { useContext } from "react";
import Heading from "../../../../Components/UI/Headings/Heading/Heading";
import ProfilePageContext from "../../ProfilePage.context";
import BeloraTicket from "./Components/BeloraTicket/BeloraTicket";
import ComboTicket from "./Components/ComboTicket/ComboTicket";
import styles from "./TicketsSection.module.css";

const TicketsSection = () => {
     const { tickets, ProfilePageText } = useContext(ProfilePageContext);
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
                                        return <BeloraTicket {...ticket} />;

                                   default:
                                        return null;
                              }
                         }
                         return null;
                    })}
               </div>
               <div className={styles.disabled}>
                    <Heading className={styles.heading}>{ProfilePageText.ticketDisabled}</Heading>
                    {tickets?.map((ticket) => {
                         if (!ticket.isActive) {
                              switch (ticket.name) {
                                   case "History Combo":
                                        return <ComboTicket {...ticket} />;

                                   case "History Belora":
                                        return <BeloraTicket {...ticket} />;

                                   default:
                                        return null;
                              }
                         }
                         return null;
                    })}
               </div>
          </div>
     );
};

export default TicketsSection;
