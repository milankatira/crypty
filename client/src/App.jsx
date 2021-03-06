import { useState } from "react";
import {
  Navbar,
  Footer,
  Loader,
  Transaction,
  Welcome,
  Services,
} from "./components/index";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      {/* <h1>od</h1> */}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
