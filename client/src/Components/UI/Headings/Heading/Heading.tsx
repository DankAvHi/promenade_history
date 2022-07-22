import React from "react";
import { HeadingPropsType } from "../IHeading";
import styles from "./Heading.module.css";

const Heading = ({
     headingLevel = "h2",
     children,
     className,
     fontSize = 2.25,
     fontWeight = 600,
     align = "center",
}: HeadingPropsType) => {
     const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
          React.createElement(headingLevel, props, children);

     return (
          <Heading
               style={{ fontSize: `${fontSize}rem`, fontWeight: `${fontWeight}`, textAlign: `${align}` }}
               className={`${styles.Heading} ${className}`}
          >
               {children}
          </Heading>
     );
};
export default Heading;
