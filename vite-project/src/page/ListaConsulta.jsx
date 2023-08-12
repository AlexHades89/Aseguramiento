import ListaConsultasform from '../components/ListaConsultasform'
import Navbar from '../components/Navbar'
import ConsultaProvider from '../context/ConsultaContext'

function ListaConsulta() {
  return (
    <div>
        <Navbar/>
        <ConsultaProvider>
        <ListaConsultasform/>
        </ConsultaProvider>
    </div>
  )
}

export default ListaConsulta