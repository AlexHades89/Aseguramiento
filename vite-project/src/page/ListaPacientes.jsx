import ListaPacientesform from "../components/ListaPacientesform"
import Navbar from "../components/Navbar"
import PacienteProvider from "../context/PacienteContext"


function ListaPacientes() {
  return (
    <div>
        <Navbar/>
        <PacienteProvider>
        <ListaPacientesform/>
        </PacienteProvider>
    </div>
  )
}

export default ListaPacientes