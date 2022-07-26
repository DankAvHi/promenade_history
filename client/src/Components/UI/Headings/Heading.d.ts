import React, { ReactElement } from "react";
import { ComponentProps } from "../../Component";

export type HeadingProps = ComponentProps &
     React.HTMLAttributes<HTMLHeadingElement> & {
          headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
          fontSizeClassName?: string;
          fontWeightClassName?: string;
          children: ReactElement<HTMLSpanElement>;
          textAlignClassName?: string;
     };
