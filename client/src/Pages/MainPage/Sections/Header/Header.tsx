import { useContext, useState } from "react";
import useTopPopup from "../../../../Components/Common/TopPopup/TopPopup.hook";
import TicketsModal from "../../../../Components/Modals/TicketsModal/TicketsModal";
import Button from "../../../../Components/UI/Buttons/Button/Button";
import AuthContext from "../../../../contexts/AuthContext";
import logoImage from "../../Assets/Images/PromenadeHistoryLogo.png";
import styles from "./Header.module.css";
import HeaderText from "./HeaderText";

export default function Header() {
     const { isAuthenticated, email } = useContext(AuthContext);
     const { showTopPopup } = useTopPopup();

     const [modalIsOpen, setModalIsOpen] = useState(false);

     const notAuthHandler = () => {
          if (!isAuthenticated) {
               return showTopPopup({
                    message: { text: "Авторизуйтесь через ВК для покупки", duration: 5000, type: "info" },
               });
          }
          showTopPopup({
               message: {
                    text: "К вашему аккаунту не привязан Email, Добавьте его на странице профиля",
                    duration: 5000,
                    type: "info",
               },
          });
     };

     const buyButtonOnClickHandler = () => {
          setModalIsOpen(true);
     };
     const closeModalFunction = () => {
          setModalIsOpen(false);
     };

     return (
          <>
               <div className={styles.Header}>
                    <h1 style={{ visibility: "hidden", lineHeight: "0" }}>Promenade History</h1>
                    <div className={styles.container}>
                         <img className={styles.logoImage} src={logoImage} alt="" />

                         <div className={styles.content}>
                              <p className={styles.accientText}>{HeaderText.accientText}</p>
                              <p className={styles.firstSubText}>{HeaderText.firstSubText}</p>
                              <p className={styles.heroText}>{HeaderText.heroText}</p>
                              <p className={styles.secondSubText}>{HeaderText.secondSubText}</p>

                              {/* {isAuthenticated && email ? (
                              <Button
                                   size="max"
                                   type="link"
                                   external={true}
                                   href="https://krasnodar.qtickets.events/46947-history-combo"
                                   text={HeaderText.buttonText}
                                   className={styles.button}
                              />
                         ) : (
                              <Button
                                   size="max"
                                   onClick={notAuthHandler}
                                   text={HeaderText.buttonText}
                                   className={styles.button}
                              />
                         )} */}

                              <Button
                                   size="max"
                                   text={HeaderText.buttonText}
                                   className={styles.button}
                                   onClick={buyButtonOnClickHandler}
                              />

                              <p className={styles.buttonSubText}>{HeaderText.buttonSubText}</p>
                         </div>
                    </div>
               </div>
               {modalIsOpen ? <TicketsModal closeFunction={closeModalFunction} /> : null}
          </>
     );
}
