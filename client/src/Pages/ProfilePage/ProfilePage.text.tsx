const ProfilePageText = {
     loading_error: (
          <span>
               {
                    "Не удалось загрузить профиль, попробуйте перезагрузить страницу или перезайти в аккаунт, если проблема не исчезла обратитесь в поддержку: "
               }
          </span>
     ),
     support_email: "example@gmail.com",
     heading: <span>{"Ваш профиль"}</span>,
     welcome: <span>{"Здравствуйте,"}</span>,
     logout: <span>{"Выйти из Аккаунта"}</span>,
     email: {
          existed: <span>{"Ваш Email: "}</span>,
          not_existed: <span>{"Вы не указали Email, нажмите чтобы добавить его: "}</span>,
          add: <span>{"Добавить Email"}</span>,
          change: <span>{"Изменить Email"}</span>,
     },
};

export default ProfilePageText;
