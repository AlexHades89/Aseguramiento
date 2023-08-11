import LoginProvider from "../context/LoginContext"
import Loginform from "../components/Loginform"


function login() {
  return (
    <div>
    <LoginProvider>
      <Loginform/>
    </LoginProvider>
    </div>
  )
}

export default login