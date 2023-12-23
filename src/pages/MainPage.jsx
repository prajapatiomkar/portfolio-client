import React from "react";
import Header from "../components/molecules/Header";

import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
