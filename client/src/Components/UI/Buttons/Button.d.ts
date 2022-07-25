import { ReactElement } from "react";
import { ComponentProps } from "../../Component.d";

export type ButtonProps = ComponentProps &
     React.HTMLAttributes<HTMLButtonElement> & {
          type?: "button" | "link";
          href?: string;
          text?: string | ReactElement<HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement>;
          image?: string;
          disabled?: boolean;
     };
