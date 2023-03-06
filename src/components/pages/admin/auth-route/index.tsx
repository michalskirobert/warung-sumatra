import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "@fire/index";
import { onAuthStateChanged } from "@firebase/auth";

import { setIsUserLoading, setUser } from "@store/actions/user";

import { useAppDispatch, useAppSelector } from "@store/config";

import * as C from "@utils/constants";

interface IAuthRoute {
  children: any;
}

export const AuthRoute = ({ children }: IAuthRoute) => {
  const { isUserLoading, user } = useAppSelector(({ auth }) => auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const AuthCheck = () =>
    onAuthStateChanged(auth, (checkingUser) => {
      dispatch(setIsUserLoading(true));
      if (!checkingUser) {
        navigate(C.LOGIN_PAGE_ROUTE);
        dispatch(setIsUserLoading(false));
        return;
      }

      const payload = { ...user, ...checkingUser };

      dispatch(setUser(payload));
    });

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  if (isUserLoading) return null;

  return children;
};
