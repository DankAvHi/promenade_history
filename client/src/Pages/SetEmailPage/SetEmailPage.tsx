import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api/index.api";
import Loader from "../../Components/Common/loader/Loader";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import Button from "../../Components/UI/Buttons/Button/Button";
import Heading from "../../Components/UI/Headings/Heading/Heading";
import FlatInput from "../../Components/UI/Inputs/FlatInput/FlatInput";
import { PROFILE_ROUTE } from "../../shared/routes/api/api.shared";
import styles from "./SetEmailPage.module.css";
import SetEmailPageText from "./SetEmailPage.text";

const SetEmailPage = () => {
     const { changeEmail, loading } = api().useChangeEmailApi();
     const { verifyEmail, loading: verifyLoading } = api().useVerifyEmailApi();
     const { checkEmailVerification, loading: checkLoading } = api().useCheckEmailVerificationApi();
     const { cancelEmailChangeVerification, loading: cancelLoading } = api().useCancelEmailChangeApi();
     const { showTopPopup } = useTopPopup();
     const navigate = useNavigate();

     const [email, setEmail] = useState<string>("");
     const [verifyCode, setVerifyCode] = useState<string>("");
     const [isEmailVerified, setIsEmailVerified] = useState<boolean>();

     const loadCheckEmailVerification = useCallback(async () => {
          const data = await checkEmailVerification();

          if (data.succes) {
               setIsEmailVerified(data.isEmailVerified);
          }
     }, [checkEmailVerification]);

     const emailInputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
     };

     const verifyCodeInputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setVerifyCode(event.target.value);
     };

     const emailSubmitButtonOnClickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          if (email.length === 0) {
               return showTopPopup({ message: { text: "Введите Email", type: "info" } });
          }

          const data = await changeEmail({ email });
          if (data.succes) {
               setIsEmailVerified(false);
          }
     };

     const verifyCodeSubmitButtonOnClickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          if (verifyCode.length === 0) {
               return showTopPopup({ message: { text: "Введите Код", type: "info" } });
          }

          const data = await verifyEmail({ verifyCode: Number(verifyCode) });
          if (data.succes) {
               navigate(PROFILE_ROUTE);
               showTopPopup({ message: { text: "Email Успешно изменён", type: "succes" } });
          }
     };

     const cancelEmailChangeButtonOnClickHandler = async () => {
          const data = await cancelEmailChangeVerification();

          if (data.succes) {
               navigate(PROFILE_ROUTE);
          }
     };

     useEffect(() => {
          loadCheckEmailVerification();
     }, [loadCheckEmailVerification]);

     if (checkLoading) {
          return <Loader />;
     }

     if (!isEmailVerified) {
          return (
               <div className={styles.SetEmailPage}>
                    <form className={styles.form}>
                         <Heading className={styles.heading}>{SetEmailPageText.verify.heading}</Heading>

                         <FlatInput
                              onChange={verifyCodeInputOnChangeHandler}
                              value={verifyCode}
                              className={styles.input}
                              type={"number"}
                              placeholder={SetEmailPageText.placeholder}
                              label={SetEmailPageText.verify.label}
                         />

                         <Button
                              disabled={verifyLoading}
                              onClick={verifyCodeSubmitButtonOnClickHandler}
                              className={styles.submit}
                              size={"max"}
                              text={SetEmailPageText.submit}
                         />
                         <Button
                              disabled={cancelLoading}
                              onClick={cancelEmailChangeButtonOnClickHandler}
                              className={styles.submit}
                              size={"max"}
                              text={SetEmailPageText.cancel}
                         />
                    </form>
               </div>
          );
     }

     return (
          <div className={styles.SetEmailPage}>
               <form className={styles.form}>
                    <Heading className={styles.heading}>{SetEmailPageText.heading}</Heading>

                    <FlatInput
                         onChange={emailInputOnChangeHandler}
                         value={email}
                         className={styles.input}
                         type={"email"}
                         placeholder={SetEmailPageText.placeholder}
                         label={SetEmailPageText.label}
                    />

                    <Button
                         disabled={loading}
                         onClick={emailSubmitButtonOnClickHandler}
                         className={styles.submit}
                         size={"max"}
                         text={SetEmailPageText.submit}
                    />
               </form>
          </div>
     );
};

export default SetEmailPage;
