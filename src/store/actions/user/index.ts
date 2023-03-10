import { NUser } from "@namespace/admin";
import { User } from "@store/reducers/actionTypes";

export const setIsUserLoading = (payload: NUser.TSetLoading["payload"]) => ({
  type: User.SetLoading,
  payload,
});

export const setUser = (payload: NUser.TSetUser["payload"]) => ({
  type: User.SetUser,
  payload,
});

export const resetUser = (): NUser.TResetUser => ({ type: User.Reset });
