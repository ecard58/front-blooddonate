import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Gerenciamento de Doadores</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button className="btn btn-primary">
          <Link
            to="/cadastra"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Cadastrar Doador
          </Link>
        </button>
        <button className="btn btn-primary">
          <Link to="/busca" style={{ color: "white", textDecoration: "none" }}>
            Buscar Doador
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
