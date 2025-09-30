import style from "../css/Movies.module.css";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
export default function Movies() {
  return (
    <>
      <Search />
      <Footer />
    </>
  );
}
