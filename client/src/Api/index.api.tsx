import useLogoutApi from "./authentication/logout.api";
import useVerifyUserApi from "./authentication/verifyUser.api";
import useGetUserDataApi from "./profile/getUserData.api";

export function api() {
     return { useVerifyUserApi, useGetUserDataApi, useLogoutApi };
}
