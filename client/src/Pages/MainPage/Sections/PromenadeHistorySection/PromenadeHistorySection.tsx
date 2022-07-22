import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import sectionImage from "./Assets/sectionImage.png";
import styles from "./PromenadeHistorySection.module.css";
import PromenadeHistorySectionText from "./PromenadeHistorySection.text";

const PromenadeHistorySection = () => {
     return (
          <div className={styles.PromenadeHistorySection}>
               <div className={styles.container}>
                    <SectionHeading className={styles.heading}>{PromenadeHistorySectionText.heading}</SectionHeading>

                    <p className={styles.text}>
                         <span className={styles.accientText}> {PromenadeHistorySectionText.accient}</span>
                         {PromenadeHistorySectionText.section}
                    </p>
                    <img src={sectionImage} className={styles.image} alt="" />
               </div>
          </div>
     );
};

export default PromenadeHistorySection;
