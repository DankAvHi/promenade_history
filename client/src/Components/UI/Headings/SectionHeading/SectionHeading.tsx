import Heading from "../Heading/Heading";
import { HeadingPropsType } from "../IHeading";
import styles from "./SectionHeading.module.css";

type SectionHeadingPropsType = HeadingPropsType & {
     fontSize?: 4.625 | 6;
};

const SectionHeading = ({ children, className, fontSize = 4.625 }: SectionHeadingPropsType) => {
     return (
          <Heading fontWeight={800} fontSize={fontSize} className={`${styles.SectionHeading} ${className}`}>
               {children}
          </Heading>
     );
};
export default SectionHeading;
