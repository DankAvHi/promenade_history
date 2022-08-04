import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import styles from "./PromenadeHistorySection.module.css";
import PromenadeHistorySectionText from "./PromenadeHistorySection.text";

const PromenadeHistorySection = () => {
     return (
          <div id="promenadeHistory" className={styles.PromenadeHistorySection}>
               <div className={styles.container}>
                    <SectionHeading headingLevel="h1" className={styles.heading}>
                         {PromenadeHistorySectionText.heading}
                    </SectionHeading>

                    <p className={styles.text}>
                         <span className={styles.accientText}> {PromenadeHistorySectionText.accient}</span>
                         {PromenadeHistorySectionText.section}
                    </p>
                    {/* <img src={sectionImage} className={styles.image} alt="" /> */}
               </div>
          </div>
     );
};

export default PromenadeHistorySection;
