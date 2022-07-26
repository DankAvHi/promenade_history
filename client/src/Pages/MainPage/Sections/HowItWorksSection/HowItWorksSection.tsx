import Button from "../../../../Components/UI/Buttons/Button/Button";
import Heading from "../../../../Components/UI/Headings/Heading/Heading";
import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import textStyles from "../../../../Styles/text.module.css";
import styles from "./HowItWorksSection.module.css";
import { actionCallText, actionText, headingText, itemsTexts } from "./HowItWorksSection.text";

const HowItWorksSection = () => {
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
                         <Button text={actionText} className={styles.actionButton} />
                    </div>
               </div>
          </div>
     );
};

export default HowItWorksSection;
