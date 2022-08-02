import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api/index.api";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import Button from "../../Components/UI/Buttons/Button/Button";
import Heading from "../../Components/UI/Headings/Heading/Heading";
import FlatInput from "../../Components/UI/Inputs/FlatInput/FlatInput";
import { PROFILE_PAGE_ROUTE } from "../../shared/routes/pages/pages.shared";
import styles from "./SetEmailPage.module.css";
import SetEmailPageText from "./SetEmailPage.text";

const SetEmailPage = () => {
     const { changeEmail, loading } = api().useChangeEmailApi();
     const { showTopPopup } = useTopPopup();
     const navigate = useNavigate();

     const [email, setEmail] = useState<string>("");

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
     };

     const submitButtonOnClickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          if (email.length === 0) {
               return showTopPopup({ message: { text: "Введите Email", type: "info" } });
          }

          const data = await changeEmail({ email });
          if (data.succes) {
               showTopPopup({ message: { text: "Email успешно изменён", type: "succes", duration: 3000 } });
               navigate(PROFILE_PAGE_ROUTE);
          }
     };

     return (
          <div className={styles.SetEmailPage}>
               <form className={styles.form}>
                    <Heading className={styles.heading}>{SetEmailPageText.heading}</Heading>

                    <FlatInput
                         onChange={inputOnChangeHandler}
                         value={email}
                         className={styles.input}
                         type={"email"}
                         placeholder={SetEmailPageText.placeholder}
                         label={SetEmailPageText.label}
                    />

                    <Button
                         disabled={loading}
                         onClick={submitButtonOnClickHandler}
                         className={styles.submit}
                         size={"max"}
                         text={SetEmailPageText.submit}
                    />
               </form>
          </div>
     );
};

export default SetEmailPage;
