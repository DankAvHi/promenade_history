import Button from "../../../../Components/UI/Buttons/Button/Button";
import Heading from "../../../../Components/UI/Headings/Heading/Heading";
import styles from "./Footer.module.css";
import FooterText from "./Footer.text";

const Footer = () => {
     return (
          <footer className={styles.Footer}>
               <div className={styles.container}>
                    <section className={styles.section}>
                         <Heading className={styles.heading}>{FooterText.docs.heading}</Heading>

                         <ul className={styles.list}>
                              <li className={styles.item}>
                                   <Button
                                        className={styles.link}
                                        text={FooterText.docs.jurDocs}
                                        href={"https://intickets.ru/documents/oferta/"}
                                        type={"link"}
                                        external={true}
                                   />
                              </li>
                              <li className={styles.item}>
                                   <Button
                                        className={styles.link}
                                        text={FooterText.docs.serviceAgree}
                                        href={"https://intickets.ru/documents/oferta/"}
                                        type={"link"}
                                        external={true}
                                   />
                              </li>
                              <li className={styles.item}>
                                   <Button
                                        className={styles.link}
                                        text={FooterText.docs.refundPolicy}
                                        href={"https://intickets.ru/documents/oferta/"}
                                        type={"link"}
                                        external={true}
                                   />
                              </li>
                         </ul>
                    </section>

                    <section className={styles.section}>
                         <Heading className={styles.heading}>{FooterText.contacts.heading}</Heading>

                         <ul className={styles.list}>
                              <li className={styles.item}>
                                   <p>{FooterText.contacts.mail.label}</p>
                                   <p>{FooterText.contacts.mail.text}</p>
                              </li>
                              <li className={styles.item}>
                                   <p>{FooterText.contacts.phone.label}</p>
                                   <p>{FooterText.contacts.phone.text}</p>
                              </li>
                         </ul>
                    </section>

                    <section className={styles.section}>
                         <Heading className={styles.heading}>{FooterText.requisites.heading}</Heading>

                         <ul className={styles.list}>
                              <li className={styles.item}>
                                   <p>{FooterText.requisites.IP.label}</p>
                                   <p>{FooterText.requisites.IP.text}</p>
                              </li>
                              <li className={styles.item}>
                                   <p>{FooterText.requisites.OGRNIP.label}</p>
                                   <p>{FooterText.requisites.OGRNIP.text}</p>
                              </li>
                              <li className={styles.item}>
                                   <p>{FooterText.requisites.INN.label}</p>
                                   <p>{FooterText.requisites.INN.text}</p>
                              </li>
                         </ul>
                    </section>
               </div>
          </footer>
     );
};

export default Footer;
