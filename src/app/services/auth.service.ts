import requestApi from "./api.service";
import { API_PATH } from "./_path.service";

/**
 * AuthLoginService
 * @param params = {"username":"", "password":""}
 * @returns
 */
const AuthLoginService = ({ params, cancelToken }: any) => {
  return requestApi().post("/location/sikersa/auth/login", params, {
    cancelToken: cancelToken,
  });
};

/**
 * AuthLoginService
 * @param params = {"id", "oldPassword":"", "newPassword":""}
 * @returns
 */
const ResetPasswordService = (params: any = {}, sourceToken: any) => {
  return requestApi().post(
    (process.env.API_MAIN_SERVICE as any) +
      API_PATH().account +
      "/reset-password",
    params,
    { cancelToken: sourceToken } // <-- IMPORTANT!
  );
};

/**
 * Get user detail yg login
 * @returns
 */
const AuthUserDetailService = (cancelToken: any = undefined) => {
  return requestApi().post(
    (process.env.API_MAIN_SERVICE as any) + "/auth/details",
    {
      cancelToken: cancelToken,
    }
  );
};

export { AuthLoginService, AuthUserDetailService, ResetPasswordService };
