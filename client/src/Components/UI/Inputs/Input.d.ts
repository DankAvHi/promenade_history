import React from "react";
import { ComponentProps } from "../../Component";

export type InputProps = ComponentProps &
     React.InputHTMLAttributes<HTMLInputElement> & {
          label?: string;
     };
