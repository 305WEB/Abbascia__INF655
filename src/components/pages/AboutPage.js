import react from "react";
import Card from "../shared/Card";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

export default function AboutPage() {
  return (
    <>
      <Header />

      <Navbar />

      <div className="container">
        <br />
        <br />

        <h1 className="card">About Page</h1>

        <br />
      </div>
      <Footer />
    </>
  );
}
