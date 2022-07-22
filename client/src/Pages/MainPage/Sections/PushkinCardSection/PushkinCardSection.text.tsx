import textStyles from "../../../../Styles/text.module.css";

const PushkinCardSectionText = {
     heading: <span className={textStyles.purpule80}>{"Пушкинская карта"}</span>,
     subHeading: (
          <>
               <span>{"Удели "}</span>
               <span className={textStyles.crimson90}>{"всего 10 минут "}</span>
               <span>{"чтобы получить пушкинскую карту"}</span>
          </>
     ),
     createAccount: (
          <>
               <span>{"Создай "}</span>
               <span className={textStyles.purpule80}>{"подтверждённый"}</span>
               <br />
               <span className={textStyles.purpule80}>{" аккаунт "}</span>
               <span>{"на Госуслугах"}</span>
          </>
     ),
     download: (
          <>
               <span>{"Скачай "}</span>
               <span className={textStyles.purpule80}>«Госуслуги. Культура»</span>
          </>
     ),
     card: (
          <>
               <span>{"Выпусти в приложении "}</span>
               <br />
               <span className={textStyles.purpule80}>{"виртуальную карту"}</span>
          </>
     ),
};
export default PushkinCardSectionText;
