const ProfilePageText = {
     loadingError: (
          <span>
               {
                    "Не удалось загрузить профиль, попробуйте перезагрузить страницу или перезайти в аккаунт, если проблема не исчезла обратитесь в поддержку: "
               }
          </span>
     ),
     loadingTickets_error: (
          <span>
               {
                    "Не удалось загрузить билеты, попробуйте перезагрузить страницу или перезайти в аккаунт, если проблема не исчезла обратитесь в поддержку: "
               }
          </span>
     ),
     supportEmail: "example@gmail.com",
     heading: <span>{"Ваш профиль"}</span>,
     welcome: <span>{"Здравствуйте,"}</span>,
     logout: <span>{"Выйти из Аккаунта"}</span>,
     email: {
          existed: <span>{"Ваш Email: "}</span>,
          notExisted: <span>{"Вы не указали Email, нажмите чтобы добавить его: "}</span>,
          add: <span>{"Добавить Email"}</span>,
          change: <span>{"Изменить Email"}</span>,
     },
     bot_link: <span>{"Перейти к боту"}</span>,
     ticketHeading: <span>{"Ваши билеты: "}</span>,
     ticketDisabled: <span>{"Использованные: "}</span>,
     ticketNumber: <span>{"Номер: "}</span>,
     ticketStatus: {
          active: "Билет активен",
          disabled: "Билет не активен",
     },
};

export default ProfilePageText;
