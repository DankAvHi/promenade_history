import React, { ReactElement } from "react";
import { ComponentPropsType } from "../../IComponent";

export type HeadingPropsType = ComponentPropsType &
     React.HTMLAttributes<HTMLHeadingElement> & {
          headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
          fontSize?: React.CSSProperties["fontSize"];
          fontWeight?: React.CSSProperties["fontWeight"];
          children: ReactElement<HTMLSpanElement>;
          align?: React.CSSProperties["textAlign"];
     };
