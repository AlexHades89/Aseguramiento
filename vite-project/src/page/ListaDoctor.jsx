import ListaDoctorform from "../components/ListaDoctorform"
import Navbar from "../components/Navbar"
import DoctorProvider from "../context/DoctorContext"


function ListaDoctor() {
  return (
    <div>
        <Navbar/>
        <DoctorProvider>
        <ListaDoctorform/>
        </DoctorProvider>
    </div>
  )
}

export default ListaDoctor