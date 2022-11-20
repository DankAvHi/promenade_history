import textStyles from "../../../../Styles/text.module.css";

const FooterText = {
     docs: {
          heading: <span className={textStyles.crimson90}>{"Документы"}</span>,
          jurDocs: <span>{"Юридические документы"}</span>,
          serviceAgree: <span>{"Договор оказания услуг"}</span>,
          refundPolicy: <span>{"Политика возврата билетов"}</span>,
     },
     contacts: {
          heading: <span className={textStyles.crimson90}>{"Контакты"}</span>,
          mail: {
               label: <span>{"Почта: "}</span>,
               text: <span>{"promhistory@gmail.com"}</span>,
          },
          phone: {
               label: <span>{"Телефон: "}</span>,
               text: <span>{"+7 918 656 09 29"}</span>,
          },
     },
     requisites: {
          heading: <span className={textStyles.crimson90}>{"Реквизиты"}</span>,
          IP: {
               label: <span>{"ИП: "}</span>,
               text: <span>{"Марков Роман Владимирович"}</span>,
          },
          OGRNIP: {
               label: <span>{"ОГРНИП: "}</span>,
               text: <span>{"322237500281702"}</span>,
          },
          INN: {
               label: <span>{"ИНН: "}</span>,
               text: <span>{"143533412001"}</span>,
          },
     },
};

export default FooterText;
