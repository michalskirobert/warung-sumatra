import { NUser } from "@namespace/admin";
import { User } from "@store/reducers/actionTypes";

export const setLoading = (payload: NUser.TSetLoading["payload"]) => ({
  type: User.SetLoading,
  payload,
});

export const setUser = (payload: NUser.TSetUser["payload"]) => ({
  type: User.SetUser,
  payload,
});
