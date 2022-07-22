import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import styles from "./MoreAboutSection.module.css";
import MoreAboutSectionText from "./MoreAboutSection.text";

const MoreAboutSection = () => {
     return (
          <div className={styles.MoreAboutSection}>
               <div className={styles.container}>
                    <SectionHeading className={styles.heading}>{MoreAboutSectionText.heading}</SectionHeading>

                    <p className={styles.content}>{MoreAboutSectionText.content}</p>
               </div>
          </div>
     );
};

export default MoreAboutSection;
