import { createContext, useContext} from "react";
import { getPaciente, postPaciente } from "../api/pacientes";

const PacienteContext = createContext();

export const usePaciente = () => {
  const context = useContext(PacienteContext);
  if (!context) throw new Error("useUsers must used within a provider");
  return context;
};

function PacienteProvider({ children }) {

  const Paciente = async () => {
    const Paciente = await getPaciente()
      .then((data) => {
        return data;
      })
      .catch((error) => error);
    return Paciente;
  };

  const insert = (credentials) => postPaciente(credentials);



  return (
    <PacienteContext.Provider
      value={{ Paciente,  insert }}
    >
      {children}
    </PacienteContext.Provider>
  );
}

export default PacienteProvider;