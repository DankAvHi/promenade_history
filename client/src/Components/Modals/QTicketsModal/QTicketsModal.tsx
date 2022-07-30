import { useEffect } from "react";
import useScrollLock from "../../../hooks/scrollLock";
import styles from "./QTicketsModal.module.css";

const QTicketsModal = () => {
     const { lockScroll, unlockScroll } = useScrollLock();

     useEffect(() => {
          lockScroll();

          return () => unlockScroll();
     }, [lockScroll, unlockScroll]);

     return (
          <div className={styles.QTicketsModal}>
               <iframe
                    title={`qtickets`}
                    className={styles.iframe}
                    src="https://prom-history.qtickets.ru/event/46542?base_color=008f72"
               ></iframe>
          </div>
     );
};

export default QTicketsModal;
