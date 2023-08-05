import NavBar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaPacientes from "./ListaPacientes";
import ListaConsultas from "./ListaConsultas";
import ListaDoctor from "./ListaDoctor";
import AgregarPaciente from "./AgregarPaciente";
import AgregarConsulta from "./AgregarConsulta";
import AgregarDoctor from "./AgregarDoctor";

function Inicio() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route patch="/Inicio" element={<Inicio />} />
          <Route patch="/ListaPacientes" element={<ListaPacientes />} />
          <Route patch="/ListaDoctor" element={<ListaDoctor />} />
          <Route path="/ListaConsultas" element={<ListaConsultas />} />
          <Route path="/AgregarPaciente" element={<AgregarPaciente />} />
          <Route path="/AgregarDoctor" element={<AgregarDoctor />} />
          <Route path="/AgregarConsulta" element={<AgregarConsulta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Inicio;
