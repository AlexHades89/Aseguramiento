import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./page/Inicio"
import ListaPacientes from "./page/ListaPacientes";
import ListaConsultas from "./page/ListaConsulta";
import ListaDoctor from "./page/ListaDoctor";
import AgregarPaciente from "./page/AgregarPaciente";
import AgregarConsulta from "./page/AgregarConsulta";
import AgregarDoctor from "./page/AgregarDoctor";
import Login from "./page/login";

function App() {
  function NotFound(){
    return <>Ha llegado a una pagina que no existe</>;
  }
  return (
  <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/ListaPacientes" element={<ListaPacientes />} />
          <Route path="/ListaDoctor" element={<ListaDoctor />} />
          <Route path="/ListaConsultas" element={<ListaConsultas />} />
          <Route path="/AgregarPaciente" element={<AgregarPaciente />} />
          <Route path="/AgregarDoctor" element={<AgregarDoctor />} />
          <Route path="/AgregarConsulta" element={<AgregarConsulta />} />
          <Route path="*" Component={NotFound}/>
        </Routes>
      </BrowserRouter>

      </div>
  );
}

export default App;
