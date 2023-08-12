import AgregarDoctorform from "../components/AgregarDoctorform"
import Navbar from "../components/Navbar"
import DoctorProvider from "../context/DoctorContext"


function AgregarDoctor() {
  return (
    <div>
        <Navbar/>
        <DoctorProvider>
        <AgregarDoctorform/>
        </DoctorProvider>
    </div>
  )
}

export default AgregarDoctor