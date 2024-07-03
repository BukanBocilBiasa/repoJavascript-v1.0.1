import { useState } from "react";
import MainBody from "../components/MainBody";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <MainBody>
      <Header />
      <h1>Judul Web</h1>
      <p>deskripsi</p>
      <Footer />
    </MainBody>
  );
}

export default Home;
