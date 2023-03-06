import { auth } from "@fire/index";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from "react-router-dom";

export const useLoginService = () => {
  interface ISignInProps {
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const signIn = async (values: ISignInProps) => {
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (error) {
      alert("error");
    }
  };

  return {
    signIn,
  };
};
