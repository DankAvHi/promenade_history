import textStyles from "../../../../Styles/text.module.css";

const WhatIsComboSectionText = {
     heading: (
          <>
               <span>{"Подробнее про "}</span>
               <br />
               <span className={textStyles.crimson90}>{"променад-хистори"}</span>
          </>
     ),

     content: (
          <>
               <span>{"Мы придумали "}</span>
               <span className={textStyles.purpule50}>{"хистори комбо"}</span>
               <span>{", чтобы дополнить те яркие эмоции, которые ты получишь на нашей "}</span>
               <span className={textStyles.purpule50}>{"исторической прогулке"}</span>
               <span>{"."}</span>
               <br />
               <br />
               <span>{"Поэтому вместе с билетом на культурную прогулку "}</span>
               <span className={textStyles.purpule50}>{"ты получишь "}</span>
               <span>{"выбранный тобой "}</span>
               <span className={textStyles.purpule50}>{"сертификат"}</span>
               <span>{", чтобы у тебя была возможность "}</span>
               <span className={textStyles.purpule50}>{"перекусить "}</span>
               <span>{"и "}</span>
               <span className={textStyles.purpule50}>{"поделиться "}</span>
               <span>{"впечатлениями от променада с друзьями."}</span>
               <br />
               <br />
               <span>
                    {
                         "Но ты также можешь выбрать вариант и без них, не думаем, что от этого тебе будет менее интересно."
                    }
               </span>
          </>
     ),
};
export default WhatIsComboSectionText;
