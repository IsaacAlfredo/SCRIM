import { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../components/login";

function Home() {
  return (
    <div className="Home">
      <header>
        <h1>Bem-vindo ao SCRIM!</h1>
        <h2>O melhor lugar para encontrar sua próxima scrim</h2>
      </header>
      <Login />
      <Link to="/profile">teste profile</Link>
    </div>
  );
}

export default Home;
