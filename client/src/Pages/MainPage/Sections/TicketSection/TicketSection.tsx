import Heading from "../../../../Components/UI/Headings/Heading/Heading";
import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import emojiImage from "./Assets/emojiIcon.png";
import styles from "./TicketSection.module.css";
import TicketSectionText from "./TicketSection.text";

const TicketSection = () => {
     return (
          <div id="tickets" className={styles.TicketSection}>
               <div className={styles.container}>
                    <SectionHeading className={styles.heading}>{TicketSectionText.heading}</SectionHeading>

                    <div className={styles.tickets}>
                         <div className={styles.comboTicket}>
                              <Heading className={styles.comboHeading} headingLevel="h3">
                                   {TicketSectionText.historyCombo.heading}
                              </Heading>

                              <div className={styles.comboDescription}>
                                   <p className={styles.comboDescriptionText}>
                                        {TicketSectionText.historyCombo.description}
                                   </p>
                                   <img className={styles.comboImage} src={emojiImage} alt="" />
                              </div>

                              <button className={styles.comboPrice}>{TicketSectionText.historyCombo.price}</button>
                         </div>

                         <div className={styles.beloraTicket}>
                              <Heading className={styles.beloraHeading} headingLevel="h3">
                                   {TicketSectionText.historyBelora.heading}
                              </Heading>

                              <div className={styles.beloraDescription}>
                                   <p className={styles.beloraDescriptionText}>
                                        {TicketSectionText.historyBelora.description}
                                   </p>
                              </div>

                              <button className={styles.beloraPrice}>{TicketSectionText.historyBelora.price}</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TicketSection;
