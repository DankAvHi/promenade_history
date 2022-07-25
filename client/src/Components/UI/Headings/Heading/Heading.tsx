import React from "react";
import { HeadingProps } from "../Heading.d";
import styles from "./Heading.module.css";

const Heading = ({
     headingLevel = "h2",
     children,
     className,
     fontSize = 2.25,
     fontWeight = 600,
     align = "center",
}: HeadingProps) => {
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
