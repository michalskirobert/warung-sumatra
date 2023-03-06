import { NUser } from "@namespace/admin";
import { User } from "../actionTypes";

const initial: NUser.TReducer = {
  user: {
    role: 0,
    token: null,
    email: null,
    username: null,
  },
  isUserLoading: false,
};

export const auth = (state = initial, action: NUser.TActions) => {
  switch (action.type) {
    default:
      return state;
    case User.SetUser:
      return {
        ...state,
        user: action.payload,
        isUserLoading: false,
      };
    case User.SetLoading:
      return {
        ...state,
        isUserLoading: action.payload,
      };
  }
};
