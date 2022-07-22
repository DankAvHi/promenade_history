import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import fountainImage from "./Assets/fountain.png";
import startPointImage from "./Assets/startPointImage.png";
import styles from "./StartPointSection.module.css";
import StartPointText from "./StartPointSection.text";

const StartPointSection = () => {
     return (
          <div className={styles.StartPointSection}>
               <div className={styles.container}>
                    <SectionHeading className={styles.heading}>{StartPointText.heading}</SectionHeading>

                    <div className={styles.locationInfo}>
                         <img className={styles.locationImage} src={startPointImage} alt="" />

                         <div className={styles.locationTextsContainer}>
                              <div className={styles.locationTexts}>
                                   <p className={styles.locationTitle}>{StartPointText.locationTitle}</p>
                                   <p className={styles.locationDescription}>{StartPointText.location}</p>
                              </div>
                              <div className={styles.locationTexts}>
                                   <p className={styles.timeTitle}>{StartPointText.timeTitle}</p>
                                   <p className={styles.timeDescription}>{StartPointText.time}</p>
                              </div>
                              <div className={styles.locationTexts}>
                                   <p className={styles.sellerPosition}>{StartPointText.sellerPosition}</p>
                                   <img src={fountainImage} className={styles.fountainImage} alt="" />
                              </div>
                         </div>
                    </div>

                    <p className={styles.serviceAcces}>{StartPointText.serviceAcces}</p>
                    <p className={styles.registryInfo}>{StartPointText.registryInfo}</p>
               </div>
          </div>
     );
};

export default StartPointSection;
