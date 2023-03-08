import { User } from "@store/reducers/actionTypes";

export declare namespace NUser {
  type S = string;
  type B = boolean;
  type N = number;
  type V = void;

  type TUser = {
    role: N;
    accessToken: S | null;
    username: S | null;
    email: S | null;
  };

  type TReducer = {
    user: TUser;
    isUserLoading: B;
  };

  type TSetLoading = {
    type: User.SetLoading;
    payload: B;
  };

  type TSetUser = {
    type: User.SetUser;
    payload: TUser;
  };

  type TResetUser = {
    type: User.Reset;
  };

  type TActions = TSetLoading | TSetUser | TResetUser;
}
