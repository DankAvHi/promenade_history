import textStyles from "../../../../Styles/text.module.css";
import { HeadingProps } from "../Heading.d";
import Heading from "../Heading/Heading";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = HeadingProps & {
     type?: "big" | "default";
};

const SectionHeading = ({ children, headingLevel = "h2", className, type = "default" }: SectionHeadingProps) => {
     return (
          <Heading
               fontSizeClassName={type === "default" ? styles.SectionHeading : styles.SectionHeading_big}
               fontWeightClassName={textStyles.sectionHeadingFontWeight}
               textAlignClassName={textStyles.centerTextAlign}
               headingLevel={headingLevel}
               className={`${className} ${styles.SectionHeading} `}
          >
               {children}
          </Heading>
     );
};
export default SectionHeading;
