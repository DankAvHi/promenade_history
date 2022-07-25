import React, { ReactElement } from "react";
import { ComponentProps } from "../../Component";

export type HeadingProps = ComponentProps &
     React.HTMLAttributes<HTMLHeadingElement> & {
          headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
          fontSize?: React.CSSProperties["fontSize"];
          fontWeight?: React.CSSProperties["fontWeight"];
          children: ReactElement<HTMLSpanElement>;
          align?: React.CSSProperties["textAlign"];
     };
