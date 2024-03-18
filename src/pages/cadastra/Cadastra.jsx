import React, { useState } from "react";
import axios from "axios";

function Cadastra() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [adress, setAdress] = useState("");
  const [loading, setLoading] = useState("");
  const url = "https://localhost:7139/api/DCandidate";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(url, {
        fullName,
        mobile,
        email,
        age,
        bloodGroup,
        adress,
      });
      console.log("Doador cadastrado com sucesso!", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar doador", error);
    } finally {
      setLoading(false);
      //limpar campos
      setFullName("");
      setMobile("");
      setEmail("");
      setAge("");
      setBloodGroup("");
      setAdress("");
    }
  };

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
        <h1>Cadastrar Doadores</h1>
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
                  <a className="nav-link" href="/busca">
                    Buscar doador
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <h1>Cadastrar Doadores</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome Completo
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">
                Telefone Celular
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefone"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="idade" className="form-label">
                Idade
              </label>
              <input
                type="number"
                className="form-control"
                id="idade"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="grupoSanguineo" className="form-label">
                Grupo Sanguíneo
              </label>
              <select
                className="form-select"
                id="grupoSanguineo"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
              >
                <option value="">Selecione o grupo sanguíneo</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                className="form-control"
                id="endereco"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastra;
