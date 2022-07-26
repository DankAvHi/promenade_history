import React from "react";
import textStyles from "../../../../Styles/text.module.css";
import { HeadingProps } from "../Heading.d";
import styles from "./Heading.module.css";

const Heading = ({
     headingLevel = "h2",
     children,
     className,
     fontSizeClassName = textStyles.headingFontSize,
     fontWeightClassName = textStyles.headingFontWeight,
     textAlignClassName = textStyles.headingTextAlign,
}: HeadingProps) => {
     const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
          React.createElement(headingLevel, props, children);

     return (
          <Heading
               className={`${className} ${styles.Heading}  ${fontSizeClassName} ${fontWeightClassName} ${textAlignClassName}`}
          >
               {children}
          </Heading>
     );
};
export default Heading;
