import AgregarConsultaform from "../components/AgregarConsultaform"
import Navbar from "../components/Navbar"
import ConsultaProvider from "../context/ConsultaContext"


function AgregarConsulta() {
  return (
    <div>
        <Navbar/>
        <ConsultaProvider>
        <AgregarConsultaform/>
        </ConsultaProvider>
    </div>
  )
}

export default AgregarConsulta