import { ReactElement } from "react";
import { ComponentPropsType } from "../../IComponent";

export type ButtonPropsType = ComponentPropsType &
     React.HTMLAttributes<HTMLButtonElement> & {
          type?: "button" | "link";
          href?: string;
          text?: string | ReactElement<HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement>;
          image?: string;
          disabled?: boolean;
     };
