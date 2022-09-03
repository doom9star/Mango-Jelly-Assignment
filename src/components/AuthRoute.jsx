import { Navigate } from "react-router-dom";
import useStore from "../hooks/useStore";

function AuthRoute({ component }) {
  const { user } = useStore();

  if (!user.name) {
    return <Navigate to={"/"} />;
  }

  return component;
}

export default AuthRoute;
