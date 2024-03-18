import React, { useEffect, useState } from "react";
import axios from "axios";

function Busca() {
  const [pesquisa, setPesquisa] = useState("");
  const [doadores, setDoadores] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://localhost:7139/api/DCandidate";

  const getDoadores = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setDoadores(data);
    } catch (error) {
      console.log("Erro ao buscar doar: ", error);
    } finally {
      setLoading(false);
    }
  };

  const pesquisaDoadores = doadores.filter((doador) => {
    return doador.fullName.toLowerCase().includes(pesquisa.toLowerCase());
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getDoadores();
  };

  useEffect(() => {
    getDoadores();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h1>Buscar Doadores</h1>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "aquamarine" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="/">
                Banco de Sangue
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cadastra">
                    Cadastrar doador
                  </a>
                </li>
              </ul>
              <form className="d-flex" onSubmit={handleSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Buscar"
                  value={pesquisa}
                  onChange={(e) => setPesquisa(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
        <ul style={{ listStyleType: "none" }}>
          {loading ? (
            <li>Carregando...</li>
          ) : (
            pesquisaDoadores.map((item) => (
              <li key={item.id}>
                {item.fullName}, {item.age} - Grupo {item.bloodGroup} /{" "}
                {item.adress}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Busca;
