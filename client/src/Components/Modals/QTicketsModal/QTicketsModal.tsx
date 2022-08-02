import React, { useEffect } from "react";
import closeImage from "../../../Assets/images/closeIcon.png";
import useScrollLock from "../../../hooks/scrollLock";
import { ModalProps } from "../Modal";
import styles from "./QTicketsModal.module.css";

const QTicketsModal = ({ closeFunction }: ModalProps) => {
     const { lockScroll, unlockScroll } = useScrollLock();

     useEffect(() => {
          lockScroll();

          return () => unlockScroll();
     }, [lockScroll, unlockScroll]);

     const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
     };

     return (
          <div className={styles.QTicketsModal} onClick={closeFunction}>
               <div className={styles.border} onClick={stopPropagation}>
                    <button className={styles.closeButton} onClick={closeFunction}>
                         <img className={styles.closeImage} src={closeImage} alt="" />
                    </button>
               </div>
               <iframe
                    title={`qtickets`}
                    className={styles.iframe}
                    src="https://prom-history.qtickets.ru/event/46542?base_color=008f72"
               ></iframe>
          </div>
     );
};

export default QTicketsModal;
