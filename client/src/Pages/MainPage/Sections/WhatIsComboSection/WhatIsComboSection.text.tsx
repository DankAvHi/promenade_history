import textStyles from "../../../../Styles/text.module.css";

const WhatIsComboSectionText = {
     heading: (
          <>
               <span>{"Что такое "}</span>
               <br />
               <span className={textStyles.crimson90}>{"хистори комбо?"}</span>
          </>
     ),

     content: (
          <>
               <span>{"Мы придумали "}</span>
               <span className={textStyles.purpule50}>{"хистори комбо"}</span>
               <span>{", чтобы дополнить те яркие эмоции, которые ты получишь на нашем "}</span>
               <span className={textStyles.purpule50}>{"Иммерсивном Спектакле"}</span>
               <span>{"."}</span>
               <br />
               <br />
               <span>{"Поэтому вместе с билетом на спектакль "}</span>
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
