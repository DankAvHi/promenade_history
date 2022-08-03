import { useContext } from "react";
import Button from "../../../../../../Components/UI/Buttons/Button/Button";
import { TicketData } from "../../../../../../shared/interfaces/api/getUserTickets.shared";
import ProfilePageContext from "../../../../ProfilePage.context";
import styles from "./ComboTicket.module.css";

const ComboTicket = ({ name, description, isActive, number }: TicketData) => {
     const { ProfilePageText } = useContext(ProfilePageContext);

     const ComboTicketClasses = isActive ? null : styles.ComboTicket_disabled;

     return (
          <div className={`${styles.ComboTicket} ${ComboTicketClasses}`}>
               <div className={styles.content}>
                    <h3 className={styles.heading}>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.number}>
                         {ProfilePageText.ticketNumber}
                         {number}
                    </p>
               </div>
               <div className={styles.action}>
                    <p className={`${styles.status} `}>
                         {isActive ? ProfilePageText.ticketStatus.active : ProfilePageText.ticketStatus.disabled}
                    </p>
                    {isActive ? <Button text={ProfilePageText.bot_link} className={styles.bot_link} /> : null}
               </div>
          </div>
     );
};

export default ComboTicket;
