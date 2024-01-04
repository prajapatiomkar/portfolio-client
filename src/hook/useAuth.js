import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";

const useAuth = () => {
  const userInfo = useSelector(selectCurrentUser);

  return useMemo(() => userInfo, [userInfo]);
};

export default useAuth;
