import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";

const useAuth = () => {
  const userInfo = useSelector(selectCurrentUser);

  console.log("email");
  return useMemo(() => userInfo, [userInfo]);
};

export default useAuth;
