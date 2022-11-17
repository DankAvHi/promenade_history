import React, { useEffect } from "react";
import closeImage from "../../../Assets/images/closeIcon.png";
import useScrollLock from "../../../hooks/scrollLock";
import { ModalProps } from "../Modal";
import styles from "./TicketsModal.module.css";

const TicketsModal = ({ closeFunction }: ModalProps) => {
     const { lockScroll, unlockScroll } = useScrollLock();

     useEffect(() => {
          lockScroll();

          return () => unlockScroll();
     }, [lockScroll, unlockScroll]);

     const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
     };

     return (
          <div className={styles.TicketsModal} onClick={closeFunction}>
               <div className={styles.border} onClick={stopPropagation}>
                    <button className={styles.closeButton} onClick={closeFunction}>
                         <img className={styles.closeImage} src={closeImage} alt="" />
                    </button>
               </div>
               <iframe
                    title={`Tickets`}
                    className={styles.iframe}
                    src="https://iframeab-pre7135.intickets.ru/event/12897229/"
               ></iframe>
          </div>
     );
};

export default TicketsModal;
