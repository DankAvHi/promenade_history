import React, { ReactElement } from "react";
import { ComponentProps } from "../../Component.d";

export type ButtonProps = ComponentProps &
     React.HTMLAttributes<HTMLButtonElement> & {
          type?: "button" | "link";
          href?: string;
          external?: boolean;
          target?: React.HTMLAttributeAnchorTarget;
          text?: string | ReactElement<HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement>;
          image?: string;
          disabled?: boolean;

          size?: "max" | "content";
     };
