import React, { useState } from "react";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import { useProtectedQuery } from "../../app/services/auth.js";

export default function Welcome() {
  const user = useAuth();
  const [proctected, setProctected] = useState();
  const { data, error, isLoading } = useProtectedQuery();

  return (
    <div>
      <div className="flex justify-center flex-col items-center mt-20">
        <div className="text-2xl">Welcome, {user?.email}</div>
        <div
          onClick={() => {
            if (error) {
              toast.error(error.error);
            } else {
              setProctected(data?.message);
            }
          }}
          className="mt-10 bg-black text-white p-2 active:shadow-lg shadow-gray  select-none"
        >
          Proctected
        </div>

        <p>{!isLoading && proctected}</p>

        {}
      </div>
    </div>
  );
}
