export const API_ROUTE = "/api";

//AUTHENTICATION
export const AUTH_ROUTE = "/authentication";
export const AUTH_API = API_ROUTE + AUTH_ROUTE;

export const AUTH_VKONTAKTE_ROUTE = "/vkontakte";
export const AUTH_VKONTAKTE_API = AUTH_API + AUTH_VKONTAKTE_ROUTE;
export const AUTH_VKONTAKTE_CALLBACK_ROUTE = "/callback";
export const AUTH_VKONTAKTE_CALLBACK_API = AUTH_VKONTAKTE_API + AUTH_VKONTAKTE_CALLBACK_ROUTE;

export const AUTH_VERIFYUSER_ROUTE = "/verify-user";
export const AUTH_VERIFYUSER_API = AUTH_API + AUTH_VERIFYUSER_ROUTE;
export const AUTH_LOGOUT_ROUTE = "/logout";
export const AUTH_LOGOUT_API = AUTH_API + AUTH_LOGOUT_ROUTE;

//PROFILE
export const PROFILE_ROUTE = "/profile";
export const PROFILE_API = API_ROUTE + PROFILE_ROUTE;

export const GET_USER_DATA_ROUTE = "/get-user-data";
export const GET_USER_DATA_API = PROFILE_API + GET_USER_DATA_ROUTE;
