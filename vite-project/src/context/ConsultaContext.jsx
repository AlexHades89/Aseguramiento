import { createContext, useContext, useState, useEffect } from "react";
import { getConsulta, postConsulta } from "../api/Consulta";
import { getPaciente } from "../api/pacientes"
import { getDoctor } from "../api/Doctor"

const ConsultaContext = createContext();

export const useConsulta = () => {
  const context = useContext(ConsultaContext);
  if (!context) throw new Error("useUsers must used within a provider");
  return context;
};

function ConsultaProvider({ children }) {

  const [pacientes, setPacientes] = useState();
  const [doctor, setDocotor] = useState();

  const Consulta = async () => {
    const Consulta = await getConsulta()
      .then((data) => {
        return data;
      })
      .catch((error) => error);
    return Consulta;
  };

  useEffect(() => {
    getPaciente().then((data) =>
    setPacientes(data.map((m) => ({ value: m.name, label: m.name })))
    );
    getDoctor().then((data) =>
      setDocotor(data.map((m) => ({ value: m.name, label: m.name })))
    );
  }, []);

  const insert = (credentials) => postConsulta(credentials);



  return (
    <ConsultaContext.Provider
      value={{ Consulta,  insert }}
    >
      {children}
    </ConsultaContext.Provider>
  );
}

export default ConsultaProvider;