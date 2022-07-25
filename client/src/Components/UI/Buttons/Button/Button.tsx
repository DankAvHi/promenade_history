import { Link } from "react-router-dom";
import { ButtonProps } from "../Button.d";
import styles from "./Button.module.css";

const Button = ({ className, onClick, type = "button", text, image, href = "", disabled }: ButtonProps) => {
     if (type === "link") {
          return disabled ? (
               <button className={`${styles.Button} ${className}`} disabled={disabled}>
                    {text}
                    {image ? <img src={image} alt="" /> : null}
               </button>
          ) : (
               <Link className={`${styles.Button} ${className}`} to={href}>
                    {text}
                    {image ? <img src={image} alt="" /> : null}
               </Link>
          );
     }
     return (
          <button className={`${styles.Button} ${className}`} onClick={onClick} disabled={disabled}>
               {text}
               {image ? <img src={image} alt="" /> : null}
          </button>
     );
};
export default Button;
