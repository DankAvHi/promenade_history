import textStyles from "../../../../Styles/text.module.css";
const StartPointText = {
     heading: (
          <>
               <span>{"Точка "}</span>
               <span className={textStyles.crimson90}>{"Старта"}</span>
          </>
     ),

     locationTitle: <span>{"Возле кинотеатра Белая река"}</span>,
     location: <span>{"Г. Белореченск, ул. Толстого 142"}</span>,

     timeTitle: <span>{"Время работы"}</span>,
     time: <span>{"с 9:00 до 19:00"}</span>,

     sellerPosition: (
          <>
               <span className={textStyles.purpule50}>{"Билетер "}</span>
               <span>{"будет находиться "}</span>
               <span className={textStyles.purpule50}>{"около кинотеатра"}</span>
          </>
     ),
     serviceAcces: (
          <>
               <span>{"Прогулка доступна с "}</span>
               <span className={textStyles.purpule50}>{"10 утра "}</span>
               <span>{"до "}</span>
               <span className={textStyles.purpule50}>{"7 вечера "}</span>
          </>
     ),

     registryInfo: (
          <>
               <span>{"После успешной верификации вам на "}</span>
               <span className={textStyles.purpule50}>{"электронную почту "}</span>
               <span>{"придёт письмо, содержащее доступ к Спектаклю, инструкцию и подарки от наших партнёров."}</span>
          </>
     ),
};

export default StartPointText;
