import { ReactElement } from "react";
import textStyles from "../../../../Styles/text.module.css";

export const headingText = (
     <>
          <span>Как это</span> <span className={textStyles.crimson90}>работает?</span>
     </>
);

export const itemsTexts: { heading: ReactElement<HTMLSpanElement>; content: ReactElement<HTMLSpanElement> }[] = [
     {
          heading: <span className={textStyles.crimson90}>{"Покупаешь билет и проходишь Верификацию"}</span>,
          content: (
               <p>
                    <span>
                         {"Покупаешь билет с выбранным бонусом. Билет можно оплатить любой картой, в том числе и "}
                    </span>
                    <span className={textStyles.purpule50}>{"Пушкинской"}</span>
                    <span>
                         {
                              ". Согласно законодательству все билеты, купленные по Пушкинской карте, должны проверяться до старта: билетёр сверит имя на билете и в твоем паспорте."
                         }
                    </span>
               </p>
          ),
     },
     {
          heading: <span className={textStyles.crimson90}>{"Идёшь на прогулку в удобное время"}</span>,
          content: (
               <p>
                    <span>{"Не забудь зарядить смартфон и взять любимые наушники. Приходи в любой день с "}</span>
                    <span className={textStyles.purpule50}>{"10:00 "}</span>
                    <span>{"до "}</span>
                    <span className={textStyles.purpule50}>{"19:00 "}</span>
                    <span>{"на точку старта (фонтан в городском парке) На старте тебя встретит наш сотрудник."}</span>
               </p>
          ),
     },
     {
          heading: <span className={textStyles.crimson90}>{"Гуляешь и узнаешь историю города"}</span>,
          content: (
               <p>
                    <span>
                         {
                              "Тебе, наш дорогой друг, предстоит пройти интерактивную прогулку, в которой с тобой будут взаимодействовать двое героев "
                         }
                    </span>
                    <span className={textStyles.purpule50}>{"Глеб Васильевич "}</span>
                    <span>{"и "}</span>
                    <span className={textStyles.purpule50}>{"Арсений"}</span>
                    <span>
                         {
                              ", но они будут идти не рядом с тобой, а в твоих наушниках, рассказывая увлекательную историю твоего города в правильном хронологическом порядке."
                         }
                    </span>
               </p>
          ),
     },
];

export const actionCallText = <span>{"Смотри! Слушай! Ощущай! Наслаждайся!"}</span>;
export const actionText = <span>{"Купить сейчас"}</span>;
