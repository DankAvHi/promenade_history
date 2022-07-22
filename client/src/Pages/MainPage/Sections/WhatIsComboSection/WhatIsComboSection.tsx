import SectionHeading from "../../../../Components/UI/Headings/SectionHeading/SectionHeading";
import styles from "./WhatIsComboSection.module.css";
import WhatIsComboSectionText from "./WhatIsComboSection.text";

const WhatIsComboSection = () => {
     return (
          <div className={styles.WhatIsComboSection}>
               <div className={styles.container}>
                    <SectionHeading className={styles.heading}>{WhatIsComboSectionText.heading}</SectionHeading>

                    <div className={styles.text}>{WhatIsComboSectionText.content}</div>
               </div>
          </div>
     );
};

export default WhatIsComboSection;
