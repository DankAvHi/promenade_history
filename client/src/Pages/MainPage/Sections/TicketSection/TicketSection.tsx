import { useContext } from "react";
import useTopPopup from "../../../../Components/Common/TopPopup/TopPopup.hook";
import Button from "../../../../Components/UI/Buttons/Button/Button";
import Heading from "../../../../Components/UI/Headings/Heading/Heading";
import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import AuthContext from "../../../../contexts/AuthContext";
import emojiImage from "./Assets/emojiIcon.png";
import styles from "./TicketSection.module.css";
import TicketSectionText from "./TicketSection.text";

const TicketSection = () => {
     const { isAuthenticated, email } = useContext(AuthContext);
     const { showTopPopup } = useTopPopup();

     const notAuthHandler = () => {
          if (!isAuthenticated) {
               return showTopPopup({
                    message: { text: "Авторизуйтесь через ВК для покупки", duration: 5000, type: "info" },
               });
          }
          showTopPopup({
               message: {
                    text: "К вашему аккаунту не привязан Email, Добавьте его на странице профиля",
                    duration: 5000,
                    type: "info",
               },
          });
     };
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
                              {/* {isAuthenticated && email ? (
                                   <Button
                                        type="link"
                                        href="https://moscow.qtickets.events/46542-testovoe-meropriyatie"
                                        external={true}
                                        className={styles.comboPrice}
                                        text={TicketSectionText.historyCombo.price}
                                   />
                              ) : (
                                   <Button
                                        className={styles.comboPrice}
                                        text={TicketSectionText.historyCombo.price}
                                        onClick={notAuthHandler}
                                   />
                              )} */}
                              <Button
                                   type="link"
                                   href="https://moscow.qtickets.events/46542-testovoe-meropriyatie"
                                   external={true}
                                   className={styles.comboPrice}
                                   text={TicketSectionText.historyCombo.price}
                              />
                         </div>

                         {/* <div className={styles.beloraTicket}>
                              <Heading className={styles.beloraHeading} headingLevel="h3">
                                   {TicketSectionText.historyBelora.heading}
                              </Heading>

                              <div className={styles.beloraDescription}>
                                   <p className={styles.beloraDescriptionText}>
                                        {TicketSectionText.historyBelora.description}
                                   </p>
                              </div>
                              {isAuthenticated && email ? (
                                   <Button
                                        type="link"
                                        href="https://moscow.qtickets.events/46542-testovoe-meropriyatie"
                                        external={true}
                                        className={styles.beloraPrice}
                                        text={TicketSectionText.historyBelora.price}
                                   />
                              ) : (
                                   <Button
                                        className={styles.beloraPrice}
                                        text={TicketSectionText.historyBelora.price}
                                        onClick={notAuthHandler}
                                   />
                              )}
                         </div> */}
                    </div>
               </div>
          </div>
     );
};

export default TicketSection;
