import React from "react";
import HeroSection from "../components/molecules/HeroSection";
import useAuth from "../hook/useAuth";
import Welcome from "../components/molecules/Welcome";

export default function HomePage() {
  const isUserAuth = useAuth();
  return <div>{isUserAuth?.email ? <Welcome /> : <HeroSection />}</div>;
}
