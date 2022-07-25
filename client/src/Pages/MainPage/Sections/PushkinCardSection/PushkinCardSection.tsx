import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import cardImage from "./Assets/cardImage.png";
import createAccountImage from "./Assets/createAccountImage.png";
import downloadImage from "./Assets/downloadImage.png";
import sectionImage from "./Assets/sectionImage.png";
import styles from "./PushkinCardSection.module.css";
import PushkinCardSectionText from "./PushkinCardSection.text";

const PushkinCardSection = () => {
     return (
          <div id="pushkinCard" className={styles.PushkinCardSection}>
               <div className={styles.container}>
                    <SectionHeading fontSize={5.75} className={styles.heading}>
                         {PushkinCardSectionText.heading}
                    </SectionHeading>

                    <p className={styles.subHeading}>{PushkinCardSectionText.subHeading}</p>

                    <img className={styles.sectionImage} src={sectionImage} alt="" />

                    <div className={styles.steps}>
                         <div className={styles.step}>
                              <img src={createAccountImage} className={styles.stepImage} alt="" />
                              <p className={styles.stepText}>{PushkinCardSectionText.createAccount}</p>
                         </div>
                         <div className={styles.step}>
                              <img src={downloadImage} className={styles.stepImage} alt="" />
                              <p className={styles.stepText}>{PushkinCardSectionText.download}</p>
                         </div>
                         <div className={styles.step}>
                              <img src={cardImage} className={styles.stepImage} alt="" />
                              <p className={styles.stepText}>{PushkinCardSectionText.card}</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PushkinCardSection;
