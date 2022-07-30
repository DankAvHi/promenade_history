import textStyles from "../../../../Styles/text.module.css";

const TicketSectionText = {
     heading: <span className={textStyles.crimson90}>{"Наши билеты"}</span>,
     historyCombo: {
          heading: <span>{"History Combo"}</span>,
          description: (
               <span>
                    {
                         "Получите максимум эмоций и незабываемых ощущений от увлекательного променада с нашими партнёрами с билетом “Хистори Комбо”."
                    }
               </span>
          ),
          price: <span>{"Купить за 2500₽"}</span>,
     },
     historyBelora: {
          heading: <span>{"History Belora"}</span>,
          description: <span>{"Классическая прогулка с историей."}</span>,
          price: <span>{"Купить за 1500₽"}</span>,
     },
};

export default TicketSectionText;
