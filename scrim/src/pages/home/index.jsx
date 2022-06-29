import { useState } from "react";
import { Login } from "../../components/login";

function Home() {
  return (
    <div className="Home">
      <header>
        <h1>Bem-vindo ao SCRIM!</h1>
        <h2>O melhor lugar para encontrar sua próxima scrim</h2>
      </header>
      <Login />
    </div>
  );
}

export default Home;
