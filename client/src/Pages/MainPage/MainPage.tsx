import styles from "./MainPage.module.css";
import Header from "./Sections/Header/Header";
import HowItWorksSection from "./Sections/HowItWorksSection/HowItWorksSection";
import MoreAboutSection from "./Sections/MoreAboutSection/MoreAboutSection";
import WhatIsSection from "./Sections/PromenadeHistorySection/PromenadeHistorySection";
import PushkinCardSection from "./Sections/PushkinCardSection/PushkinCardSection";
import StartPointSection from "./Sections/StartPointSection/StartPointSection";
import WhatIsComboSection from "./Sections/WhatIsComboSection/WhatIsComboSection";

export default function MainPage() {
     return (
          <div className={styles.MainPage}>
               <Header />
               <main className={styles.main}>
                    <WhatIsSection />
                    <HowItWorksSection />
                    <StartPointSection />
                    <MoreAboutSection />
                    <WhatIsComboSection />
                    <PushkinCardSection />
               </main>
          </div>
     );
}
