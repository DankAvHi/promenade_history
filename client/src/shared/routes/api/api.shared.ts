export const API_ROUTE = "/api";

//AUTHENTICATION
export const AUTH_ROUTE = "/authentication";

export const AUTH_VKONTAKTE_ROUTE = "/vkontakte";
export const AUTH_VKONTAKTE_CALLBACK_ROUTE = "/callback";
export const AUTH_VKONTAKTE_API = API_ROUTE + AUTH_ROUTE + AUTH_VKONTAKTE_ROUTE;
export const AUTH_VKONTAKTE_CALLBACK_API = AUTH_VKONTAKTE_API + AUTH_VKONTAKTE_CALLBACK_ROUTE;

export const AUTH_VERIFYUSER_ROUTE = "/verify-user";
export const AUTH_LOGOUT_ROUTE = "/logout";
export const AUTH_LOGOUT_API = API_ROUTE + AUTH_ROUTE + AUTH_LOGOUT_ROUTE;
export const AUTH_VERIFYUSER_API = API_ROUTE + AUTH_ROUTE + AUTH_VERIFYUSER_ROUTE;

//PROFILE
export const PROFILE_ROUTE = "/profile";

export const GET_USER_DATA_ROUTE = "/get-user-data";
export const GET_USER_TICKETS_ROUTE = "/get-user-tickets";
export const GET_USER_DATA_API = API_ROUTE + PROFILE_ROUTE + GET_USER_DATA_ROUTE;
export const GET_USER_TICKETS_API = API_ROUTE + PROFILE_ROUTE + GET_USER_TICKETS_ROUTE;

export const CHANGE_EMAIL_ROUTE = "/change-email";
export const CHANGE_EMAIL_API = API_ROUTE + PROFILE_ROUTE + CHANGE_EMAIL_ROUTE;
export const CHANGE_EMAIL_INVALID_EMAIL_ERROR = "invalid email";
export const CHANGE_EMAIL_EXISTED_EMAIL_ERROR = "email existed";

//WEBHOOK
export const WEBHOOK_ROUTE = "/webhook";
//QTICKETS
export const WEBHOOK_QTICKETS_ROUTE = "/qtickets";

export const WEBHOOK_QTICKETS_NEW_ORDER_ROUTE = "/new-order";
export const WEBHOOK_QTICKETS_ORDER_GET_PAYED_ROUTE = "/order-payed";
export const WEBHOOK_QTICKETS_ORDER_DELETED_ROUTE = "/order-deleted";
export const WEBHOOK_QTICKETS_ORDER_CHANGED_ROUTE = "/order-changed";
export const WEBHOOK_QTICKETS_NEW_ORDER_API =
     API_ROUTE + WEBHOOK_ROUTE + WEBHOOK_QTICKETS_ROUTE + WEBHOOK_QTICKETS_NEW_ORDER_ROUTE;
export const WEBHOOK_QTICKETS_ORDER_GET_PAYED_API =
     API_ROUTE + WEBHOOK_ROUTE + WEBHOOK_QTICKETS_ROUTE + WEBHOOK_QTICKETS_ORDER_GET_PAYED_ROUTE;
export const WEBHOOK_QTICKETS_ORDER_DELETED_API =
     API_ROUTE + WEBHOOK_ROUTE + WEBHOOK_QTICKETS_ROUTE + WEBHOOK_QTICKETS_ORDER_DELETED_ROUTE;
export const WEBHOOK_QTICKETS_ORDER_CHANGED_API =
     API_ROUTE + WEBHOOK_ROUTE + WEBHOOK_QTICKETS_ROUTE + WEBHOOK_QTICKETS_ORDER_CHANGED_ROUTE;
