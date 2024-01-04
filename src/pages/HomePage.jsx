import React from "react";
import HeroSection from "../components/molecules/HeroSection";
import useAuth from "../hook/useAuth";
import Welcome from "../components/molecules/Welcome";

export default function HomePage() {
  const user = useAuth();
  return <div>{user?.email ? <Welcome /> : <HeroSection />}</div>;
}
