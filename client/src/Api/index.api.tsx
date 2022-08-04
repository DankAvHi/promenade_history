import useLogoutApi from "./authentication/logout.api";
import useVerifyUserApi from "./authentication/verifyUser.api";
import useCancelEmailChangeApi from "./profile/cancelEmailChange.api";
import useChangeEmailApi from "./profile/changeEmail.api";
import useCheckEmailVerificationApi from "./profile/checkEmailVerification.api";
import useGetUserDataApi from "./profile/getUserData.api";
import useGetUserTicketsApi from "./profile/getUserTickets.api";
import useVerifyEmailApi from "./profile/verifyEmail.api";

export function api() {
     return {
          useVerifyUserApi,
          useGetUserDataApi,
          useLogoutApi,
          useChangeEmailApi,
          useGetUserTicketsApi,
          useCheckEmailVerificationApi,
          useVerifyEmailApi,
          useCancelEmailChangeApi,
     };
}
