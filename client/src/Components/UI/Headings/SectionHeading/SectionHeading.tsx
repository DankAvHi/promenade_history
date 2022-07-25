import { HeadingProps } from "../Heading.d";
import Heading from "../Heading/Heading";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = HeadingProps & {
     fontSize?: 4 | 5.75;
};

const SectionHeading = ({ children, headingLevel = "h2", className, fontSize = 4 }: SectionHeadingProps) => {
     return (
          <Heading
               fontWeight={800}
               headingLevel={headingLevel}
               fontSize={fontSize}
               className={`${styles.SectionHeading} ${className}`}
          >
               {children}
          </Heading>
     );
};
export default SectionHeading;
