import { useContext } from "react";
import useTopPopup from "../../../../Components/Common/TopPopup/TopPopup.hook";
import Button from "../../../../Components/UI/Buttons/Button/Button";
import Heading from "../../../../Components/UI/Headings/Heading/Heading";
import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import AuthContext from "../../../../contexts/AuthContext";
import textStyles from "../../../../Styles/text.module.css";
import styles from "./HowItWorksSection.module.css";
import { actionCallText, actionText, headingText, itemsTexts } from "./HowItWorksSection.text";

const HowItWorksSection = () => {
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
          <div id="howItWorks" className={styles.HowItWorksSection}>
               <div className={styles.container}>
                    <SectionHeading className={styles.heading}>{headingText}</SectionHeading>

                    <ul className={styles.list}>
                         {itemsTexts.map((item, index) => {
                              return (
                                   <li key={index} className={styles.item}>
                                        <span className={styles.number}>{index + 1}</span>
                                        <div className={styles.textContainer}>
                                             <Heading
                                                  className={styles.contentHeading}
                                                  textAlignClassName={textStyles.startTextAlign}
                                                  fontSizeClassName={textStyles.howItWorksBlockHeadingFontSize}
                                                  fontWeightClassName={textStyles.howItWorksBlockHeadingFontWeight}
                                             >
                                                  {item.heading}
                                             </Heading>
                                             <div className={styles.text}>{item.content}</div>
                                        </div>
                                   </li>
                              );
                         })}
                    </ul>
                    <div className={styles.action}>
                         <p className={styles.actionCall}>{actionCallText}</p>
                         {isAuthenticated && email ? (
                              <Button
                                   text={actionText}
                                   type={"link"}
                                   href="https://moscow.qtickets.events/46542-testovoe-meropriyatie"
                                   external={true}
                                   className={styles.actionButton}
                              />
                         ) : (
                              <Button text={actionText} onClick={notAuthHandler} className={styles.actionButton} />
                         )}
                    </div>
               </div>
          </div>
     );
};

export default HowItWorksSection;
