import AgregarPacienteform from "../components/AgregarPacienteform"
import Navbar from "../components/Navbar"
import PacienteProvider from "../context/PacienteContext"


function AgregarPaciente() {
  return (
    <div>
        <Navbar/>
        <PacienteProvider>
        <AgregarPacienteform/>
        </PacienteProvider>
    </div>
  )
}

export default AgregarPaciente