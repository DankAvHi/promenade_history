import { Link } from "react-router-dom";
import { ButtonProps } from "../Button.d";
import styles from "./Button.module.css";

const Button = ({
     className,
     onClick,
     type = "button",
     text,
     image,
     disabled,
     href = "",
     target = "_self",
     external = false,
     size = "content",
}: ButtonProps) => {
     const sizeClassName = size === "max" ? styles.Button_max : null;

     if (type === "link") {
          return disabled ? (
               <button className={`${styles.Button} ${sizeClassName} ${className}`} disabled={disabled}>
                    {text}
                    {image ? <img src={image} alt="" /> : null}
               </button>
          ) : external ? (
               <a className={`${styles.Button} ${sizeClassName} ${className}`} target={target} href={href}>
                    {text}
                    {image ? <img src={image} alt="" /> : null}
               </a>
          ) : (
               <Link className={`${styles.Button} ${sizeClassName} ${className}`} target={target} to={href}>
                    {text}
                    {image ? <img src={image} alt="" /> : null}
               </Link>
          );
     }
     return (
          <button className={`${styles.Button} ${sizeClassName} ${className}`} onClick={onClick} disabled={disabled}>
               {text}
               {image ? <img src={image} alt="" /> : null}
          </button>
     );
};
export default Button;
