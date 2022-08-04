const SetEmailPageText = {
     heading: <span>{"Изменить Email"}</span>,
     label: "email",
     placeholder: "Введите...",
     submit: "Отправить",
     verify: {
          heading: (
               <span>
                    {"На указанную почту отправлен код подтверждения, введите его ниже чтобы подтвердить изменения"}
               </span>
          ),
          label: "Код подтверждения",
     },
     cancel: "Отменить изменение email",
};

export default SetEmailPageText;
