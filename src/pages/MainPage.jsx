import React from "react";
import Header from "../components/molecules/Header";

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function MainPage() {
  return (
    <main>
      <Header />
      <Outlet />
      <Toaster />
    </main>
  );
}
