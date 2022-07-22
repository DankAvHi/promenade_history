import textStyles from "../../../../Styles/text.module.css";

const MoreAboutSectionText = {
     heading: (
          <>
               <span>{"Подробнее про "}</span>
               <br />
               <span className={textStyles.crimson90}>{"променад-хистори"}</span>
          </>
     ),
     content: (
          <>
               <span>{"Это "}</span>
               <span className={textStyles.purpule50}>{"аудио-подкаст"}</span>
               <span>{", созданный профессорами по истории, с многоголосой озвучкой. И "}</span>
               <span className={textStyles.purpule50}>{"главный участник "}</span>
               <span>{"всего происходящего – "}</span>
               <span className={textStyles.purpule50}>{"ты"}</span>
               <span>{". В течение часа голоса в наушниках будут вести тебя "}</span>
               <span className={textStyles.purpule50}>{"сквозь время"}</span>
               <span>{". Ты узнаешь больше о городе и его истории, и "}</span>
               <span className={textStyles.purpule50}>{"непременно влюбишься "}</span>
               <span>{"в него заново. Это свидание с городом, на которое лучше приходить с "}</span>
               <span className={textStyles.purpule50}>{"друзьями"}</span>
               <span>{"."}</span>
          </>
     ),
};
export default MoreAboutSectionText;
